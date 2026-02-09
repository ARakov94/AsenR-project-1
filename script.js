// ===== Configuration =====
const CONFIG = {
    webhookUrl: localStorage.getItem('n8n_webhook_url') || 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/dnd-items',
    storageKey: 'n8n_webhook_url'
};

// ===== DOM Elements =====
const DOM = {
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
    loading: document.getElementById('loading'),
    loadingFlavor: document.getElementById('loadingFlavor'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    results: document.getElementById('results'),
    itemsGrid: document.getElementById('itemsGrid'),
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
    isGenerating: false
};

// ===== Loading Flavor Texts =====
const flavorTexts = [
    "Джуджетата нагряват ковачницата...",
    "Гоблините сортират инвентара...",
    "Магът зачарова предметите...",
    "Драконът одобрява качеството...",
    "Търговецът пресмята цените...",
    "Елфите полират оръжията...",
    "Кръчмарят шепне слухове...",
    "Мимикът проверява сандъците...",
    "Багажът на приключенеца се пълни...",
    "Артифайсърът смесва съставките...",
    "Художникът скицира предметите...",
    "Илюстраторът рисува артефактите..."
];

// ===== Multi-Select Item Types =====
const itemTypeLabels = {
    weapons: '⚔️ Оръжия',
    armor: '🛡️ Броня',
    potions: '🧪 Отвари',
    scrolls: '📜 Свитъци',
    jewelry: '💍 Бижута',
    trinkets: '🔮 Дреболии',
    clothing: '👘 Дрехи',
    tools: '🔧 Инструменти',
    consumables: '🍖 Консумативи'
};

function getSelectedItemTypes() {
    const checkboxes = DOM.itemTypeDropdown.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function updateItemTypeText() {
    const selected = getSelectedItemTypes();
    if (selected.length === 0) {
        DOM.itemTypeText.textContent = '🎲 Смесени (всички видове)';
    } else if (selected.length === 1) {
        DOM.itemTypeText.textContent = itemTypeLabels[selected[0]] || selected[0];
    } else if (selected.length <= 3) {
        DOM.itemTypeText.textContent = selected.map(s => itemTypeLabels[s].split(' ')[0]).join('') + ' ' + selected.length + ' вида';
    } else {
        DOM.itemTypeText.textContent = '🎯 ' + selected.length + ' вида избрани';
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
    DOM.loading.style.display = 'block';
    DOM.results.style.display = 'none';
    DOM.errorMessage.style.display = 'none';
    DOM.generateBtn.disabled = true;
    
    // Rotating flavor text
    DOM.loadingFlavor.textContent = flavorTexts[Math.floor(Math.random() * flavorTexts.length)];
    state.flavorInterval = setInterval(() => {
        DOM.loadingFlavor.textContent = flavorTexts[Math.floor(Math.random() * flavorTexts.length)];
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
        'weapon': '⚔️',
        'sword': '🗡️',
        'axe': '🪓',
        'bow': '🏹',
        'staff': '🪄',
        'wand': '🪄',
        'armor': '🛡️',
        'shield': '🛡️',
        'helmet': '⛑️',
        'potion': '🧪',
        'ring': '💍',
        'amulet': '📿',
        'necklace': '📿',
        'scroll': '📜',
        'book': '📖',
        'tome': '📖',
        'cloak': '🧥',
        'boots': '👢',
        'gloves': '🧤',
        'trinket': '🔮',
        'tool': '🔧',
        'instrument': '🎵',
        'bag': '👝',
        'pack': '🎒',
        'food': '🍖',
        'drink': '🍺',
        'gem': '💎',
        'coin': '🪙',
        'key': '🗝️',
        'map': '🗺️',
        'torch': '🔥',
        'rope': '🪢',
        'clothing': '👘',
        'misc': '📦'
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
        
        // Build image URL with unique seed per item
        const imageDesc = item.imagePrompt || `${item.name}, ${item.type || 'magical item'}, dark fantasy style, detailed, game icon, no text`;
        const seed = Math.floor(Math.random() * 99999);

        card.innerHTML = `
            <div class="item-image-container">
                <div class="image-loading-placeholder">
                    <span class="image-loading-emoji">${emoji}</span>
                    <span class="image-loading-text">Зареждане...</span>
                </div>
                <img class="item-image" data-src="https://image.pollinations.ai/prompt/${encodeURIComponent(imageDesc)}?width=512&height=512&nologo=true&seed=${seed}" alt="${escapeHtml(item.name)}" loading="lazy" style="opacity:0">
            </div>
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

    // Stagger image loading to avoid Pollinations rate limits
    loadImagesStaggered();
}

function loadImagesStaggered() {
    const images = DOM.itemsGrid.querySelectorAll('img.item-image[data-src]');
    const DELAY = 1500; // 1.5 seconds between each image request
    const MAX_RETRIES = 2;

    images.forEach((img, index) => {
        setTimeout(() => {
            loadImageWithRetry(img, img.dataset.src, MAX_RETRIES);
        }, index * DELAY);
    });
}

function loadImageWithRetry(img, url, retriesLeft) {
    const placeholder = img.parentElement.querySelector('.image-loading-placeholder');

    img.onload = function() {
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.4s ease';
        if (placeholder) placeholder.style.display = 'none';
    };

    img.onerror = function() {
        if (retriesLeft > 0) {
            // Retry after a delay with a new seed
            const newSeed = Math.floor(Math.random() * 99999);
            const retryUrl = url.replace(/seed=\d+/, 'seed=' + newSeed);
            setTimeout(() => {
                loadImageWithRetry(img, retryUrl, retriesLeft - 1);
            }, 3000);
        } else {
            // All retries failed — hide image, keep placeholder with emoji
            img.style.display = 'none';
            if (placeholder) {
                placeholder.querySelector('.image-loading-text').textContent = '';
            }
        }
    };

    img.src = url;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Generate Items =====
async function generateItems() {
    if (state.isGenerating) return;
    
    // Validation
    if (!CONFIG.webhookUrl) {
        openSettings();
        showError('Моля, задай адреса на n8n сървъра в настройките (⚙️).');
        return;
    }
    
    const charClass = DOM.charClass.value;
    const charRace = DOM.charRace.value;
    
    if (!charClass) {
        showError('Моля, избери клас за своя герой.');
        return;
    }
    
    if (!charRace) {
        showError('Моля, избери раса за своя герой.');
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
        itemTypes: getSelectedItemTypes()
    };

    try {
        const response = await fetch(CONFIG.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Сървърът отговори с код ${response.status}: ${errorText || 'Няма допълнителна информация'}`);
        }

        const responseText = await response.text();
        if (!responseText || responseText.trim() === '') {
            throw new Error('Сървърът върна празен отговор. Провери дали n8n workflow-ът е активен и работи правилно.');
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseErr) {
            throw new Error(`Невалиден JSON отговор от сървъра: ${responseText.substring(0, 200)}`);
        }
        
        // Handle different response formats from n8n
        let items;
        if (Array.isArray(data)) {
            items = data;
        } else if (data.items && Array.isArray(data.items)) {
            items = data.items;
        } else if (data.output) {
            // If n8n returns a stringified JSON
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
            showError('Няма връзка със сървъра. Провери дали n8n работи и дали адресът е правилен.');
        } else {
            showError(error.message || 'Възникна грешка при създаването на предметите.');
        }
    } finally {
        state.isGenerating = false;
    }
}

// ===== Event Listeners =====
DOM.spicySlider.addEventListener('input', updateSpiciness);
DOM.generateBtn.addEventListener('click', generateItems);
DOM.settingsBtn.addEventListener('click', openSettings);
DOM.saveConfig.addEventListener('click', saveSettings);
DOM.cancelConfig.addEventListener('click', closeSettings);
DOM.configModal.addEventListener('click', (e) => {
    if (e.target === DOM.configModal) closeSettings();
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
    
    // Prompt for webhook if not set
    if (!CONFIG.webhookUrl) {
        setTimeout(() => {
            openSettings();
        }, 1500);
    }
}

init();
