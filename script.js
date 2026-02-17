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
            // ── Aasimar ──
            { group: 'Aasimar' },
            { value: 'Aasimar', label: 'Aasimar' },
            // ── Dragonborn ──
            { group: 'Dragonborn — Chromatic' },
            { value: 'Black Dragonborn', label: 'Black Dragonborn' },
            { value: 'Blue Dragonborn', label: 'Blue Dragonborn' },
            { value: 'Green Dragonborn', label: 'Green Dragonborn' },
            { value: 'Red Dragonborn', label: 'Red Dragonborn' },
            { value: 'White Dragonborn', label: 'White Dragonborn' },
            { group: 'Dragonborn — Metallic' },
            { value: 'Brass Dragonborn', label: 'Brass Dragonborn' },
            { value: 'Bronze Dragonborn', label: 'Bronze Dragonborn' },
            { value: 'Copper Dragonborn', label: 'Copper Dragonborn' },
            { value: 'Gold Dragonborn', label: 'Gold Dragonborn' },
            { value: 'Silver Dragonborn', label: 'Silver Dragonborn' },
            { group: 'Dragonborn — Gem' },
            { value: 'Amethyst Dragonborn', label: 'Amethyst Dragonborn' },
            { value: 'Crystal Dragonborn', label: 'Crystal Dragonborn' },
            { value: 'Emerald Dragonborn', label: 'Emerald Dragonborn' },
            { value: 'Sapphire Dragonborn', label: 'Sapphire Dragonborn' },
            { value: 'Topaz Dragonborn', label: 'Topaz Dragonborn' },
            // ── Dwarf ──
            { group: 'Dwarf' },
            { value: 'Hill Dwarf', label: 'Hill Dwarf' },
            { value: 'Mountain Dwarf', label: 'Mountain Dwarf' },
            { value: 'Duergar', label: 'Duergar (Gray Dwarf)' },
            // ── Elf ──
            { group: 'Elf' },
            { value: 'High Elf', label: 'High Elf' },
            { value: 'Wood Elf', label: 'Wood Elf' },
            { value: 'Drow', label: 'Drow (Dark Elf)' },
            { value: 'Eladrin', label: 'Eladrin (Fey Elf)' },
            { value: 'Sea Elf', label: 'Sea Elf' },
            { value: 'Shadar-kai', label: 'Shadar-kai (Shadow Elf)' },
            // ── Gnome ──
            { group: 'Gnome' },
            { value: 'Forest Gnome', label: 'Forest Gnome' },
            { value: 'Rock Gnome', label: 'Rock Gnome' },
            { value: 'Deep Gnome', label: 'Deep Gnome (Svirfneblin)' },
            // ── Goliath ──
            { group: 'Goliath — Giant Ancestry' },
            { value: 'Goliath (Cloud)', label: 'Cloud Giant Goliath' },
            { value: 'Goliath (Fire)', label: 'Fire Giant Goliath' },
            { value: 'Goliath (Frost)', label: 'Frost Giant Goliath' },
            { value: 'Goliath (Hill)', label: 'Hill Giant Goliath' },
            { value: 'Goliath (Stone)', label: 'Stone Giant Goliath' },
            { value: 'Goliath (Storm)', label: 'Storm Giant Goliath' },
            // ── Halfling ──
            { group: 'Halfling' },
            { value: 'Lightfoot Halfling', label: 'Lightfoot Halfling' },
            { value: 'Stout Halfling', label: 'Stout Halfling' },
            { value: 'Ghostwise Halfling', label: 'Ghostwise Halfling' },
            // ── Human ──
            { group: 'Human' },
            { value: 'Human', label: 'Human' },
            { value: 'Half-Elf', label: 'Half-Elf' },
            // ── Orc ──
            { group: 'Orc' },
            { value: 'Orc', label: 'Orc' },
            { value: 'Half-Orc', label: 'Half-Orc' },
            // ── Tiefling ──
            { group: 'Tiefling — Fiendish Legacy' },
            { value: 'Abyssal Tiefling', label: 'Abyssal Tiefling' },
            { value: 'Chthonic Tiefling', label: 'Chthonic Tiefling' },
            { value: 'Infernal Tiefling', label: 'Infernal Tiefling' },
            // ── Other Races (Monsters of the Multiverse) ──
            { group: 'Other Races' },
            { value: 'Aarakocra', label: 'Aarakocra' },
            { value: 'Bugbear', label: 'Bugbear' },
            { value: 'Centaur', label: 'Centaur' },
            { value: 'Changeling', label: 'Changeling' },
            { value: 'Fairy', label: 'Fairy' },
            { value: 'Firbolg', label: 'Firbolg' },
            { value: 'Air Genasi', label: 'Air Genasi' },
            { value: 'Earth Genasi', label: 'Earth Genasi' },
            { value: 'Fire Genasi', label: 'Fire Genasi' },
            { value: 'Water Genasi', label: 'Water Genasi' },
            { value: 'Githyanki', label: 'Githyanki' },
            { value: 'Githzerai', label: 'Githzerai' },
            { value: 'Goblin', label: 'Goblin' },
            { value: 'Harengon', label: 'Harengon' },
            { value: 'Hobgoblin', label: 'Hobgoblin' },
            { value: 'Kenku', label: 'Kenku' },
            { value: 'Kobold', label: 'Kobold' },
            { value: 'Lizardfolk', label: 'Lizardfolk' },
            { value: 'Minotaur', label: 'Minotaur' },
            { value: 'Satyr', label: 'Satyr' },
            { value: 'Shifter', label: 'Shifter' },
            { value: 'Tabaxi', label: 'Tabaxi' },
            { value: 'Tortle', label: 'Tortle' },
            { value: 'Triton', label: 'Triton' },
            { value: 'Yuan-ti', label: 'Yuan-ti' }
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
    let currentGroup = null;
    options.forEach(opt => {
        if (opt.group) {
            currentGroup = document.createElement('optgroup');
            currentGroup.label = opt.group;
            selectEl.appendChild(currentGroup);
            return;
        }
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (currentGroup && opt.value !== '') {
            currentGroup.appendChild(option);
        } else {
            selectEl.appendChild(option);
            if (opt.value === '') currentGroup = null;
        }
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
    
    // ── Header banner (D&D Beyond style) ──
    const headerName = data.characterName || '';
    const charClass = data.class || '';
    const charRace = data.race || '';
    const charLevel = data.level || 1;
    const background = data.background || '';
    const alignment = data.alignment || '';
    const profBonus = data.proficiencyBonus || 2;
    
    // ── Ability scores (vertical stack, D&D Beyond style) ──
    const abilityCards = abilityOrder.map(ab => {
        const score = abilities[ab] || 10;
        const mod = getAbilityModifier(score);
        return `<div class="cs-ability">
            <div class="cs-ability-name">${ab}</div>
            <div class="cs-ability-mod">${mod}</div>
            <div class="cs-ability-score">${score}</div>
        </div>`;
    }).join('');
    
    // ── Saving throws ──
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
    
    // ── Skills ──
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
    
    // ── Passive Perception ──
    const passivePerception = data.passivePerception || 10;
    
    // ── Combat stats ──
    const hp = data.hitPoints || 10;
    const hpMax = data.hitPointMax || hp;
    const ac = data.armorClass || 10;
    const speed = data.speed || 30;
    const initiative = data.initiative != null ? (data.initiative >= 0 ? `+${data.initiative}` : data.initiative) : '+0';
    const hitDice = data.hitDice || `1d8`;
    
    // ── Attacks ──
    const attacks = data.attacks || [];
    const attacksHtml = attacks.length > 0 ? attacks.map(atk => `
        <tr class="cs-attack-row">
            <td class="cs-attack-name">${escapeHtml(atk.name || '')}</td>
            <td class="cs-attack-bonus">${escapeHtml(atk.attackBonus || '')}</td>
            <td class="cs-attack-damage">${escapeHtml(atk.damage || '')}</td>
        </tr>
    `).join('') : '<tr><td colspan="3" class="cs-attack-empty">—</td></tr>';
    
    // ── Equipment ──
    const equipment = data.equipment || [];
    const equipmentHtml = equipment.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    
    // ── Personality / Ideals / Bonds / Flaws ──
    const personalityTraits = data.personalityTraits || '';
    const ideals = data.ideals || '';
    const bonds = data.bonds || '';
    const flaws = data.flaws || '';
    
    // ── Features ──
    const features = data.features || [];
    const featuresHtml = features.map(feat => `
        <div class="cs-feature">
            <strong>${escapeHtml(feat.name)}</strong>
            <p>${escapeHtml(feat.description)}</p>
        </div>
    `).join('');
    
    // ── Proficiencies & Languages ──
    const profLang = data.proficienciesAndLanguages || [];
    const profLangHtml = profLang.map(p => `<span class="cs-prof-tag">${escapeHtml(p)}</span>`).join('');
    
    // ── Spells (optional) ──
    let spellsHtml = '';
    if (data.spells && (data.spells.cantrips?.length > 0 || data.spells.level1?.length > 0)) {
        const spellAbility = data.spells.spellcastingAbility || '';
        const spellDC = data.spells.spellSaveDC || '';
        const spellAtk = data.spells.spellAttackBonus || '';
        const cantrips = (data.spells.cantrips || []).map(s => `<span class="cs-spell-tag">${escapeHtml(s)}</span>`).join('');
        const level1 = (data.spells.level1 || []).map(s => `<span class="cs-spell-tag">${escapeHtml(s)}</span>`).join('');
        spellsHtml = `
            <div class="cs-section cs-spells-section">
                <h3 class="cs-section-title">Spellcasting</h3>
                <div class="cs-spell-header">
                    ${spellAbility ? `<div class="cs-spell-stat"><span class="cs-spell-stat-label">Ability</span><span class="cs-spell-stat-value">${escapeHtml(spellAbility)}</span></div>` : ''}
                    ${spellDC ? `<div class="cs-spell-stat"><span class="cs-spell-stat-label">Save DC</span><span class="cs-spell-stat-value">${spellDC}</span></div>` : ''}
                    ${spellAtk ? `<div class="cs-spell-stat"><span class="cs-spell-stat-label">Attack</span><span class="cs-spell-stat-value">${escapeHtml(spellAtk)}</span></div>` : ''}
                </div>
                ${cantrips ? `<div class="cs-spell-group"><span class="cs-spell-level">Cantrips</span><div class="cs-spell-list">${cantrips}</div></div>` : ''}
                ${level1 ? `<div class="cs-spell-group"><span class="cs-spell-level">Level 1 (${data.spells.slots || 2} slots)</span><div class="cs-spell-list">${level1}</div></div>` : ''}
            </div>
        `;
    }

    DOM.charSheetCard.innerHTML = `
        <!-- D&D Beyond Header Banner -->
        <div class="cs-header">
            ${headerName ? `<h2 class="cs-name">${escapeHtml(headerName)}</h2>` : ''}
            <div class="cs-info-row">
                <div class="cs-info-item"><span class="cs-info-value">${escapeHtml(charClass)} ${charLevel}</span><span class="cs-info-label">Class & Level</span></div>
                <div class="cs-info-item"><span class="cs-info-value">${escapeHtml(background)}</span><span class="cs-info-label">Background</span></div>
                <div class="cs-info-item"><span class="cs-info-value">${escapeHtml(charRace)}</span><span class="cs-info-label">Race</span></div>
                <div class="cs-info-item"><span class="cs-info-value">${escapeHtml(alignment)}</span><span class="cs-info-label">Alignment</span></div>
            </div>
        </div>

        <!-- D&D Beyond 3-Column Layout -->
        <div class="cs-body">
            <!-- LEFT COLUMN: Abilities, Saves, Skills -->
            <div class="cs-col-left">
                <div class="cs-abilities-col">
                    ${abilityCards}
                </div>
                
                <div class="cs-box cs-inspiration-prof">
                    <div class="cs-inline-stat">
                        <span class="cs-inline-dot">○</span>
                        <span class="cs-inline-label">Inspiration</span>
                    </div>
                    <div class="cs-inline-stat">
                        <span class="cs-inline-value">+${profBonus}</span>
                        <span class="cs-inline-label">Proficiency Bonus</span>
                    </div>
                </div>

                <div class="cs-box">
                    <div class="cs-saves-list">${savingThrowsHtml}</div>
                    <div class="cs-box-label">Saving Throws</div>
                </div>

                <div class="cs-box">
                    <div class="cs-skills-list">${skillsHtml}</div>
                    <div class="cs-box-label">Skills</div>
                </div>

                <div class="cs-passive-box">
                    <span class="cs-passive-value">${passivePerception}</span>
                    <span class="cs-passive-label">Passive Wisdom (Perception)</span>
                </div>
            </div>

            <!-- CENTER COLUMN: Combat, Attacks, Equipment -->
            <div class="cs-col-center">
                <div class="cs-combat-trio">
                    <div class="cs-combat-box cs-ac-box">
                        <div class="cs-combat-box-value">${ac}</div>
                        <div class="cs-combat-box-label">Armor Class</div>
                    </div>
                    <div class="cs-combat-box cs-init-box">
                        <div class="cs-combat-box-value">${initiative}</div>
                        <div class="cs-combat-box-label">Initiative</div>
                    </div>
                    <div class="cs-combat-box cs-speed-box">
                        <div class="cs-combat-box-value">${speed}<span class="cs-speed-unit">ft</span></div>
                        <div class="cs-combat-box-label">Speed</div>
                    </div>
                </div>

                <div class="cs-hp-block">
                    <div class="cs-hp-header">
                        <span class="cs-hp-label">Hit Point Maximum</span>
                        <span class="cs-hp-max">${hpMax}</span>
                    </div>
                    <div class="cs-hp-current">
                        <div class="cs-hp-value">${hp}</div>
                        <div class="cs-hp-sublabel">Current Hit Points</div>
                    </div>
                </div>

                <div class="cs-hitdice-death">
                    <div class="cs-hitdice-box">
                        <div class="cs-hd-label">Total</div>
                        <div class="cs-hd-value">${escapeHtml(hitDice)}</div>
                        <div class="cs-hd-sublabel">Hit Dice</div>
                    </div>
                    <div class="cs-death-box">
                        <div class="cs-death-label">Death Saves</div>
                        <div class="cs-death-row"><span class="cs-death-type">S</span><span class="cs-death-dots">○ ○ ○</span></div>
                        <div class="cs-death-row"><span class="cs-death-type">F</span><span class="cs-death-dots">○ ○ ○</span></div>
                    </div>
                </div>

                <div class="cs-box cs-attacks-box">
                    <table class="cs-attacks-table">
                        <thead>
                            <tr><th>Name</th><th>Atk Bonus</th><th>Damage/Type</th></tr>
                        </thead>
                        <tbody>${attacksHtml}</tbody>
                    </table>
                    <div class="cs-box-label">Attacks & Spellcasting</div>
                </div>

                <div class="cs-box">
                    <ul class="cs-equipment-list">${equipmentHtml}</ul>
                    <div class="cs-box-label">Equipment</div>
                </div>
            </div>

            <!-- RIGHT COLUMN: Personality, Features, Proficiencies -->
            <div class="cs-col-right">
                <div class="cs-personality-block">
                    <div class="cs-personality-field">
                        <div class="cs-personality-text">${escapeHtml(personalityTraits)}</div>
                        <div class="cs-personality-label">Personality Traits</div>
                    </div>
                    <div class="cs-personality-field">
                        <div class="cs-personality-text">${escapeHtml(ideals)}</div>
                        <div class="cs-personality-label">Ideals</div>
                    </div>
                    <div class="cs-personality-field">
                        <div class="cs-personality-text">${escapeHtml(bonds)}</div>
                        <div class="cs-personality-label">Bonds</div>
                    </div>
                    <div class="cs-personality-field">
                        <div class="cs-personality-text">${escapeHtml(flaws)}</div>
                        <div class="cs-personality-label">Flaws</div>
                    </div>
                </div>

                <div class="cs-box">
                    ${featuresHtml}
                    <div class="cs-box-label">Features & Traits</div>
                </div>

                <div class="cs-box">
                    <div class="cs-prof-tags">${profLangHtml}</div>
                    <div class="cs-box-label">Proficiencies & Languages</div>
                </div>
            </div>
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
    
    const nameEl = card.querySelector('.cs-name');
    const charName = nameEl ? nameEl.textContent.trim().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '_') : 'Character';
    const filename = `${charName}_Sheet.pdf`;
    
    const clone = card.cloneNode(true);
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'background:#1a1a2e; color:#e8e6e3; padding:20px; font-family:Crimson Text,serif; width:754px; box-sizing:border-box;';
    
    // Title
    const title = document.createElement('div');
    title.style.cssText = 'text-align:center; margin-bottom:12px; padding-bottom:8px; border-bottom:2px solid #d4a017;';
    title.innerHTML = '<div style="font-family:Cinzel,serif; font-size:18px; color:#d4a017; margin-bottom:2px;">Character Sheet</div><div style="font-family:Crimson Text,serif; font-size:11px; color:#a09b8c;">The Magic Forge • D&D 5e</div>';
    wrapper.appendChild(title);
    
    const S = (sel, styles) => {
        clone.querySelectorAll(sel).forEach(el => {
            Object.entries(styles).forEach(([k, v]) => el.style[k] = v);
        });
    };
    
    // === HEADER ===
    S('.cs-header', { textAlign:'center', marginBottom:'10px', paddingBottom:'8px', borderBottom:'3px double #4a3f2f' });
    S('.cs-name', { fontFamily:'Cinzel,serif', fontSize:'20px', color:'#d4a017', margin:'0 0 6px', letterSpacing:'0.04em' });
    S('.cs-info-row', { textAlign:'center' });
    S('.cs-info-item', { display:'inline-block', verticalAlign:'top', textAlign:'center', minWidth:'80px', padding:'2px 6px', border:'1px solid #4a3f2f', borderRadius:'4px', background:'rgba(0,0,0,0.15)', marginRight:'6px', marginBottom:'4px' });
    S('.cs-info-value', { fontFamily:'Crimson Text,serif', fontSize:'10px', color:'#e8e6e3', fontWeight:'600', display:'block' });
    S('.cs-info-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase', letterSpacing:'0.1em', display:'block' });
    
    // === 3-COL BODY (table layout for html2canvas) ===
    const body = clone.querySelector('.cs-body');
    if (body) {
        body.style.cssText = 'display:table; width:100%; table-layout:fixed; margin-bottom:8px;';
        const colLeft = body.querySelector('.cs-col-left');
        const colCenter = body.querySelector('.cs-col-center');
        const colRight = body.querySelector('.cs-col-right');
        if (colLeft) colLeft.style.cssText = 'display:table-cell; width:140px; vertical-align:top; padding-right:6px;';
        if (colCenter) colCenter.style.cssText = 'display:table-cell; vertical-align:top; padding-right:6px;';
        if (colRight) colRight.style.cssText = 'display:table-cell; vertical-align:top;';
    }
    
    // === ABILITIES ===
    S('.cs-abilities-col', { });
    S('.cs-ability', { background:'rgba(0,0,0,0.35)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'3px', textAlign:'center', marginBottom:'3px' });
    S('.cs-ability-name', { fontFamily:'Cinzel,serif', fontSize:'7px', color:'#a09b8c', letterSpacing:'0.1em', textTransform:'uppercase' });
    S('.cs-ability-mod', { fontFamily:'Cinzel,serif', fontSize:'16px', fontWeight:'700', color:'#d4a017', lineHeight:'1.1' });
    S('.cs-ability-score', { fontSize:'8px', color:'#a09b8c', background:'rgba(0,0,0,0.3)', border:'1px solid #4a3f2f', borderRadius:'50%', width:'18px', height:'18px', lineHeight:'18px', margin:'1px auto 0', display:'block', textAlign:'center' });
    
    // === INSPIRATION & PROF ===
    S('.cs-inspiration-prof', { background:'rgba(0,0,0,0.2)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'3px 5px', marginBottom:'3px' });
    S('.cs-inline-stat', { marginBottom:'1px' });
    S('.cs-inline-dot', { fontSize:'7px', color:'#a09b8c', marginRight:'3px' });
    S('.cs-inline-value', { fontFamily:'Cinzel,serif', fontWeight:'700', color:'#d4a017', fontSize:'9px', marginRight:'3px' });
    S('.cs-inline-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase' });
    
    // === BOX / LABEL ===
    S('.cs-box', { background:'rgba(0,0,0,0.2)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'4px', marginBottom:'4px' });
    S('.cs-box-label', { fontFamily:'Cinzel,serif', fontSize:'7px', color:'#d4a017', textTransform:'uppercase', letterSpacing:'0.1em', textAlign:'center', background:'#1a1a2e', padding:'1px 5px', border:'1px solid #4a3f2f', borderRadius:'4px', marginTop:'3px', marginLeft:'auto', marginRight:'auto', display:'table' });
    
    // === SAVES & SKILLS ===
    S('.cs-saves-list, .cs-skills-list', { });
    S('.cs-save, .cs-skill', { fontFamily:'Crimson Text,serif', fontSize:'8px', color:'#a09b8c', lineHeight:'1.5' });
    S('.cs-save.proficient, .cs-skill.proficient', { color:'#e8e6e3' });
    S('.cs-save.proficient .cs-save-dot, .cs-skill.proficient .cs-skill-dot', { color:'#d4a017' });
    S('.cs-save-dot, .cs-skill-dot', { fontSize:'6px', marginRight:'2px' });
    S('.cs-save-mod, .cs-skill-mod', { fontFamily:'Cinzel,serif', fontSize:'7px', fontWeight:'600', marginRight:'3px', display:'inline-block', minWidth:'14px' });
    S('.cs-skill-name, .cs-save-name', { fontSize:'8px' });
    S('.cs-skill-ability', { fontSize:'6px', color:'#a09b8c', opacity:'0.5', marginLeft:'2px' });
    
    // === PASSIVE PERCEPTION ===
    S('.cs-passive-box', { background:'rgba(0,0,0,0.2)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'3px 5px', marginBottom:'3px' });
    S('.cs-passive-value', { fontFamily:'Cinzel,serif', fontSize:'10px', fontWeight:'700', color:'#d4a017', background:'rgba(0,0,0,0.3)', border:'1px solid #4a3f2f', borderRadius:'50%', width:'22px', height:'22px', lineHeight:'22px', textAlign:'center', display:'inline-block', marginRight:'4px', verticalAlign:'middle' });
    S('.cs-passive-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase', verticalAlign:'middle' });
    
    // === COMBAT TRIO (inline-block) ===
    S('.cs-combat-trio', { marginBottom:'4px', textAlign:'center' });
    S('.cs-combat-box', { display:'inline-block', width:'31%', background:'rgba(0,0,0,0.3)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'4px', textAlign:'center', verticalAlign:'top', marginRight:'2px', boxSizing:'border-box' });
    S('.cs-combat-box-value', { fontFamily:'Cinzel,serif', fontSize:'16px', fontWeight:'900', color:'#d4a017', lineHeight:'1.2' });
    S('.cs-ac-box .cs-combat-box-value', { color:'#3498db' });
    S('.cs-speed-unit', { fontSize:'7px', fontWeight:'400', color:'#a09b8c' });
    S('.cs-combat-box-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:'2px' });
    
    // === HP ===
    S('.cs-hp-block', { background:'rgba(0,0,0,0.3)', border:'2px solid #4a3f2f', borderRadius:'8px', overflow:'hidden', marginBottom:'4px' });
    S('.cs-hp-header', { padding:'2px 6px', background:'rgba(0,0,0,0.2)', borderBottom:'1px solid #4a3f2f' });
    S('.cs-hp-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase' });
    S('.cs-hp-max', { fontFamily:'Cinzel,serif', fontSize:'9px', fontWeight:'700', color:'#e74c3c', float:'right' });
    S('.cs-hp-current', { padding:'4px', textAlign:'center' });
    S('.cs-hp-value', { fontFamily:'Cinzel,serif', fontSize:'22px', fontWeight:'900', color:'#e74c3c', lineHeight:'1' });
    S('.cs-hp-sublabel', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase', marginTop:'2px' });
    
    // === HIT DICE & DEATH SAVES (inline-block) ===
    S('.cs-hitdice-death', { marginBottom:'4px', textAlign:'center' });
    S('.cs-hitdice-box, .cs-death-box', { display:'inline-block', width:'48%', background:'rgba(0,0,0,0.3)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'3px', textAlign:'center', verticalAlign:'top', boxSizing:'border-box' });
    S('.cs-hitdice-box', { marginRight:'2%' });
    S('.cs-hd-label, .cs-hd-sublabel, .cs-death-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase' });
    S('.cs-hd-value', { fontFamily:'Cinzel,serif', fontSize:'11px', fontWeight:'700', color:'#d4a017', margin:'1px 0' });
    S('.cs-death-row', { fontSize:'8px', textAlign:'center' });
    S('.cs-death-type', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', marginRight:'2px' });
    S('.cs-death-dots', { color:'#a09b8c', fontSize:'7px', letterSpacing:'0.1em' });
    
    // === ATTACKS ===
    S('.cs-attacks-table', { width:'100%', borderCollapse:'collapse', fontFamily:'Crimson Text,serif', fontSize:'9px' });
    S('.cs-attacks-table th', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase', padding:'2px 3px', borderBottom:'1px solid #4a3f2f', textAlign:'left' });
    S('.cs-attacks-table td', { padding:'2px 3px', borderBottom:'1px solid #3a3226', color:'#e8e6e3' });
    S('.cs-attack-name', { color:'#e8e6e3', fontWeight:'600' });
    S('.cs-attack-bonus', { color:'#d4a017', textAlign:'center' });
    S('.cs-attack-damage', { color:'#a09b8c' });
    
    // === EQUIPMENT ===
    S('.cs-equipment-list', { listStyle:'none', padding:'0', margin:'0' });
    S('.cs-equipment-list li', { fontFamily:'Crimson Text,serif', fontSize:'9px', color:'#e8e6e3', padding:'1px 0' });
    
    // === PERSONALITY ===
    S('.cs-personality-block', { });
    S('.cs-personality-field', { background:'rgba(0,0,0,0.2)', border:'2px solid #4a3f2f', borderRadius:'8px', padding:'4px', marginBottom:'4px' });
    S('.cs-personality-text', { fontFamily:'Crimson Text,serif', fontSize:'8px', color:'#e8e6e3', lineHeight:'1.3', fontStyle:'italic' });
    S('.cs-personality-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#d4a017', textTransform:'uppercase', letterSpacing:'0.1em', textAlign:'center', background:'#1a1a2e', padding:'1px 4px', border:'1px solid #4a3f2f', borderRadius:'4px', marginTop:'2px', display:'table', marginLeft:'auto', marginRight:'auto' });
    
    // === FEATURES ===
    S('.cs-feature', { padding:'4px', background:'rgba(0,0,0,0.15)', borderRadius:'6px', borderLeft:'3px solid #8b7535', marginBottom:'4px' });
    S('.cs-feature strong', { fontFamily:'Cinzel,serif', fontSize:'9px', color:'#e6c65a' });
    S('.cs-feature p', { fontFamily:'Crimson Text,serif', fontSize:'8px', color:'#a09b8c', margin:'1px 0 0', lineHeight:'1.3' });
    
    // === PROF TAGS ===
    S('.cs-prof-tags', { });
    S('.cs-prof-tag', { display:'inline-block', background:'rgba(212,160,23,0.1)', border:'1px solid #6b5a28', borderRadius:'12px', padding:'1px 5px', fontFamily:'Crimson Text,serif', fontSize:'8px', color:'#8b7535', marginRight:'2px', marginBottom:'2px' });
    
    // === SPELLS ===
    S('.cs-spells-section', { marginTop:'6px' });
    S('.cs-section-title', { fontFamily:'Cinzel,serif', fontSize:'10px', color:'#d4a017', borderBottom:'1px solid #5a4a1e', paddingBottom:'3px', marginBottom:'4px', textTransform:'uppercase', letterSpacing:'0.05em' });
    S('.cs-spell-header', { marginBottom:'4px' });
    S('.cs-spell-stat', { display:'inline-block', textAlign:'center', background:'rgba(0,0,0,0.2)', border:'1px solid #5b3a7a', borderRadius:'6px', padding:'2px 6px', marginRight:'4px', verticalAlign:'top' });
    S('.cs-spell-stat-label', { fontFamily:'Cinzel,serif', fontSize:'6px', color:'#a09b8c', textTransform:'uppercase', display:'block' });
    S('.cs-spell-stat-value', { fontFamily:'Cinzel,serif', fontSize:'10px', fontWeight:'700', color:'#bb8fce', display:'block' });
    S('.cs-spell-level', { fontFamily:'Cinzel,serif', fontSize:'8px', color:'#a09b8c', display:'block', marginBottom:'2px' });
    S('.cs-spell-list', { });
    S('.cs-spell-tag', { display:'inline-block', background:'rgba(155,89,182,0.15)', border:'1px solid #5b3a7a', borderRadius:'12px', padding:'1px 6px', fontFamily:'Crimson Text,serif', fontSize:'8px', color:'#bb8fce', marginRight:'2px', marginBottom:'2px' });
    
    // === MAGIC ITEMS ===
    S('.cs-items-grid', { });
    S('.cs-item-card', { display:'inline-block', width:'48%', background:'rgba(0,0,0,0.3)', border:'1px solid #4a3f2f', borderRadius:'8px', padding:'6px', boxSizing:'border-box', verticalAlign:'top', marginRight:'2%', marginBottom:'4px' });
    S('.cs-item-header', { marginBottom:'3px' });
    S('.cs-item-emoji', { fontSize:'12px', marginRight:'3px' });
    S('.cs-item-name', { fontFamily:'Cinzel,serif', fontSize:'9px', fontWeight:'700', color:'#e6c65a' });
    S('.cs-item-rarity', { fontFamily:'Crimson Text,serif', fontSize:'7px', padding:'1px 5px', borderRadius:'8px', background:'rgba(212,160,23,0.15)', color:'#d4a017', border:'1px solid #6b5a28', marginLeft:'4px' });
    S('.cs-item-type', { fontFamily:'Crimson Text,serif', fontSize:'7px', color:'#a09b8c', fontStyle:'italic', marginBottom:'2px' });
    S('.cs-item-desc', { fontFamily:'Crimson Text,serif', fontSize:'8px', color:'#c8c3b4', lineHeight:'1.3', margin:'0' });
    S('.cs-item-props', { listStyle:'none', padding:'0', margin:'3px 0 0' });
    S('.cs-item-props li', { fontFamily:'Crimson Text,serif', fontSize:'7px', color:'#a09b8c', padding:'1px 0', borderTop:'1px solid #3a3226' });
    S('.cs-item-card.rarity-common .cs-item-name', { color:'#c8c3b4' });
    S('.cs-item-card.rarity-uncommon .cs-item-name', { color:'#2ecc71' });
    S('.cs-item-card.rarity-rare .cs-item-name', { color:'#3498db' });
    S('.cs-item-card.rarity-epic .cs-item-name', { color:'#9b59b6' });
    S('.cs-item-card.rarity-legendary .cs-item-name', { color:'#e67e22' });
    S('.cs-item-card.rarity-artifact .cs-item-name', { color:'#e74c3c' });
    
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);
    
    const opt = {
        margin: [6, 6, 6, 6],
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
