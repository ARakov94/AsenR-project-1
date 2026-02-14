// ============================================================
// Restaurant Reservation Manager
// ============================================================

// --------------- Configuration ---------------
const CONFIG = {
    // Change this to your N8N instance base URL
    N8N_BASE_URL: 'https://n8n.simeontsvetanovn8nworkflows.site',
    ENDPOINTS: {
        reservations: '/webhook/restaurant-reservations'
    },
    DEFAULT_DURATION_HOURS: 2,
    STORAGE_KEYS: {
        layout: 'restaurant_layout_v1',
        allocations: 'restaurant_allocations',
        reservations: 'restaurant_reservations_local'
    }
};

// --------------- Application State ---------------
const state = {
    currentDate: new Date().toISOString().split('T')[0],
    currentFloor: 1,
    editMode: false,
    tables: [],
    reservations: [],
    allocations: {},       // { reservationId: tableId }
    selectedTableId: null,
    selectedReservationId: null,
    dragState: null        // For table repositioning in edit mode
};

// --------------- Default Table Layout ---------------
function getDefaultTables() {
    const tables = [];

    for (let floor = 1; floor <= 2; floor++) {
        const offset = (floor - 1) * 6;
        const tOffset = (floor - 1) * 9;

        // Left wall booths (3)
        for (let i = 0; i < 3; i++) {
            tables.push({
                id: `f${floor}-booth-L${i + 1}`,
                floor,
                type: 'booth',
                label: `С${offset + i + 1}`,
                capacity: 5,
                x: 2, y: 4 + i * 33,
                width: 15, height: 24
            });
        }

        // Right wall booths (3)
        for (let i = 0; i < 3; i++) {
            tables.push({
                id: `f${floor}-booth-R${i + 1}`,
                floor,
                type: 'booth',
                label: `С${offset + i + 4}`,
                capacity: 5,
                x: 83, y: 4 + i * 33,
                width: 15, height: 24
            });
        }

        // Square tables in the center (3 rows x 3 columns = 9)
        let num = 1;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                tables.push({
                    id: `f${floor}-table-${num}`,
                    floor,
                    type: 'square',
                    label: `М${tOffset + num}`,
                    capacity: 4,
                    x: 25 + col * 19,
                    y: 6 + row * 33,
                    width: 12, height: 22
                });
                num++;
            }
        }
    }

    return tables;
}

// --------------- Initialization ---------------
function init() {
    document.getElementById('datePicker').value = state.currentDate;
    loadLayout();
    loadAllocations();
    loadReservationsLocal();
    setupEventListeners();
    render();
    fetchReservations();
}

function setupEventListeners() {
    // Date change
    document.getElementById('datePicker').addEventListener('change', e => {
        state.currentDate = e.target.value;
        loadAllocations();
        loadReservationsLocal();
        render();
        fetchReservations();
    });

    // Floor tabs
    document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            state.currentFloor = parseInt(tab.dataset.floor);
            document.querySelectorAll('.floor-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderFloorPlan();
            renderStats();
        });
    });

    // Header buttons
    document.getElementById('syncBtn').addEventListener('click', fetchReservations);
    document.getElementById('autoAllocateBtn').addEventListener('click', autoAllocate);
    document.getElementById('editModeBtn').addEventListener('click', toggleEditMode);
    document.getElementById('addReservationBtn').addEventListener('click', () => openReservationModal());

    // Edit toolbar
    document.getElementById('addBoothBtn').addEventListener('click', () => addTable('booth', 5));
    document.getElementById('addSmallTableBtn').addEventListener('click', () => addTable('square', 2));
    document.getElementById('addMediumTableBtn').addEventListener('click', () => addTable('square', 4));
    document.getElementById('addLargeTableBtn').addEventListener('click', () => addTable('square', 8));
    document.getElementById('deleteTableBtn').addEventListener('click', deleteSelectedTable);
    document.getElementById('saveLayoutBtn').addEventListener('click', () => {
        saveLayout();
        showToast('Планът е запазен', 'success');
    });

    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelReservation').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
    document.getElementById('reservationForm').addEventListener('submit', handleReservationSubmit);

    // Close popover on outside click
    document.addEventListener('click', e => {
        const popover = document.getElementById('tablePopover');
        if (!popover.classList.contains('hidden') &&
            !popover.contains(e.target) &&
            !e.target.closest('.table-element')) {
            popover.classList.add('hidden');
        }
    });

    // Floor plan drag events (for table repositioning)
    const fp = document.getElementById('floorPlan');
    fp.addEventListener('mousemove', onTableDrag);
    fp.addEventListener('mouseup', endTableDrag);
    fp.addEventListener('mouseleave', endTableDrag);
}

// --------------- Rendering ---------------
function render() {
    renderFloorPlan();
    renderReservations();
    renderStats();
}

function renderFloorPlan() {
    const container = document.getElementById('floorPlan');
    container.innerHTML = '';
    container.classList.toggle('edit-active', state.editMode);

    const floorTables = state.tables.filter(t => t.floor === state.currentFloor);
    floorTables.forEach(table => container.appendChild(createTableElement(table)));
}

function createTableElement(table) {
    const el = document.createElement('div');
    el.className = 'table-element';
    el.dataset.tableId = table.id;

    // Position & size
    el.style.left   = table.x + '%';
    el.style.top    = table.y + '%';
    el.style.width  = table.width + '%';
    el.style.height = table.height + '%';

    // Type class
    el.classList.add(`type-${table.type}`);

    // Allocation info
    const allocation = getTableAllocation(table.id);
    if (allocation) {
        el.classList.add('status-reserved');
        el.innerHTML = `
            <span class="table-label">${table.label}</span>
            <span class="table-guest">${allocation.name}</span>
            <span class="table-time">${allocation.time} · ${allocation.guests}/${table.capacity}</span>
        `;
    } else {
        el.classList.add('status-available');
        el.innerHTML = `
            <span class="table-label">${table.label}</span>
            <span class="table-capacity">${table.type === 'booth' ? 'Сепаре' : 'Маса'} · ${table.capacity}</span>
        `;
    }

    // Selected state
    if (state.selectedTableId === table.id) el.classList.add('selected');

    // --- Event handlers ---
    if (state.editMode) {
        // Edit mode: drag to reposition, click to select, dblclick to edit props
        el.addEventListener('mousedown', e => { e.preventDefault(); startTableDrag(e, table.id); });
        el.addEventListener('click', e => { e.stopPropagation(); selectTable(table.id); });
        el.addEventListener('dblclick', e => { e.stopPropagation(); editTableProperties(table.id); });
        el.style.cursor = 'grab';
    } else {
        // Normal mode: click to show popover
        el.addEventListener('click', e => { e.stopPropagation(); showTablePopover(e, table); });
    }

    // Drop zone for reservation drag-and-drop
    el.addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        el.classList.add('drop-target');
    });
    el.addEventListener('dragleave', () => el.classList.remove('drop-target'));
    el.addEventListener('drop', e => {
        e.preventDefault();
        el.classList.remove('drop-target');
        const resId = e.dataTransfer.getData('text/plain');
        if (resId) {
            allocateTable(resId, table.id);
        }
    });

    return el;
}

function renderReservations() {
    const container = document.getElementById('reservationsList');

    if (state.reservations.length === 0) {
        container.innerHTML = '<div class="empty-state">Няма резервации за тази дата.<br>Натиснете "Синхронизирай" или добавете ръчно.</div>';
        return;
    }

    const sorted = [...state.reservations].sort((a, b) => a.time.localeCompare(b.time));

    container.innerHTML = sorted.map(res => {
        const tableId = state.allocations[res.id];
        const table = tableId ? state.tables.find(t => t.id === tableId) : null;
        const allocated = !!table;
        const isSelected = state.selectedReservationId === res.id;

        return `
            <div class="reservation-card ${allocated ? 'allocated' : 'unallocated'} ${isSelected ? 'selected-card' : ''}"
                 data-res-id="${res.id}"
                 draggable="true"
                 onclick="selectReservation('${res.id}')"
                 ondragstart="onReservationDragStart(event, '${res.id}')">
                <div class="res-header">
                    <span class="res-name">${escapeHtml(res.name)}</span>
                    <span class="res-time">${res.time}</span>
                </div>
                <div class="res-details">
                    <span>👥 ${res.guests} гости</span>
                    ${res.phone ? `<span>📞 ${escapeHtml(res.phone)}</span>` : ''}
                </div>
                <div class="res-table-info ${allocated ? 'has-table' : 'no-table'}">
                    ${allocated ? `📍 ${table.label} (${table.type === 'booth' ? 'Сепаре' : 'Маса'})` : '⚠️ Без маса'}
                </div>
                <div class="res-actions">
                    <button class="btn btn-small btn-secondary" onclick="event.stopPropagation(); openReservationModal('${res.id}')">✏️</button>
                    <button class="btn btn-small btn-danger" onclick="event.stopPropagation(); deleteReservation('${res.id}')">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderStats() {
    const totalGuests = state.reservations.reduce((sum, r) => sum + (r.guests || 0), 0);
    const totalRes = state.reservations.length;
    const floorTables = state.tables.filter(t => t.floor === state.currentFloor);
    const allocatedIds = new Set(Object.values(state.allocations));
    const occupied = floorTables.filter(t => allocatedIds.has(t.id)).length;
    const available = floorTables.length - occupied;

    document.getElementById('statTotalGuests').textContent = totalGuests;
    document.getElementById('statTotalReservations').textContent = totalRes;
    document.getElementById('statAvailableTables').textContent = available;
    document.getElementById('statOccupiedTables').textContent = occupied;
}

// --------------- Table Popover ---------------
function showTablePopover(event, table) {
    const popover  = document.getElementById('tablePopover');
    const alloc    = getTableAllocation(table.id);

    let body = `<div class="popover-info">Тип: <strong>${table.type === 'booth' ? 'Сепаре' : 'Маса'}</strong></div>`;
    body += `<div class="popover-info">Капацитет: <strong>${table.capacity} места</strong></div>`;

    if (alloc) {
        body += '<hr style="border-color:var(--border-subtle);margin:8px 0">';
        body += `<div class="popover-info"><strong>${escapeHtml(alloc.name)}</strong></div>`;
        body += `<div class="popover-info">⏰ ${alloc.time} · 👥 ${alloc.guests} гости</div>`;
        if (alloc.phone) body += `<div class="popover-info">📞 ${escapeHtml(alloc.phone)}</div>`;
        if (alloc.notes) body += `<div class="popover-info" style="margin-top:4px;font-style:italic">${escapeHtml(alloc.notes)}</div>`;
    }

    document.getElementById('popoverTitle').textContent = table.label;
    document.getElementById('popoverBody').innerHTML = body;

    // Action buttons
    const actionsEl = document.getElementById('popoverActions');
    actionsEl.innerHTML = '';

    if (alloc) {
        const freeBtn = document.createElement('button');
        freeBtn.className = 'btn btn-small btn-danger';
        freeBtn.textContent = 'Освободи';
        freeBtn.onclick = () => { deallocateTable(table.id); popover.classList.add('hidden'); };
        actionsEl.appendChild(freeBtn);
    }

    if (state.selectedReservationId && !alloc) {
        const res = state.reservations.find(r => r.id === state.selectedReservationId);
        if (res) {
            const allocBtn = document.createElement('button');
            allocBtn.className = 'btn btn-small btn-success';
            allocBtn.textContent = `Настани "${res.name}"`;
            allocBtn.onclick = () => { allocateTable(res.id, table.id); popover.classList.add('hidden'); };
            actionsEl.appendChild(allocBtn);
        }
    }

    // Position near the clicked table
    const rect = event.target.closest('.table-element').getBoundingClientRect();
    popover.style.left = Math.min(rect.right + 8, window.innerWidth - 290) + 'px';
    popover.style.top  = Math.max(8, rect.top) + 'px';
    popover.classList.remove('hidden');
}

// --------------- Allocation Logic ---------------
function getTableAllocation(tableId) {
    for (const [resId, tId] of Object.entries(state.allocations)) {
        if (tId === tableId) {
            return state.reservations.find(r => r.id === resId) || null;
        }
    }
    return null;
}

function allocateTable(reservationId, tableId) {
    // Remove any previous allocation for this reservation
    delete state.allocations[reservationId];

    // Remove any existing allocation on this table
    for (const [rid, tid] of Object.entries(state.allocations)) {
        if (tid === tableId) { delete state.allocations[rid]; break; }
    }

    state.allocations[reservationId] = tableId;
    saveAllocations();
    render();
    showToast('Резервацията е разпределена', 'success');
}

function deallocateTable(tableId) {
    for (const [resId, tId] of Object.entries(state.allocations)) {
        if (tId === tableId) { delete state.allocations[resId]; break; }
    }
    saveAllocations();
    render();
    showToast('Масата е освободена', 'info');
}

function autoAllocate() {
    const unallocated = state.reservations
        .filter(r => !state.allocations[r.id])
        .sort((a, b) => {
            if (a.time !== b.time) return a.time.localeCompare(b.time);
            return b.guests - a.guests; // larger groups first
        });

    if (unallocated.length === 0) {
        showToast('Всички резервации са вече разпределени', 'info');
        return;
    }

    let count = 0;
    for (const res of unallocated) {
        const best = findBestTable(res);
        if (best) {
            state.allocations[res.id] = best.id;
            count++;
        }
    }

    saveAllocations();
    render();

    if (count === unallocated.length) {
        showToast(`Всички ${count} резервации са разпределени`, 'success');
    } else {
        showToast(`${count}/${unallocated.length} разпределени. Няма достатъчно маси.`, 'error');
    }
}

function findBestTable(reservation) {
    const taken = new Set(Object.values(state.allocations));
    return state.tables
        .filter(t => !taken.has(t.id) && t.capacity >= reservation.guests)
        .sort((a, b) => {
            const dA = a.capacity - reservation.guests;
            const dB = b.capacity - reservation.guests;
            if (dA !== dB) return dA - dB;
            // Prefer booths for groups of 3-5
            if (reservation.guests >= 3 && reservation.guests <= 5) {
                if (a.type === 'booth' && b.type !== 'booth') return -1;
                if (b.type === 'booth' && a.type !== 'booth') return 1;
            }
            return 0;
        })[0] || null;
}

// --------------- Reservation CRUD ---------------
function selectReservation(resId) {
    state.selectedReservationId = (state.selectedReservationId === resId) ? null : resId;
    renderReservations();

    // If allocated, switch to correct floor and highlight table
    if (state.selectedReservationId && state.allocations[state.selectedReservationId]) {
        const tableId = state.allocations[state.selectedReservationId];
        const table = state.tables.find(t => t.id === tableId);
        if (table && table.floor !== state.currentFloor) {
            state.currentFloor = table.floor;
            document.querySelectorAll('.floor-tab').forEach(t => {
                t.classList.toggle('active', parseInt(t.dataset.floor) === state.currentFloor);
            });
            renderFloorPlan();
        }
        // Pulse the table
        setTimeout(() => {
            const el = document.querySelector(`[data-table-id="${tableId}"]`);
            if (el) {
                el.style.animation = 'pulse 0.5s ease 3';
                setTimeout(() => { el.style.animation = ''; }, 1600);
            }
        }, 50);
    }
}

function openReservationModal(resId) {
    const modal = document.getElementById('reservationModal');
    const form  = document.getElementById('reservationForm');

    updateTableSelect();

    if (resId) {
        const res = state.reservations.find(r => r.id === resId);
        if (!res) return;
        document.getElementById('modalTitle').textContent = 'Редактирай Резервация';
        document.getElementById('resName').value   = res.name;
        document.getElementById('resTime').value   = res.time;
        document.getElementById('resGuests').value = res.guests;
        document.getElementById('resPhone').value  = res.phone || '';
        document.getElementById('resNotes').value  = res.notes || '';
        document.getElementById('resTable').value  = state.allocations[resId] || '';
        form.dataset.editId = resId;
    } else {
        document.getElementById('modalTitle').textContent = 'Нова Резервация';
        form.reset();
        delete form.dataset.editId;
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('reservationModal').classList.add('hidden');
}

function handleReservationSubmit(e) {
    e.preventDefault();
    const form   = e.target;
    const editId = form.dataset.editId;

    const reservation = {
        id:     editId || 'local-' + Date.now(),
        name:   document.getElementById('resName').value.trim(),
        time:   document.getElementById('resTime').value,
        guests: parseInt(document.getElementById('resGuests').value) || 2,
        phone:  document.getElementById('resPhone').value.trim(),
        notes:  document.getElementById('resNotes').value.trim(),
        source: 'manual'
    };

    if (editId) {
        const idx = state.reservations.findIndex(r => r.id === editId);
        if (idx >= 0) state.reservations[idx] = reservation;
    } else {
        state.reservations.push(reservation);
    }

    // Table allocation
    const selTable = document.getElementById('resTable').value;
    if (selTable) {
        state.allocations[reservation.id] = selTable;
    } else {
        delete state.allocations[reservation.id];
    }

    saveAllocations();
    saveReservationsLocal();
    closeModal();
    render();
    showToast(editId ? 'Резервацията е обновена' : 'Нова резервация добавена', 'success');
}

function deleteReservation(resId) {
    if (!confirm('Сигурни ли сте, че искате да изтриете тази резервация?')) return;
    state.reservations = state.reservations.filter(r => r.id !== resId);
    delete state.allocations[resId];
    if (state.selectedReservationId === resId) state.selectedReservationId = null;
    saveAllocations();
    saveReservationsLocal();
    render();
    showToast('Резервацията е изтрита', 'info');
}

function updateTableSelect() {
    const select = document.getElementById('resTable');
    const editId = document.getElementById('reservationForm').dataset.editId;
    const taken  = new Set(
        Object.entries(state.allocations)
              .filter(([rid]) => rid !== editId)
              .map(([, tid]) => tid)
    );

    select.innerHTML = '<option value="">-- Автоматично --</option>';
    state.tables
        .sort((a, b) => a.floor - b.floor || a.label.localeCompare(b.label))
        .forEach(t => {
            const busy = taken.has(t.id);
            const opt  = document.createElement('option');
            opt.value       = t.id;
            opt.textContent = `Ет.${t.floor} ${t.label} (${t.capacity} м.)${busy ? ' ✗' : ''}`;
            opt.disabled    = busy;
            select.appendChild(opt);
        });
}

// --------------- Drag & Drop: Reservation → Table ---------------
function onReservationDragStart(e, resId) {
    e.dataTransfer.setData('text/plain', resId);
    e.dataTransfer.effectAllowed = 'move';
    state.selectedReservationId = resId;
}

// --------------- Edit Mode ---------------
function toggleEditMode() {
    state.editMode = !state.editMode;
    const btn     = document.getElementById('editModeBtn');
    const toolbar = document.getElementById('editToolbar');

    if (state.editMode) {
        btn.innerHTML = '<span class="btn-icon">✅</span> Готово';
        btn.classList.replace('btn-primary', 'btn-success');
        toolbar.classList.remove('hidden');
    } else {
        btn.innerHTML = '<span class="btn-icon">✏️</span> Редактирай план';
        btn.classList.replace('btn-success', 'btn-primary');
        toolbar.classList.add('hidden');
        state.selectedTableId = null;
        saveLayout();
    }
    renderFloorPlan();
}

function selectTable(tableId) {
    state.selectedTableId = (state.selectedTableId === tableId) ? null : tableId;
    renderFloorPlan();
}

function addTable(type, capacity) {
    const existingCount = state.tables.filter(t => t.type === type).length;
    const label = type === 'booth'
        ? `С${existingCount + 1}`
        : `М${state.tables.filter(t => t.type === 'square').length + 1}`;

    const widthMap  = { 2: 9, 4: 12, 5: 15, 8: 16 };
    const heightMap = { 2: 16, 4: 22, 5: 24, 8: 22 };

    state.tables.push({
        id: `f${state.currentFloor}-${type}-${Date.now()}`,
        floor: state.currentFloor,
        type,
        label,
        capacity,
        x: 42, y: 40,
        width:  widthMap[capacity]  || 12,
        height: heightMap[capacity] || 20
    });

    saveLayout();
    renderFloorPlan();
    showToast(`${type === 'booth' ? 'Сепаре' : 'Маса'} (${capacity} места) добавена`, 'success');
}

function deleteSelectedTable() {
    if (!state.selectedTableId) {
        showToast('Изберете маса за изтриване', 'error');
        return;
    }
    state.tables = state.tables.filter(t => t.id !== state.selectedTableId);
    for (const [rid, tid] of Object.entries(state.allocations)) {
        if (tid === state.selectedTableId) delete state.allocations[rid];
    }
    state.selectedTableId = null;
    saveLayout();
    saveAllocations();
    renderFloorPlan();
    renderStats();
    showToast('Масата е изтрита', 'info');
}

function editTableProperties(tableId) {
    const table = state.tables.find(t => t.id === tableId);
    if (!table) return;

    const label = prompt('Етикет на масата:', table.label);
    if (label !== null && label.trim()) table.label = label.trim();

    const cap = prompt('Капацитет (брой места):', table.capacity);
    if (cap !== null) {
        const n = parseInt(cap);
        if (n > 0 && n <= 30) {
            table.capacity = n;
            if (table.type === 'square') {
                table.width = Math.max(9, Math.min(20, 7 + n * 1.2));
            }
        }
    }

    saveLayout();
    renderFloorPlan();
    showToast('Масата е обновена', 'success');
}

// --------------- Table Drag (Edit Mode Repositioning) ---------------
function startTableDrag(e, tableId) {
    if (!state.editMode) return;
    const container = document.getElementById('floorPlan');
    const rect      = container.getBoundingClientRect();
    const table     = state.tables.find(t => t.id === tableId);

    state.dragState = {
        tableId,
        startX: e.clientX,
        startY: e.clientY,
        origX:  table.x,
        origY:  table.y,
        rect
    };

    const el = document.querySelector(`[data-table-id="${tableId}"]`);
    if (el) { el.classList.add('dragging'); el.style.cursor = 'grabbing'; }
}

function onTableDrag(e) {
    if (!state.dragState) return;
    e.preventDefault();
    const { tableId, startX, startY, origX, origY, rect } = state.dragState;
    const table = state.tables.find(t => t.id === tableId);
    if (!table) return;

    const dx = ((e.clientX - startX) / rect.width)  * 100;
    const dy = ((e.clientY - startY) / rect.height) * 100;

    table.x = Math.max(0, Math.min(100 - table.width,  origX + dx));
    table.y = Math.max(0, Math.min(100 - table.height, origY + dy));

    const el = document.querySelector(`[data-table-id="${tableId}"]`);
    if (el) {
        el.style.left = table.x + '%';
        el.style.top  = table.y + '%';
    }
}

function endTableDrag() {
    if (!state.dragState) return;
    const el = document.querySelector(`[data-table-id="${state.dragState.tableId}"]`);
    if (el) { el.classList.remove('dragging'); el.style.cursor = 'grab'; }
    state.dragState = null;
    saveLayout();
}

// --------------- N8N API ---------------
async function fetchReservations() {
    const btn = document.getElementById('syncBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⏳</span> Зареждане...';

    try {
        const url = `${CONFIG.N8N_BASE_URL}${CONFIG.ENDPOINTS.reservations}?date=${state.currentDate}`;
        const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        let data = await res.json();

        // Handle wrapper: { reservations: [...] }
        if (data && !Array.isArray(data) && Array.isArray(data.reservations)) {
            data = data.reservations;
        }

        if (Array.isArray(data)) {
            const calRes = data.map(ev => ({
                id:     ev.id || 'gcal-' + Math.random().toString(36).substr(2, 9),
                name:   ev.name || ev.summary || 'Резервация',
                time:   ev.time || ev.startTime || '19:00',
                guests: parseInt(ev.guests || ev.attendees || 2) || 2,
                phone:  ev.phone || '',
                notes:  ev.notes || ev.description || '',
                source: 'google-calendar'
            }));
            const localRes = state.reservations.filter(r => r.source === 'manual');
            state.reservations = [...calRes, ...localRes];
            saveReservationsLocal();
            showToast(`Заредени ${calRes.length} резервации от Google Calendar`, 'success');
        }
    } catch (err) {
        console.warn('N8N fetch failed:', err.message);
        showToast('Не може да се свърже с N8N. Локални данни.', 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<span class="btn-icon">🔄</span> Синхронизирай';
        render();
    }
}

// --------------- Local Storage ---------------
function saveLayout() {
    try { localStorage.setItem(CONFIG.STORAGE_KEYS.layout, JSON.stringify(state.tables)); }
    catch (e) { console.warn('Failed to save layout', e); }
}

function loadLayout() {
    try {
        const raw = localStorage.getItem(CONFIG.STORAGE_KEYS.layout);
        state.tables = raw ? JSON.parse(raw) : getDefaultTables();
    } catch {
        state.tables = getDefaultTables();
    }
}

function saveAllocations() {
    try {
        const key = `${CONFIG.STORAGE_KEYS.allocations}_${state.currentDate}`;
        localStorage.setItem(key, JSON.stringify(state.allocations));
    } catch (e) { console.warn('Failed to save allocations', e); }
}

function loadAllocations() {
    try {
        const key = `${CONFIG.STORAGE_KEYS.allocations}_${state.currentDate}`;
        const raw = localStorage.getItem(key);
        state.allocations = raw ? JSON.parse(raw) : {};
    } catch {
        state.allocations = {};
    }
}

function saveReservationsLocal() {
    try {
        const key = `${CONFIG.STORAGE_KEYS.reservations}_${state.currentDate}`;
        localStorage.setItem(key, JSON.stringify(state.reservations));
    } catch (e) { console.warn('Failed to save reservations', e); }
}

function loadReservationsLocal() {
    try {
        const key = `${CONFIG.STORAGE_KEYS.reservations}_${state.currentDate}`;
        const raw = localStorage.getItem(key);
        state.reservations = raw ? JSON.parse(raw) : [];
    } catch {
        state.reservations = [];
    }
}

// --------------- Utilities ---------------
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

// --------------- Boot ---------------
document.addEventListener('DOMContentLoaded', init);
