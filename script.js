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
        charsheetWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/dnd-charsheet',
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
        ],
        charsheetFlavorTexts: [
            "Rolling ability scores...",
            "The scribe prepares the parchment...",
            "Calculating modifiers...",
            "Consulting the Player's Handbook...",
            "The DM reviews the sheet...",
            "Assigning proficiencies...",
            "Selecting starting equipment...",
            "The dice have spoken..."
        ]
    },
    elderscrolls: {
        key: 'elderscrolls',
        label: 'Elder Scrolls',
        headerIcon: '🏔️',
        footerText: 'The Elder Scrolls Universe',
        backstoryWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/es-backstory',
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
    },
    worldofwarcraft: {
        key: 'worldofwarcraft',
        label: 'World of Warcraft',
        headerIcon: '⚔️',
        footerText: 'World of Warcraft Universe',
        backstoryWebhook: 'https://n8n.simeontsvetanovn8nworkflows.site/webhook/wow-backstory',
        classes: [
            { value: '', label: '— Choose a class —' },
            { value: 'Warrior', label: 'Warrior' },
            { value: 'Paladin', label: 'Paladin' },
            { value: 'Hunter', label: 'Hunter' },
            { value: 'Rogue', label: 'Rogue' },
            { value: 'Priest', label: 'Priest' },
            { value: 'Shaman', label: 'Shaman' },
            { value: 'Mage', label: 'Mage' },
            { value: 'Warlock', label: 'Warlock' },
            { value: 'Monk', label: 'Monk' },
            { value: 'Druid', label: 'Druid' },
            { value: 'Demon Hunter', label: 'Demon Hunter' },
            { value: 'Death Knight', label: 'Death Knight' },
            { value: 'Evoker', label: 'Evoker' }
        ],
        races: [
            { value: '', label: '— Choose a race —' },
            { value: 'Human', label: 'Human (Alliance)' },
            { value: 'Dwarf', label: 'Dwarf (Alliance)' },
            { value: 'Night Elf', label: 'Night Elf (Alliance)' },
            { value: 'Gnome', label: 'Gnome (Alliance)' },
            { value: 'Draenei', label: 'Draenei (Alliance)' },
            { value: 'Worgen', label: 'Worgen (Alliance)' },
            { value: 'Void Elf', label: 'Void Elf (Alliance)' },
            { value: 'Lightforged Draenei', label: 'Lightforged Draenei (Alliance)' },
            { value: 'Dark Iron Dwarf', label: 'Dark Iron Dwarf (Alliance)' },
            { value: 'Kul Tiran', label: 'Kul Tiran (Alliance)' },
            { value: 'Mechagnome', label: 'Mechagnome (Alliance)' },
            { value: 'Orc', label: 'Orc (Horde)' },
            { value: 'Undead', label: 'Undead (Horde)' },
            { value: 'Tauren', label: 'Tauren (Horde)' },
            { value: 'Troll', label: 'Troll (Horde)' },
            { value: 'Blood Elf', label: 'Blood Elf (Horde)' },
            { value: 'Goblin', label: 'Goblin (Horde)' },
            { value: 'Nightborne', label: 'Nightborne (Horde)' },
            { value: 'Highmountain Tauren', label: 'Highmountain Tauren (Horde)' },
            { value: 'Mag\'har Orc', label: 'Mag\'har Orc (Horde)' },
            { value: 'Zandalari Troll', label: 'Zandalari Troll (Horde)' },
            { value: 'Vulpera', label: 'Vulpera (Horde)' },
            { value: 'Pandaren', label: 'Pandaren (Neutral)' },
            { value: 'Dracthyr', label: 'Dracthyr (Neutral)' },
            { value: 'Earthen', label: 'Earthen (Neutral)' }
        ],
        flavorTexts: [
            "A goblin examines the goods...",
            "The Ethereals appraise the wares...",
            "The forge of Light burns bright...",
            "Thrall blesses the materials...",
            "The Auction House buzzes...",
            "A gnomish engineer tinkers...",
            "The Dark Lady watches...",
            "Dalaran merchants gather...",
            "Champions of Azeroth arrive...",
            "The Horde armory opens..."
        ],
        backstoryFlavorTexts: [
            "The Lorewalkers recount your tale...",
            "Chromie peers through time...",
            "The Naaru illuminate your path...",
            "An old god whispers...",
            "The spirits of Azeroth speak...",
            "Nozdormu sees your timeline...",
            "The Earthmother remembers...",
            "For the Horde... or the Alliance..."
        ]
    }
};

// ===== DOM Elements =====
const DOM = {
    headerIcon: document.getElementById('headerIcon'),
    itemQuality: document.getElementById('itemQuality'),
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
    downloadPdfBtn: document.getElementById('downloadPdfBtn'),
    charSheetSection: document.getElementById('charSheetSection'),
    generateCharSheetBtn: document.getElementById('generateCharSheetBtn'),
    charSheetLoading: document.getElementById('charSheetLoading'),
    charSheetLoadingFlavor: document.getElementById('charSheetLoadingFlavor'),
    charSheetError: document.getElementById('charSheetError'),
    charSheetErrorText: document.getElementById('charSheetErrorText'),
    charSheetResults: document.getElementById('charSheetResults'),
    charSheetCard: document.getElementById('charSheetCard'),
    confirmNoItemsModal: document.getElementById('confirmNoItemsModal'),
    confirmNoItemsYes: document.getElementById('confirmNoItemsYes'),
    confirmNoItemsNo: document.getElementById('confirmNoItemsNo'),
    itemsWrapper: document.getElementById('itemsWrapper'),
    itemsSeparator: document.getElementById('itemsSeparator'),
    itemsToggle: document.getElementById('itemsToggle'),
    itemsToggleArrow: document.getElementById('itemsToggleArrow'),
    itemsCollapsible: document.getElementById('itemsCollapsible'),
    footerUniverse: document.getElementById('footerUniverse'),
    universeTabs: document.querySelectorAll('.universe-tab'),
    bgImage: document.getElementById('bgImage'),
    settingsBtn: document.getElementById('settingsBtn'),
    configModal: document.getElementById('configModal'),
    webhookUrl: document.getElementById('webhookUrl'),
    saveConfig: document.getElementById('saveConfig'),
    cancelConfig: document.getElementById('cancelConfig'),
    particles: document.getElementById('particles'),
    countBtns: document.querySelectorAll('.count-btn')
};

// ===== WoW Race-Class Restrictions (as of The War Within) =====
const WOW_RACE_CLASSES = {
    'Human':                ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Dwarf':                ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Night Elf':            ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demon Hunter', 'Death Knight'],
    'Gnome':                ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Draenei':              ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Worgen':               ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
    'Void Elf':             ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Lightforged Draenei':  ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Dark Iron Dwarf':      ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Kul Tiran':            ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
    'Mechagnome':           ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Orc':                  ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Undead':               ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Tauren':               ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
    'Troll':                ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
    'Blood Elf':            ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Goblin':               ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Nightborne':           ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Highmountain Tauren':  ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
    "Mag'har Orc":          ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Zandalari Troll':      ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Death Knight'],
    'Vulpera':              ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Pandaren':             ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight'],
    'Dracthyr':             ['Evoker', 'Warrior', 'Hunter', 'Rogue', 'Priest', 'Mage', 'Warlock'],
    'Earthen':              ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Death Knight']
};

function updateWowClassesForRace() {
    if (state.currentUniverse !== 'worldofwarcraft') return;
    const selectedRace = DOM.charRace.value;
    if (!selectedRace) {
        // No race selected — show all classes
        populateDropdown(DOM.charClass, getUniverse().classes);
        return;
    }
    const allowedClasses = WOW_RACE_CLASSES[selectedRace];
    if (!allowedClasses) {
        populateDropdown(DOM.charClass, getUniverse().classes);
        return;
    }
    const currentClass = DOM.charClass.value;
    const filteredClasses = [{ value: '', label: '— Choose a class —' }];
    allowedClasses.forEach(cls => {
        filteredClasses.push({ value: cls, label: cls });
    });
    populateDropdown(DOM.charClass, filteredClasses);
    // Restore selection if still valid
    if (currentClass && allowedClasses.includes(currentClass)) {
        DOM.charClass.value = currentClass;
    }
}

// ===== State =====
let state = {
    itemCount: 5,
    isGenerating: false,
    isGeneratingBackstory: false,
    isGeneratingCharSheet: false,
    itemsCollapsed: true,
    currentUniverse: 'dnd',
    lastCharSheetData: null,
    lastGeneratedItems: null,
    lastBackstoryData: null
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
    
    // Update background image
    DOM.bgImage.classList.remove('dnd-bg', 'es-bg', 'wow-bg');
    const bgMap = { dnd: 'dnd-bg', elderscrolls: 'es-bg', worldofwarcraft: 'wow-bg' };
    DOM.bgImage.classList.add(bgMap[universeKey] || 'dnd-bg');
    
    // Show/hide D&D-only sections
    const dndOnlySections = document.querySelectorAll('.dnd-only-section');
    dndOnlySections.forEach(el => {
        el.style.display = universeKey === 'dnd' ? '' : 'none';
    });
    
    // Update footer
    DOM.footerUniverse.textContent = universe.footerText;
    
    // Update body class for theme
    document.body.classList.remove('dnd', 'elder-scrolls', 'world-of-warcraft');
    if (universeKey === 'elderscrolls') {
        document.body.classList.add('elder-scrolls');
    } else if (universeKey === 'worldofwarcraft') {
        document.body.classList.add('world-of-warcraft');
    }
    
    // Populate dropdowns
    populateDropdown(DOM.charClass, universe.classes);
    populateDropdown(DOM.charRace, universe.races);
    
    // Apply WoW race-class restrictions
    if (universeKey === 'worldofwarcraft') {
        updateWowClassesForRace();
    }
    
    // Update webhook URLs
    CONFIG.backstoryWebhookUrl = universe.backstoryWebhook;
    CONFIG.webhookUrl = universe.itemsWebhook;
    
    // Clear previous results
    DOM.backstoryResults.style.display = 'none';
    DOM.backstoryCard.innerHTML = '';
    DOM.results.style.display = 'none';
    DOM.itemsGrid.innerHTML = '';
    DOM.charSheetResults.style.display = 'none';
    DOM.charSheetCard.innerHTML = '';
    DOM.backstoryError.style.display = 'none';
    DOM.errorMessage.style.display = 'none';
    DOM.charSheetError.style.display = 'none';
    state.lastCharSheetData = null;
    state.lastGeneratedItems = null;
    state.lastBackstoryData = null;
    
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
    
    // Store generated items and append to character sheet if one exists
    state.lastGeneratedItems = items;
    renderItemsOnCharSheet(items);
}

// ===== Render Items on Character Sheet =====
function renderItemsOnCharSheet(items) {
    if (!DOM.charSheetCard || DOM.charSheetCard.innerHTML === '') return;
    
    // Remove existing items section from char sheet if present
    const existingSection = DOM.charSheetCard.querySelector('.cs-items-section');
    if (existingSection) existingSection.remove();
    
    if (!items || items.length === 0) return;
    
    const itemsHtml = items.map(item => {
        const emoji = getItemEmoji(item.type || item.name);
        const rarityClass = getRarityClass(item.rarity);
        const properties = item.properties || [];
        return `
            <div class="cs-item-card ${rarityClass}">
                <div class="cs-item-header">
                    <span class="cs-item-emoji">${emoji}</span>
                    <span class="cs-item-name">${escapeHtml(item.name)}</span>
                    ${item.rarity ? `<span class="cs-item-rarity">${escapeHtml(item.rarity)}</span>` : ''}
                </div>
                ${item.type ? `<div class="cs-item-type">${escapeHtml(item.type)}</div>` : ''}
                <p class="cs-item-desc">${escapeHtml(item.description)}</p>
                ${properties.length > 0 ? `
                    <ul class="cs-item-props">
                        ${properties.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }).join('');
    
    const section = document.createElement('div');
    section.className = 'cs-section cs-items-section';
    section.innerHTML = `
        <h3 class="cs-section-title">⚔️ Magic Items</h3>
        <div class="cs-items-grid">${itemsHtml}</div>
    `;
    
    DOM.charSheetCard.appendChild(section);
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
        state.lastBackstoryData = customValues;
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
        state.lastBackstoryData = mergedData;
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

// ===== Character Sheet Helpers =====
function showCharSheetLoading() {
    const universe = getUniverse();
    DOM.charSheetLoading.style.display = 'block';
    DOM.charSheetResults.style.display = 'none';
    DOM.charSheetError.style.display = 'none';
    DOM.generateCharSheetBtn.disabled = true;
    
    DOM.charSheetLoadingFlavor.textContent = universe.charsheetFlavorTexts[Math.floor(Math.random() * universe.charsheetFlavorTexts.length)];
    state.charSheetFlavorInterval = setInterval(() => {
        DOM.charSheetLoadingFlavor.textContent = universe.charsheetFlavorTexts[Math.floor(Math.random() * universe.charsheetFlavorTexts.length)];
    }, 2500);
}

function hideCharSheetLoading() {
    DOM.charSheetLoading.style.display = 'none';
    DOM.generateCharSheetBtn.disabled = false;
    if (state.charSheetFlavorInterval) clearInterval(state.charSheetFlavorInterval);
}

function showCharSheetError(message) {
    hideCharSheetLoading();
    DOM.charSheetErrorText.textContent = message;
    DOM.charSheetError.style.display = 'block';
}

function getAbilityModifier(score) {
    const mod = Math.floor((score - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
}

function renderCharSheet(data) {
    DOM.charSheetCard.innerHTML = '';
    
    const abilities = data.abilityScores || {};
    const abilityOrder = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    const abilityNames = { STR: 'Strength', DEX: 'Dexterity', CON: 'Constitution', INT: 'Intelligence', WIS: 'Wisdom', CHA: 'Charisma' };
    
    // Character header
    const headerName = data.characterName || '';
    const headerInfo = `Level ${data.level || 1} ${data.race || ''} ${data.class || ''}`;
    
    // Ability scores grid
    const abilityCards = abilityOrder.map(ab => {
        const score = abilities[ab] || 10;
        const mod = getAbilityModifier(score);
        return `<div class="cs-ability">
            <div class="cs-ability-name">${ab}</div>
            <div class="cs-ability-mod">${mod}</div>
            <div class="cs-ability-score">${score}</div>
        </div>`;
    }).join('');
    
    // Combat stats
    const hp = data.hitPoints || 10;
    const ac = data.armorClass || 10;
    const speed = data.speed || 30;
    const initiative = data.initiative != null ? (data.initiative >= 0 ? `+${data.initiative}` : data.initiative) : '+0';
    const profBonus = data.proficiencyBonus || 2;
    
    // Saving throws
    const savingThrows = data.savingThrows || [];
    const savingThrowsHtml = abilityOrder.map(ab => {
        const score = abilities[ab] || 10;
        const baseMod = Math.floor((score - 10) / 2);
        const prof = savingThrows.includes(ab);
        const totalMod = prof ? baseMod + profBonus : baseMod;
        const modStr = totalMod >= 0 ? `+${totalMod}` : `${totalMod}`;
        return `<div class="cs-save ${prof ? 'proficient' : ''}">
            <span class="cs-save-dot">${prof ? '●' : '○'}</span>
            <span class="cs-save-mod">${modStr}</span>
            <span class="cs-save-name">${abilityNames[ab]}</span>
        </div>`;
    }).join('');
    
    // Skills
    const skills = data.skills || [];
    const skillsHtml = skills.map(skill => {
        const modStr = skill.modifier >= 0 ? `+${skill.modifier}` : `${skill.modifier}`;
        return `<div class="cs-skill ${skill.proficient ? 'proficient' : ''}">
            <span class="cs-skill-dot">${skill.proficient ? '●' : '○'}</span>
            <span class="cs-skill-mod">${modStr}</span>
            <span class="cs-skill-name">${escapeHtml(skill.name)}</span>
            <span class="cs-skill-ability">(${skill.ability || ''})</span>
        </div>`;
    }).join('');
    
    // Equipment
    const equipment = data.equipment || [];
    const equipmentHtml = equipment.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    
    // Features
    const features = data.features || [];
    const featuresHtml = features.map(feat => `
        <div class="cs-feature">
            <strong>${escapeHtml(feat.name)}</strong>
            <p>${escapeHtml(feat.description)}</p>
        </div>
    `).join('');
    
    // Spells (optional)
    let spellsHtml = '';
    if (data.spells && (data.spells.cantrips?.length > 0 || data.spells.level1?.length > 0)) {
        const cantrips = (data.spells.cantrips || []).map(s => `<span class="cs-spell-tag">${escapeHtml(s)}</span>`).join('');
        const level1 = (data.spells.level1 || []).map(s => `<span class="cs-spell-tag">${escapeHtml(s)}</span>`).join('');
        spellsHtml = `
            <div class="cs-section">
                <h3 class="cs-section-title">✨ Spells</h3>
                ${cantrips ? `<div class="cs-spell-group"><span class="cs-spell-level">Cantrips:</span> ${cantrips}</div>` : ''}
                ${level1 ? `<div class="cs-spell-group"><span class="cs-spell-level">Level 1 (${data.spells.slots || 2} slots):</span> ${level1}</div>` : ''}
            </div>
        `;
    }

    DOM.charSheetCard.innerHTML = `
        <div class="cs-header">
            ${headerName ? `<h2 class="cs-name">${escapeHtml(headerName)}</h2>` : ''}
            <p class="cs-info">${escapeHtml(headerInfo)}</p>
        </div>
        
        <div class="cs-top-row">
            <div class="cs-abilities-grid">
                ${abilityCards}
            </div>
            <div class="cs-combat-stats">
                <div class="cs-combat-stat cs-hp">
                    <div class="cs-stat-label">Hit Points</div>
                    <div class="cs-stat-value">${hp}</div>
                </div>
                <div class="cs-combat-stat cs-ac">
                    <div class="cs-stat-label">Armor Class</div>
                    <div class="cs-stat-value">${ac}</div>
                </div>
                <div class="cs-combat-row">
                    <div class="cs-combat-mini">
                        <div class="cs-mini-label">Speed</div>
                        <div class="cs-mini-value">${speed} ft</div>
                    </div>
                    <div class="cs-combat-mini">
                        <div class="cs-mini-label">Initiative</div>
                        <div class="cs-mini-value">${initiative}</div>
                    </div>
                    <div class="cs-combat-mini">
                        <div class="cs-mini-label">Prof. Bonus</div>
                        <div class="cs-mini-value">+${profBonus}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="cs-two-columns">
            <div class="cs-section">
                <h3 class="cs-section-title">🛡️ Saving Throws</h3>
                <div class="cs-saves-list">${savingThrowsHtml}</div>
            </div>
            <div class="cs-section">
                <h3 class="cs-section-title">📊 Skills</h3>
                <div class="cs-skills-list">${skillsHtml}</div>
            </div>
        </div>
        
        <div class="cs-section">
            <h3 class="cs-section-title">🎒 Equipment</h3>
            <ul class="cs-equipment-list">${equipmentHtml}</ul>
        </div>
        
        <div class="cs-section">
            <h3 class="cs-section-title">⚡ Features & Traits</h3>
            ${featuresHtml}
        </div>
        
        ${spellsHtml}
    `;
    
    DOM.charSheetResults.style.display = 'block';
    DOM.charSheetResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Download Character Sheet as PDF =====
function downloadCharSheetPdf() {
    const card = DOM.charSheetCard;
    if (!card || card.innerHTML === '') return;
    
    // Get character name for filename
    const nameEl = card.querySelector('.cs-name');
    const infoEl = card.querySelector('.cs-info');
    const charName = nameEl ? nameEl.textContent.trim().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '_') : 'Character';
    const filename = `${charName}_Sheet.pdf`;
    
    // Temporarily apply print-friendly styles
    const clone = card.cloneNode(true);
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'background: #1a1a2e; color: #e8e6e3; padding: 24px; font-family: Crimson Text, serif; width: 210mm;';
    
    // Add title header to PDF
    const title = document.createElement('div');
    title.style.cssText = 'text-align:center; margin-bottom:16px; padding-bottom:12px; border-bottom:2px solid #d4a017;';
    title.innerHTML = `<div style="font-family:Cinzel,serif; font-size:22px; color:#d4a017; margin-bottom:4px;">📋 Character Sheet</div>`;
    if (infoEl) {
        title.innerHTML += `<div style="font-family:Crimson Text,serif; font-size:13px; color:#a09b8c;">The Magic Forge • D&D 5e</div>`;
    }
    wrapper.appendChild(title);
    
    // Preserve computed styles on clone's key elements
    const applyInline = (el, styles) => {
        Object.entries(styles).forEach(([k, v]) => el.style[k] = v);
    };
    
    // Style ability boxes
    clone.querySelectorAll('.cs-ability').forEach(el => {
        applyInline(el, { background: 'rgba(0,0,0,0.3)', border: '1px solid #4a3f2f', borderRadius: '8px', padding: '6px 4px', textAlign: 'center' });
    });
    clone.querySelectorAll('.cs-ability-name').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '9px', color: '#a09b8c', letterSpacing: '0.05em' });
    });
    clone.querySelectorAll('.cs-ability-mod').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '18px', fontWeight: '700', color: '#d4a017' });
    });
    clone.querySelectorAll('.cs-ability-score').forEach(el => {
        applyInline(el, { fontSize: '10px', color: '#a09b8c' });
    });
    clone.querySelectorAll('.cs-combat-stat, .cs-combat-mini').forEach(el => {
        applyInline(el, { background: 'rgba(0,0,0,0.3)', border: '1px solid #4a3f2f', borderRadius: '8px', padding: '6px', textAlign: 'center' });
    });
    clone.querySelectorAll('.cs-stat-label, .cs-mini-label').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '9px', color: '#a09b8c', textTransform: 'uppercase' });
    });
    clone.querySelectorAll('.cs-stat-value').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '22px', fontWeight: '900', color: '#d4a017' });
    });
    clone.querySelectorAll('.cs-mini-value').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '13px', fontWeight: '700', color: '#e8e6e3' });
    });
    clone.querySelectorAll('.cs-hp .cs-stat-value').forEach(el => el.style.color = '#e74c3c');
    clone.querySelectorAll('.cs-ac .cs-stat-value').forEach(el => el.style.color = '#3498db');
    clone.querySelectorAll('.cs-section-title').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '13px', color: '#d4a017', borderBottom: '1px solid rgba(212,160,23,0.3)', paddingBottom: '4px', marginBottom: '6px' });
    });
    clone.querySelectorAll('.cs-save, .cs-skill').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '11px', color: '#a09b8c', display: 'flex', alignItems: 'center', gap: '4px', padding: '1px 0' });
    });
    clone.querySelectorAll('.cs-save.proficient, .cs-skill.proficient').forEach(el => el.style.color = '#e8e6e3');
    clone.querySelectorAll('.cs-save.proficient .cs-save-dot, .cs-skill.proficient .cs-skill-dot').forEach(el => el.style.color = '#d4a017');
    clone.querySelectorAll('.cs-save-mod, .cs-skill-mod').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '10px', fontWeight: '600', minWidth: '22px' });
    });
    clone.querySelectorAll('.cs-feature').forEach(el => {
        applyInline(el, { padding: '6px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px', borderLeft: '3px solid #8b7535', marginBottom: '6px' });
    });
    clone.querySelectorAll('.cs-feature strong').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '11px', color: '#e6c65a' });
    });
    clone.querySelectorAll('.cs-feature p').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '10px', color: '#a09b8c', margin: '2px 0 0', lineHeight: '1.4' });
    });
    clone.querySelectorAll('.cs-spell-tag').forEach(el => {
        applyInline(el, { display: 'inline-block', background: 'rgba(155,89,182,0.2)', border: '1px solid rgba(155,89,182,0.4)', borderRadius: '12px', padding: '2px 8px', fontFamily: 'Crimson Text,serif', fontSize: '10px', color: '#bb8fce', margin: '2px' });
    });
    clone.querySelectorAll('.cs-equipment-list li').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '11px', color: '#e8e6e3' });
    });
    
    // Style magic items section for PDF
    clone.querySelectorAll('.cs-items-grid').forEach(el => {
        applyInline(el, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' });
    });
    clone.querySelectorAll('.cs-item-card').forEach(el => {
        applyInline(el, { background: 'rgba(0,0,0,0.3)', border: '1px solid #4a3f2f', borderRadius: '8px', padding: '8px', pageBreakInside: 'avoid' });
    });
    clone.querySelectorAll('.cs-item-header').forEach(el => {
        applyInline(el, { display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '4px' });
    });
    clone.querySelectorAll('.cs-item-emoji').forEach(el => {
        applyInline(el, { fontSize: '14px' });
    });
    clone.querySelectorAll('.cs-item-name').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '11px', fontWeight: '700', color: '#e6c65a' });
    });
    clone.querySelectorAll('.cs-item-rarity').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '9px', padding: '1px 6px', borderRadius: '8px', background: 'rgba(212,160,23,0.15)', color: '#d4a017', border: '1px solid rgba(212,160,23,0.3)' });
    });
    clone.querySelectorAll('.cs-item-type').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '9px', color: '#a09b8c', fontStyle: 'italic', marginBottom: '3px' });
    });
    clone.querySelectorAll('.cs-item-desc').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '10px', color: '#c8c3b4', lineHeight: '1.4', margin: '0' });
    });
    clone.querySelectorAll('.cs-item-props').forEach(el => {
        applyInline(el, { listStyle: 'none', padding: '0', margin: '4px 0 0' });
    });
    clone.querySelectorAll('.cs-item-props li').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', fontSize: '9px', color: '#a09b8c', padding: '1px 0', borderTop: '1px solid rgba(74,63,47,0.5)' });
    });
    // Rarity colors for PDF items
    clone.querySelectorAll('.cs-item-card.rarity-common .cs-item-name').forEach(el => el.style.color = '#c8c3b4');
    clone.querySelectorAll('.cs-item-card.rarity-uncommon .cs-item-name').forEach(el => el.style.color = '#2ecc71');
    clone.querySelectorAll('.cs-item-card.rarity-rare .cs-item-name').forEach(el => el.style.color = '#3498db');
    clone.querySelectorAll('.cs-item-card.rarity-epic .cs-item-name').forEach(el => el.style.color = '#9b59b6');
    clone.querySelectorAll('.cs-item-card.rarity-legendary .cs-item-name').forEach(el => el.style.color = '#e67e22');
    clone.querySelectorAll('.cs-item-card.rarity-artifact .cs-item-name').forEach(el => el.style.color = '#e74c3c');
    
    // Layout grids
    clone.querySelectorAll('.cs-header').forEach(el => {
        applyInline(el, { textAlign: 'center', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #4a3f2f' });
    });
    clone.querySelectorAll('.cs-name').forEach(el => {
        applyInline(el, { fontFamily: 'Cinzel,serif', fontSize: '20px', color: '#d4a017', margin: '0 0 4px' });
    });
    clone.querySelectorAll('.cs-info').forEach(el => {
        applyInline(el, { fontFamily: 'Crimson Text,serif', color: '#a09b8c', fontSize: '12px', margin: '0' });
    });
    clone.querySelectorAll('.cs-top-row').forEach(el => {
        applyInline(el, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' });
    });
    clone.querySelectorAll('.cs-abilities-grid').forEach(el => {
        applyInline(el, { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' });
    });
    clone.querySelectorAll('.cs-combat-stats').forEach(el => {
        applyInline(el, { display: 'flex', flexDirection: 'column', gap: '6px' });
    });
    clone.querySelectorAll('.cs-combat-row').forEach(el => {
        applyInline(el, { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' });
    });
    clone.querySelectorAll('.cs-two-columns').forEach(el => {
        applyInline(el, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' });
    });
    clone.querySelectorAll('.cs-equipment-list').forEach(el => {
        applyInline(el, { listStyle: 'none', padding: '0', margin: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' });
    });
    
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);
    
    const opt = {
        margin: [8, 8, 8, 8],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#1a1a2e' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(wrapper).save().then(() => {
        document.body.removeChild(wrapper);
    }).catch(() => {
        document.body.removeChild(wrapper);
    });
}

// ===== Generate Character Sheet =====
async function generateCharSheet(skipItemCheck) {
    if (state.isGeneratingCharSheet) return;
    
    const charClass = DOM.charClass.value;
    const charRace = DOM.charRace.value;
    
    if (!charClass) {
        showCharSheetError('Please choose a class for your character.');
        return;
    }
    
    if (!charRace) {
        showCharSheetError('Please choose a race for your character.');
        return;
    }
    
    // If no items generated and not already confirmed, show popup
    if (!skipItemCheck && !state.lastGeneratedItems) {
        DOM.confirmNoItemsModal.style.display = 'flex';
        return;
    }
    
    state.isGeneratingCharSheet = true;
    showCharSheetLoading();
    
    const universe = getUniverse();
    const payload = {
        characterClass: charClass,
        characterRace: charRace,
        characterLevel: parseInt(DOM.charLevel.value),
        universe: state.currentUniverse
    };

    // Pass backstory character name so the charsheet matches the generated character
    if (state.lastBackstoryData && state.lastBackstoryData.name) {
        payload.characterName = state.lastBackstoryData.name;
    }

    try {
        const response = await fetch(universe.charsheetWebhook, {
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
        
        if (data.output) {
            try {
                data = JSON.parse(data.output);
            } catch {
                // keep data as-is
            }
        }

        // Ensure character sheet uses the same name as the generated backstory
        if (state.lastBackstoryData && state.lastBackstoryData.name) {
            data.characterName = state.lastBackstoryData.name;
        }

        hideCharSheetLoading();
        renderCharSheet(data);
        
        // Store character sheet data for item integration
        state.lastCharSheetData = data;
        
        // If items were already generated, re-render them on the new sheet
        if (state.lastGeneratedItems) {
            renderItemsOnCharSheet(state.lastGeneratedItems);
        }

    } catch (error) {
        console.error('Character sheet generation error:', error);
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            showCharSheetError('Cannot connect to server. Check if n8n is running.');
        } else {
            showCharSheetError(error.message || 'An error occurred while generating the character sheet.');
        }
    } finally {
        state.isGeneratingCharSheet = false;
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
        characterName: (state.lastBackstoryData && state.lastBackstoryData.name) ? state.lastBackstoryData.name : '',
        characterClass: charClass,
        characterRace: charRace,
        characterLevel: parseInt(DOM.charLevel.value),
        spiciness: parseInt(DOM.spicySlider.value),
        itemCount: state.itemCount,
        itemTypes: getSelectedItemTypes(),
        itemQuality: DOM.itemQuality.value,
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
DOM.generateCharSheetBtn.addEventListener('click', generateCharSheet);
DOM.downloadPdfBtn.addEventListener('click', downloadCharSheetPdf);

// Confirm modal for generating sheet without items
DOM.confirmNoItemsYes.addEventListener('click', () => {
    DOM.confirmNoItemsModal.style.display = 'none';
    generateCharSheet(true);
});
DOM.confirmNoItemsNo.addEventListener('click', () => {
    DOM.confirmNoItemsModal.style.display = 'none';
    // Expand items section so user can generate items
    state.itemsCollapsed = false;
    DOM.itemsCollapsible.style.display = 'block';
    DOM.itemsToggleArrow.classList.add('open');
    DOM.itemsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
DOM.confirmNoItemsModal.addEventListener('click', (e) => {
    if (e.target === DOM.confirmNoItemsModal) DOM.confirmNoItemsModal.style.display = 'none';
});

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

// WoW race-class filtering
DOM.charRace.addEventListener('change', updateWowClassesForRace);

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
    const bgMap = { dnd: 'dnd-bg', elderscrolls: 'es-bg', worldofwarcraft: 'wow-bg' };
    DOM.bgImage.classList.add(bgMap[savedUniverse] || 'dnd-bg');
    DOM.footerUniverse.textContent = universe.footerText;
    if (savedUniverse === 'elderscrolls') {
        document.body.classList.add('elder-scrolls');
    } else if (savedUniverse === 'worldofwarcraft') {
        document.body.classList.add('world-of-warcraft');
    }
    // Show/hide D&D-only sections
    const dndOnlySections = document.querySelectorAll('.dnd-only-section');
    dndOnlySections.forEach(el => {
        el.style.display = savedUniverse === 'dnd' ? '' : 'none';
    });
    populateDropdown(DOM.charClass, universe.classes);
    populateDropdown(DOM.charRace, universe.races);
    
    // Apply WoW race-class restrictions on init
    if (savedUniverse === 'worldofwarcraft') {
        updateWowClassesForRace();
    }
    
    // Prompt for webhook if not set
    if (!CONFIG.webhookUrl) {
        setTimeout(() => {
            openSettings();
        }, 1500);
    }
}

init();
