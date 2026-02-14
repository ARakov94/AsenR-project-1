// ===== Configuration =====
const CONFIG = {
    webhookUrl: localStorage.getItem('n8n_webhook_url') || 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/dnd-items',
    backstoryWebhookUrl: localStorage.getItem('n8n_backstory_webhook_url') || 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/dnd-backstory',
    storageKey: 'n8n_webhook_url'
};

// ===== Universe Data =====
const UNIVERSES = {
    dnd: {
        key: 'dnd',
        label: 'D&D 5e',
        headerIcon: '🐉',
        footerText: 'D&D 5e 2024 Edition',
        backstoryWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/dnd-backstory',
        itemsWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/dnd-items',
        classes: [
            { value: '', label: '— Choose a class —' },
            { value: 'Barbarian', label: 'Barbarian' },
            { value: 'Bard', label: 'Bard' },
            { value: 'Cleric', label: 'Cleric' },
            { value: 'Druid', label: 'Druid' },
            { value: 'Fighter', label: 'Fighter' },
            { value: 'Monk', label: 'Monk' },
            { value: 'Paladin', label: 'Paladin' },
            { value: 'Ranger', label: 'Ranger' },
            { value: 'Rogue', label: 'Rogue' },
            { value: 'Sorcerer', label: 'Sorcerer' },
            { value: 'Warlock', label: 'Warlock' },
            { value: 'Wizard', label: 'Wizard' }
        ],
        races: [
            { value: '', label: '— Choose a race —' },
            { value: 'Human', label: 'Human' },
            { value: 'Elf', label: 'Elf' },
            { value: 'Dwarf', label: 'Dwarf' },
            { value: 'Halfling', label: 'Halfling' },
            { value: 'Gnome', label: 'Gnome' },
            { value: 'Half-Orc', label: 'Half-Orc' },
            { value: 'Tiefling', label: 'Tiefling' },
            { value: 'Dragonborn', label: 'Dragonborn' },
            { value: 'Goliath', label: 'Goliath' },
            { value: 'Aasimar', label: 'Aasimar' },
            { value: 'Orc', label: 'Orc' }
        ],
        flavorTexts: [
            "The dwarves are heating the forge...",
            "Goblins are sorting the inventory...",
            "The wizard enchants the items...",
            "The dragon approves the quality...",
            "The merchant calculates prices...",
            "Elves polish the weapons...",
            "The innkeeper whispers rumors...",
            "The mimic inspects the chests...",
            "The adventurer's pack is filling up...",
            "The artificer mixes ingredients..."
        ],
        backstoryFlavorTexts: [
            "The bard tunes the lute...",
            "The sage reads the stars...",
            "Another prophecy unfolds...",
            "Ancient scrolls are unfurling...",
            "Fate weaves its threads...",
            "The gods are watching...",
            "The chronicler records...",
            "The adventure begins..."
        ]
    },
    elderscrolls: {
        key: 'elderscrolls',
        label: 'Elder Scrolls',
        headerIcon: '🏔️',
        footerText: 'The Elder Scrolls Universe',
        backstoryWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/es-backstory',
        itemsWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/es-items',
        classes: [
            { value: '', label: '— Choose a class —' },
            { value: 'Dragonknight', label: 'Dragonknight' },
            { value: 'Sorcerer', label: 'Sorcerer' },
            { value: 'Nightblade', label: 'Nightblade' },
            { value: 'Templar', label: 'Templar' },
            { value: 'Warden', label: 'Warden' },
            { value: 'Necromancer', label: 'Necromancer' },
            { value: 'Arcanist', label: 'Arcanist' },
            { value: 'Spellsword', label: 'Spellsword' },
            { value: 'Battlemage', label: 'Battlemage' },
            { value: 'Witchhunter', label: 'Witchhunter' },
            { value: 'Scout', label: 'Scout' },
            { value: 'Crusader', label: 'Crusader' },
            { value: 'Agent', label: 'Agent' },
            { value: 'Assassin', label: 'Assassin' },
            { value: 'Healer', label: 'Healer' },
            { value: 'Knight', label: 'Knight' },
            { value: 'Monk', label: 'Monk' },
            { value: 'Pilgrim', label: 'Pilgrim' },
            { value: 'Thief', label: 'Thief' },
            { value: 'Warrior', label: 'Warrior' }
        ],
        races: [
            { value: '', label: '— Choose a race —' },
            { value: 'Imperial', label: 'Imperial (Cyrodiil)' },
            { value: 'Nord', label: 'Nord (Skyrim)' },
            { value: 'Breton', label: 'Breton (High Rock)' },
            { value: 'Redguard', label: 'Redguard (Hammerfell)' },
            { value: 'Dunmer', label: 'Dunmer / Dark Elf (Morrowind)' },
            { value: 'Altmer', label: 'Altmer / High Elf (Summerset)' },
            { value: 'Bosmer', label: 'Bosmer / Wood Elf (Valenwood)' },
            { value: 'Orsimer', label: 'Orsimer / Orc (Orsinium)' },
            { value: 'Khajiit', label: 'Khajiit (Elsweyr)' },
            { value: 'Argonian', label: 'Argonian (Black Marsh)' }
        ],
        flavorTexts: [
            "The Khajiit inspects the wares...",
            "A Dwemer automaton assembles parts...",
            "The enchanter imbues the items...",
            "A Daedric prince takes interest...",
            "The merchant counts their septims...",
            "The smith works the ebony...",
            "Skooma fumes fill the workshop...",
            "The guild master checks quality...",
            "A Bosmer carves the wood...",
            "The Telvanni wizard experiments..."
        ],
        backstoryFlavorTexts: [
            "The Elder Scrolls reveal your fate...",
            "An ancestor spirit speaks...",
            "The Moth Priest reads the scrolls...",
            "Azura's star shines brightly...",
            "The Greybeards meditate...",
            "The Hist tree remembers...",
            "A Daedric vision appears...",
            "Destiny calls from Nirn..."
        ]
    }
};

// ===== DOM Elements =====
const DOM = {
    headerIcon: document.getElementById('headerIcon'),
    charName: document.getElementById('charName'),
    charClass: document.getElementById('charClass'),
    charRace: document.getElementById('charRace'),
    charLevel: document.getElementById('charLevel'),
    itemTypeSelect: document.getElementById('itemTypeSelect'),
    itemTypeToggle: document.getElementById('itemTypeToggle'),
    itemTypeDropdown: document.getElementById('itemTypeDropdown'),
    itemTypeText: document.querySelector('#itemTypeToggle .multi-select-text'),
    spicySlider: document.getElementById('spicySlider'),
    spicyValue: document.getElementById('spicyValue'),
    spicyEmoji: document.getElementById('spicyEmoji'),
    ageWarning: document.getElementById('ageWarning'),
    generateBtn: document.getElementById('generateBtn'),
    generateBackstoryBtn: document.getElementById('generateBackstoryBtn'),
    loading: document.getElementById('loading'),
    loadingFlavor: document.getElementById('loadingFlavor'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    results: document.getElementById('results'),
    itemsGrid: document.getElementById('itemsGrid'),
    backstoryLoading: document.getElementById('backstoryLoading'),
    backstoryLoadingFlavor: document.getElementById('backstoryLoadingFlavor'),
    backstoryError: document.getElementById('backstoryError'),
    backstoryErrorText: document.getElementById('backstoryErrorText'),
    backstoryResults: document.getElementById('backstoryResults'),
    backstoryCard: document.getElementById('backstoryCard'),
    backstoryCheckboxes: document.querySelectorAll('.backstory-checkboxes input[type="checkbox"]'),
    itemsToggle: document.getElementById('itemsToggle'),
    itemsToggleArrow: document.getElementById('itemsToggleArrow'),
    itemsCollapsible: document.getElementById('itemsCollapsible'),
    footerUniverse: document.getElementById('footerUniverse'),
    universeTabs: document.querySelectorAll('.universe-tab'),
    settingsBtn: document.getElementById('settingsBtn'),
    configModal: document.getElementById('configModal'),
    webhookUrl: document.getElementById('webhookUrl'),
    saveConfig: document.getElementById('saveConfig'),
    cancelConfig: document.getElementById('cancelConfig'),
    particles: document.getElementById('particles'),
    countBtns: document.querySelectorAll('.count-btn')
};

// ===== State =====
let state = {
    itemCount: 5,
    isGenerating: false,
    isGeneratingBackstory: false,
    itemsCollapsed: true,
    currentUniverse: 'dnd'
};

// ===== Universe Switching =====
function getUniverse() {
    return UNIVERSES[state.currentUniverse];
}

function switchUniverse(universeKey) {
    if (state.currentUniverse === universeKey) return;
    state.currentUniverse = universeKey;
    
    const universe = getUniverse();
    
    // Update active tab
    DOM.universeTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.universe === universeKey);
    });
    
    // Update header icon
    DOM.headerIcon.textContent = universe.headerIcon;
    
    // Update footer
    DOM.footerUniverse.textContent = universe.footerText;
    
    // Update body class for theme
    document.body.classList.remove('dnd', 'elder-scrolls');
    if (universeKey === 'elderscrolls') {
        document.body.classList.add('elder-scrolls');
    }
    
    // Populate dropdowns
    populateDropdown(DOM.charClass, universe.classes);
    populateDropdown(DOM.charRace, universe.races);
    
    // Update webhook URLs
    CONFIG.backstoryWebhookUrl = universe.backstoryWebhook;
    CONFIG.webhookUrl = universe.itemsWebhook;
    
    // Clear previous results
    DOM.backstoryResults.style.display = 'none';
    DOM.backstoryCard.innerHTML = '';
    DOM.results.style.display = 'none';
    DOM.itemsGrid.innerHTML = '';
    DOM.backstoryError.style.display = 'none';
    DOM.errorMessage.style.display = 'none';
    
    // Save preference
    localStorage.setItem('selected_universe', universeKey);
}

function populateDropdown(selectEl, options) {
    selectEl.innerHTML = '';
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        selectEl.appendChild(option);
    });
}

// ===== Loading Flavor Texts =====
const itemTypeLabels = {
    weapons: '⚔️ Weapons',
    armor: '🛡️ Armor',
    potions: '🧪 Potions',
    scrolls: '📜 Scrolls',
    jewelry: '💍 Jewelry',
    trinkets: '🔮 Trinkets',
    clothing: '👘 Clothing',
    tools: '🔧 Tools',
    consumables: '🍖 Consumables'
};

function getSelectedItemTypes() {
    const checkboxes = DOM.itemTypeDropdown.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function updateItemTypeText() {
    const selected = getSelectedItemTypes();
    if (selected.length === 0) {
        DOM.itemTypeText.textContent = '🎲 Mixed (all types)';
    } else if (selected.length === 1) {
        DOM.itemTypeText.textContent = itemTypeLabels[selected[0]] || selected[0];
    } else if (selected.length <= 3) {
        DOM.itemTypeText.textContent = selected.map(s => itemTypeLabels[s].split(' ')[0]).join('') + ' ' + selected.length + ' types';
    } else {
        DOM.itemTypeText.textContent = '🎯 ' + selected.length + ' types selected';
    }
}

function toggleItemTypeDropdown(e) {
    e.stopPropagation();
    DOM.itemTypeSelect.classList.toggle('open');
}

function setupItemTypeMultiSelect() {
    DOM.itemTypeToggle.addEventListener('click', toggleItemTypeDropdown);
    
    DOM.itemTypeDropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', updateItemTypeText);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!DOM.itemTypeSelect.contains(e.target)) {
            DOM.itemTypeSelect.classList.remove('open');
        }
    });
}

// ===== Particles =====
function createParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';
        DOM.particles.appendChild(particle);
    }
}

// ===== Spiciness Slider =====
function updateSpiciness() {
    const value = parseInt(DOM.spicySlider.value);
    DOM.spicyValue.textContent = value;
    
    if (value < 25) {
        DOM.spicyEmoji.textContent = '🛡️';
    } else if (value < 50) {
        DOM.spicyEmoji.textContent = '😏';
    } else if (value < 75) {
        DOM.spicyEmoji.textContent = '🔥';
    } else {
        DOM.spicyEmoji.textContent = '😈';
    }

    DOM.ageWarning.style.display = value >= 50 ? 'block' : 'none';
}

// ===== Item Count =====
function setupCountButtons() {
    DOM.countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.countBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.itemCount = parseInt(btn.dataset.count);
        });
    });
}

// ===== Settings Modal =====
function openSettings() {
    DOM.webhookUrl.value = CONFIG.webhookUrl;
    DOM.configModal.style.display = 'flex';
}

function closeSettings() {
    DOM.configModal.style.display = 'none';
}

function saveSettings() {
    const url = DOM.webhookUrl.value.trim();
    CONFIG.webhookUrl = url;
    localStorage.setItem(CONFIG.storageKey, url);
    closeSettings();
}

// ===== Show/Hide Helpers =====
function showLoading() {
    const universe = getUniverse();
    DOM.loading.style.display = 'block';
    DOM.results.style.display = 'none';
    DOM.errorMessage.style.display = 'none';
    DOM.generateBtn.disabled = true;
    
    // Rotating flavor text
    DOM.loadingFlavor.textContent = universe.flavorTexts[Math.floor(Math.random() * universe.flavorTexts.length)];
    state.flavorInterval = setInterval(() => {
        DOM.loadingFlavor.textContent = universe.flavorTexts[Math.floor(Math.random() * universe.flavorTexts.length)];
    }, 2500);
}

function hideLoading() {
    DOM.loading.style.display = 'none';
    DOM.generateBtn.disabled = false;
    if (state.flavorInterval) clearInterval(state.flavorInterval);
}

function showError(message) {
    hideLoading();
    DOM.errorText.textContent = message;
    DOM.errorMessage.style.display = 'block';
}

// ===== Rarity Mapping =====
function getRarityClass(rarity) {
    if (!rarity) return 'rarity-common';
    const r = rarity.toLowerCase().replace(/\s+/g, '-');
    const map = {
        'common': 'rarity-common',
        'uncommon': 'rarity-uncommon',
        'rare': 'rarity-rare',
        'very-rare': 'rarity-very-rare',
        'legendary': 'rarity-legendary'
    };
    return map[r] || 'rarity-common';
}

function getItemEmoji(type) {
    if (!type) return '📦';
    const t = type.toLowerCase();
    const emojiMap = {
        'weapon': '⚔️', 'sword': '🗡️', 'axe': '🪓', 'bow': '🏹',
        'staff': '🪄', 'wand': '🪄', 'armor': '🛡️', 'shield': '🛡️',
        'helmet': '⛑️', 'potion': '🧪', 'ring': '💍', 'amulet': '📿',
        'necklace': '📿', 'scroll': '📜', 'book': '📖', 'tome': '📖',
        'cloak': '🧥', 'boots': '👢', 'gloves': '🧤', 'trinket': '🔮',
        'tool': '🔧', 'instrument': '🎵', 'bag': '👝', 'pack': '🎒',
        'food': '🍖', 'drink': '🍺', 'gem': '💎', 'coin': '🪙',
        'key': '🗝️', 'map': '🗺️', 'torch': '🔥', 'rope': '🪢',
        'clothing': '👘', 'misc': '📦', 'soul gem': '💜', 'ingot': '🧱',
        'dagger': '🗡️', 'mace': '🔨', 'greatsword': '⚔️'
    };
    
    for (const [key, emoji] of Object.entries(emojiMap)) {
        if (t.includes(key)) return emoji;
    }
    return '📦';
}

// ===== Render Items =====
function renderItems(items) {
    DOM.itemsGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const card = document.createElement('div');
        const rarityClass = getRarityClass(item.rarity);
        card.className = `item-card ${rarityClass}`;
        
        const emoji = getItemEmoji(item.type || item.name);
        const properties = item.properties || [];

        card.innerHTML = `
            <div class="item-header">
                <span class="item-emoji">${emoji}</span>
                <span class="item-name">${escapeHtml(item.name)}</span>
            </div>
            ${item.type ? `<div class="item-type">${escapeHtml(item.type)}</div>` : ''}
            ${item.rarity ? `<span class="item-rarity">${escapeHtml(item.rarity)}</span>` : ''}
            <p class="item-description">${escapeHtml(item.description)}</p>
            ${properties.length > 0 ? `
                <ul class="item-properties">
                    ${properties.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
                </ul>
            ` : ''}
        `;
        
        DOM.itemsGrid.appendChild(card);
    });
    
    DOM.results.style.display = 'block';
    DOM.results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Backstory Helpers =====
function getSelectedBackstoryElements() {
    const checkboxes = document.querySelectorAll('.backstory-checkboxes input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function getCustomBackstoryValues() {
    const customValues = {};
    const allCheckboxes = document.querySelectorAll('.backstory-checkboxes input[type="checkbox"]');
    allCheckboxes.forEach(cb => {
        if (!cb.checked) {
            const wrapper = cb.closest('.backstory-option-wrapper');
            const input = wrapper.querySelector('[data-element]');
            if (input && input.value.trim()) {
                const key = input.dataset.element;
                if (key === 'strengths' || key === 'weaknesses') {
                    customValues[key] = input.value.split('\n').map(s => s.trim()).filter(Boolean);
                } else {
                    customValues[key] = input.value.trim();
                }
            }
        }
    });
    return customValues;
}

function getAllBackstoryElements() {
    const aiElements = getSelectedBackstoryElements();
    const customValues = getCustomBackstoryValues();
    const customElements = Object.keys(customValues);
    const allKeys = ['name', 'origin', 'strengths', 'weaknesses', 'personality', 'history', 'goal', 'aspiration'];
    return allKeys.filter(k => aiElements.includes(k) || customElements.includes(k));
}

function setupBackstoryCheckboxToggles() {
    const checkboxes = document.querySelectorAll('.backstory-checkboxes input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const wrapper = cb.closest('.backstory-option-wrapper');
            const customInput = wrapper.querySelector('.backstory-custom-input');
            if (cb.checked) {
                customInput.style.display = 'none';
                wrapper.classList.remove('custom-mode');
            } else {
                customInput.style.display = 'block';
                wrapper.classList.add('custom-mode');
                const field = customInput.querySelector('input, textarea');
                if (field) setTimeout(() => field.focus(), 50);
            }
        });
    });
}

const backstoryElementLabels = {
    name: { emoji: '🏷️', title: 'Name' },
    origin: { emoji: '🌍', title: 'Place of Origin' },
    strengths: { emoji: '💪', title: 'Strengths' },
    weaknesses: { emoji: '😰', title: 'Weaknesses' },
    personality: { emoji: '🎭', title: 'Personality' },
    history: { emoji: '📖', title: 'History & Background' },
    goal: { emoji: '🎯', title: 'Life Goal' },
    aspiration: { emoji: '⭐', title: 'Aspiration' }
};

function showBackstoryLoading() {
    const universe = getUniverse();
    DOM.backstoryLoading.style.display = 'block';
    DOM.backstoryResults.style.display = 'none';
    DOM.backstoryError.style.display = 'none';
    DOM.generateBackstoryBtn.disabled = true;
    
    DOM.backstoryLoadingFlavor.textContent = universe.backstoryFlavorTexts[Math.floor(Math.random() * universe.backstoryFlavorTexts.length)];
    state.backstoryFlavorInterval = setInterval(() => {
        DOM.backstoryLoadingFlavor.textContent = universe.backstoryFlavorTexts[Math.floor(Math.random() * universe.backstoryFlavorTexts.length)];
    }, 2500);
}

function hideBackstoryLoading() {
    DOM.backstoryLoading.style.display = 'none';
    DOM.generateBackstoryBtn.disabled = false;
    if (state.backstoryFlavorInterval) clearInterval(state.backstoryFlavorInterval);
}

function showBackstoryError(message) {
    hideBackstoryLoading();
    DOM.backstoryErrorText.textContent = message;
    DOM.backstoryError.style.display = 'block';
}

function renderBackstory(data, selectedElements) {
    DOM.backstoryCard.innerHTML = '';
    
    const sections = [];
    
    selectedElements.forEach(key => {
        const meta = backstoryElementLabels[key];
        if (!meta || !data[key]) return;
        
        let content = data[key];
        let html = '';
        
        if (Array.isArray(content)) {
            html = `<ul>${content.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
        } else {
            html = escapeHtml(content);
        }
        
        sections.push(`
            <div class="backstory-section-block">
                <h3 class="backstory-section-title">${meta.emoji} ${meta.title}</h3>
                <div class="backstory-section-text">${html}</div>
            </div>
        `);
    });
    
    DOM.backstoryCard.innerHTML = sections.join('');
    DOM.backstoryResults.style.display = 'block';
    DOM.backstoryResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Generate Backstory =====
async function generateBackstory() {
    if (state.isGeneratingBackstory) return;
    
    const charClass = DOM.charClass.value;
    const charRace = DOM.charRace.value;
    
    if (!charClass) {
        showBackstoryError('Please choose a class for your character.');
        return;
    }
    
    if (!charRace) {
        showBackstoryError('Please choose a race for your character.');
        return;
    }
    
    const aiElements = getSelectedBackstoryElements();
    const customValues = getCustomBackstoryValues();
    const allElements = getAllBackstoryElements();
    
    if (allElements.length === 0) {
        showBackstoryError('Please select at least one element or enter your own values.');
        return;
    }

    // If there are no AI elements, skip the API call and render custom only
    if (aiElements.length === 0) {
        renderBackstory(customValues, allElements);
        return;
    }

    state.isGeneratingBackstory = true;
    showBackstoryLoading();

    const payload = {
        characterClass: charClass,
        characterRace: charRace,
        characterLevel: parseInt(DOM.charLevel.value),
        elements: aiElements,
        universe: state.currentUniverse
    };

    try {
        const response = await fetch(CONFIG.backstoryWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server responded with code ${response.status}: ${errorText || 'No additional info'}`);
        }

        const responseText = await response.text();
        if (!responseText || responseText.trim() === '') {
            throw new Error('Server returned empty response. Check if the n8n workflow is active.');
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseErr) {
            throw new Error(`Invalid JSON response: ${responseText.substring(0, 200)}`);
        }
        
        // Handle different response formats
        if (data.output) {
            try {
                data = JSON.parse(data.output);
            } catch {
                // keep data as-is
            }
        }

        // Merge custom values with AI-generated data
        const mergedData = { ...data, ...customValues };

        hideBackstoryLoading();
        renderBackstory(mergedData, allElements);

    } catch (error) {
        console.error('Backstory generation error:', error);
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            showBackstoryError('Cannot connect to server. Check if n8n is running.');
        } else {
            showBackstoryError(error.message || 'An error occurred while creating the backstory.');
        }
    } finally {
        state.isGeneratingBackstory = false;
    }
}

// ===== Generate Items =====
async function generateItems() {
    if (state.isGenerating) return;
    
    // Validation
    if (!CONFIG.webhookUrl) {
        openSettings();
        showError('Please set the n8n server address in settings (⚙️).');
        return;
    }
    
    const charClass = DOM.charClass.value;
    const charRace = DOM.charRace.value;
    
    if (!charClass) {
        showError('Please choose a class for your character.');
        return;
    }
    
    if (!charRace) {
        showError('Please choose a race for your character.');
        return;
    }

    state.isGenerating = true;
    showLoading();

    const payload = {
        characterName: DOM.charName.value.trim() || '',
        characterClass: charClass,
        characterRace: charRace,
        characterLevel: parseInt(DOM.charLevel.value),
        spiciness: parseInt(DOM.spicySlider.value),
        itemCount: state.itemCount,
        itemTypes: getSelectedItemTypes(),
        universe: state.currentUniverse
    };

    try {
        const response = await fetch(CONFIG.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server responded with code ${response.status}: ${errorText || 'No additional info'}`);
        }

        const responseText = await response.text();
        if (!responseText || responseText.trim() === '') {
            throw new Error('Server returned empty response. Check if the n8n workflow is active.');
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseErr) {
            throw new Error(`Invalid JSON response from server: ${responseText.substring(0, 200)}`);
        }
        
        // Handle different response formats from n8n
        let items;
        if (Array.isArray(data)) {
            items = data;
        } else if (data.items && Array.isArray(data.items)) {
            items = data.items;
        } else if (data.output) {
            try {
                const parsed = JSON.parse(data.output);
                items = Array.isArray(parsed) ? parsed : parsed.items || [parsed];
            } catch {
                items = [data];
            }
        } else {
            items = [data];
        }

        hideLoading();
        renderItems(items);

    } catch (error) {
        console.error('Generation error:', error);
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            showError('Cannot connect to server. Check if n8n is running and the address is correct.');
        } else {
            showError(error.message || 'An error occurred while creating the items.');
        }
    } finally {
        state.isGenerating = false;
    }
}

// ===== Event Listeners =====
DOM.spicySlider.addEventListener('input', updateSpiciness);
DOM.generateBtn.addEventListener('click', generateItems);
DOM.generateBackstoryBtn.addEventListener('click', generateBackstory);
DOM.settingsBtn.addEventListener('click', openSettings);
DOM.saveConfig.addEventListener('click', saveSettings);
DOM.cancelConfig.addEventListener('click', closeSettings);
DOM.configModal.addEventListener('click', (e) => {
    if (e.target === DOM.configModal) closeSettings();
});

// Universe tab switching
DOM.universeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchUniverse(tab.dataset.universe);
    });
});

// Collapsible items section
DOM.itemsToggle.addEventListener('click', () => {
    state.itemsCollapsed = !state.itemsCollapsed;
    DOM.itemsCollapsible.style.display = state.itemsCollapsed ? 'none' : 'block';
    DOM.itemsToggleArrow.classList.toggle('open', !state.itemsCollapsed);
});

// Keyboard: Escape to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSettings();
});

// ===== Init =====
function init() {
    createParticles();
    updateSpiciness();
    setupCountButtons();
    setupItemTypeMultiSelect();
    setupBackstoryCheckboxToggles();
    
    // Restore saved universe or default to dnd
    const savedUniverse = localStorage.getItem('selected_universe') || 'dnd';
    state.currentUniverse = savedUniverse;
    
    // Initialize the universe (populates dropdowns, sets theme)
    const universe = getUniverse();
    DOM.universeTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.universe === savedUniverse);
    });
    DOM.headerIcon.textContent = universe.headerIcon;
    DOM.footerUniverse.textContent = universe.footerText;
    if (savedUniverse === 'elderscrolls') {
        document.body.classList.add('elder-scrolls');
    }
    populateDropdown(DOM.charClass, universe.classes);
    populateDropdown(DOM.charRace, universe.races);
    
    // Prompt for webhook if not set
    if (!CONFIG.webhookUrl) {
        setTimeout(() => {
            openSettings();
        }, 1500);
    }
}

init();
