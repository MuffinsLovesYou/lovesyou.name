define([],()=>{

// A big thanks to whoever set up http://tinyurl.com/dndappfiles
// Found from https://www.reddit.com/r/DnD/comments/2yirik/after_hours_of_cleaning_here_are_the_complete/
// by /u/afluffygrue

let Items = {
    "Copper": {
        "Name": "Copper",
        "Value": "1cp",
        "Weight": "0.02"
    },
    "Electrum": {
        "Name": "Electrum",
        "Value": "1ep",
        "Weight": "0.02"
    },
    "Gold": {
        "Name": "Gold",
        "Value": "1gp",
        "Weight": "0.02"
    },
    "Platinum": {
        "Name": "Platinum",
        "Value": "1pp",
        "Weight": "0.02"
    },
    "Silver": {
        "Name": "Silver",
        "Value": "1sp",
        "Weight": "0.02"
    },
    "Arrows": {
        "Name": "Arrows",
        "Value": "5cp",
        "Weight": "0.05"
    },
    "Arrows (20)": {
        "Name": "Arrows (20)",
        "Value": "1gp",
        "Weight": "1"
    },
    "Blowgun Needles": {
        "Name": "Blowgun Needles",
        "Value": "2cp",
        "Weight": "0.02"
    },
    "Blowgun Needles (50)": {
        "Name": "Blowgun Needles (50)",
        "Value": "1gp",
        "Weight": "1"
    },
    "Crossbow Bolts": {
        "Name": "Crossbow Bolts",
        "Value": "5cp",
        "Weight": "0.075"
    },
    "Crossbow Bolts (20)": {
        "Name": "Crossbow Bolts (20)",
        "Value": "1gp",
        "Weight": "1.5"
    },
    "Sling Bullets": {
        "Name": "Sling Bullets",
        "Value": "0.2cp",
        "Weight": "0.075"
    },
    "Sling Bullets (20)": {
        "Name": "Sling Bullets (20)",
        "Value": "4cp",
        "Weight": "1.5"
    },
    "Abacus": {
        "Name": "Abacus",
        "Value": "2gp",
        "Weight": "2"
    },
    "Acid (vial)": {
        "Name": "Acid (vial)",
        "Value": "25gp",
        "Weight": "1"
    },
    "Alchemist's Fire (flask)": {
        "Name": "Alchemist's Fire (flask)",
        "Value": "50gp",
        "Weight": "1"
    },
    "Alchemist's Supplies": {
        "Name": "Alchemist's Supplies",
        "Value": "50gp",
        "Weight": "8"
    },
    "Antitoxin": {
        "Name": "Antitoxin",
        "Value": "50gp"
    },
    "Backpack": {
        "Name": "Backpack",
        "Value": "2gp",
        "Weight": "5"
    },
    "Bagpipes": {
        "Name": "Bagpipes",
        "Value": "30gp",
        "Weight": "6"
    },
    "Ball Bearings": {
        "Name": "Ball Bearings",
        "Value": "0.1cp",
        "Weight": "0.002"
    },
    "Barrel": {
        "Name": "Barrel",
        "Value": "2gp",
        "Weight": "70"
    },
    "Basic Poison (vial)": {
        "Name": "Basic Poison (vial)",
        "Value": "100gp"
    },
    "Basket": {
        "Name": "Basket",
        "Value": "4sp",
        "Weight": "2"
    },
    "Bedroll": {
        "Name": "Bedroll",
        "Value": "1gp",
        "Weight": "7"
    },
    "Bell": {
        "Name": "Bell",
        "Value": "1gp"
    },
    "Blanket": {
        "Name": "Blanket",
        "Value": "5sp",
        "Weight": "3"
    },
    "Block and Tackle": {
        "Name": "Block and Tackle",
        "Value": "1gp",
        "Weight": "5"
    },
    "Book": {
        "Name": "Book",
        "Value": "25gp",
        "Weight": "5"
    },
    "Brewer's Supplies": {
        "Name": "Brewer's Supplies",
        "Value": "20gp",
        "Weight": "9"
    },
    "Bucket": {
        "Name": "Bucket",
        "Value": "5cp",
        "Weight": "2"
    },
    "Bullseye Lantern": {
        "Name": "Bullseye Lantern",
        "Value": "10gp",
        "Weight": "2"
    },
    "Burglar's Pack": {
        "Name": "Burglar's Pack",
        "Value": "16gp",
        "Weight": "44.5"
    },
    "Calligrapher's Supplies": {
        "Name": "Calligrapher's Supplies",
        "Value": "10gp",
        "Weight": "5"
    },
    "Caltrops": {
        "Name": "Caltrops",
        "Value": "5cp",
        "Weight": "0.1"
    },
    "Caltrops (20)": {
        "Name": "Caltrops (20)",
        "Value": "1gp",
        "Weight": "2"
    },
    "Candle": {
        "Name": "Candle",
        "Value": "1cp"
    },
    "Carpenter's Tools": {
        "Name": "Carpenter's Tools",
        "Value": "8gp",
        "Weight": "6"
    },
    "Cartographer's Tools": {
        "Name": "Cartographer's Tools",
        "Value": "15gp",
        "Weight": "6"
    },
    "Chain (10 feet)": {
        "Name": "Chain (10 feet)",
        "Value": "5gp",
        "Weight": "10"
    },
    "Chalk": {
        "Name": "Chalk",
        "Value": "1cp"
    },
    "Chest": {
        "Name": "Chest",
        "Value": "5gp",
        "Weight": "25"
    },
    "Climber's Kit": {
        "Name": "Climber's Kit",
        "Value": "25gp",
        "Weight": "12"
    },
    "Cobbler's Tools": {
        "Name": "Cobbler's Tools",
        "Value": "5gp",
        "Weight": "5"
    },
    "Common Clothes": {
        "Name": "Common Clothes",
        "Value": "5sp",
        "Weight": "3"
    },
    "Component Pouch": {
        "Name": "Component Pouch",
        "Value": "25gp",
        "Weight": "2"
    },
    "Cook's Utensils": {
        "Name": "Cook's Utensils",
        "Value": "1gp",
        "Weight": "8"
    },
    "Costume Clothes": {
        "Name": "Costume Clothes",
        "Value": "5gp",
        "Weight": "4"
    },
    "Crossbow Bolt Case": {
        "Name": "Crossbow Bolt Case",
        "Value": "1gp",
        "Weight": "1"
    },
    "Crowbar": {
        "Name": "Crowbar",
        "Value": "2gp",
        "Weight": "5"
    },
    "Crystal": {
        "Name": "Crystal",
        "Value": "10gp",
        "Weight": "1"
    },
    "Dice Set": {
        "Name": "Dice Set",
        "Value": "1sp"
    },
    "Diplomat's Pack": {
        "Name": "Diplomat's Pack",
        "Value": "39gp",
        "Weight": "36"
    },
    "Disguise Kit": {
        "Name": "Disguise Kit",
        "Value": "25gp",
        "Weight": "3"
    },
    "Dragonchess Set": {
        "Name": "Dragonchess Set",
        "Value": "1gp",
        "Weight": "0.5"
    },
    "Drum": {
        "Name": "Drum",
        "Value": "6gp",
        "Weight": "3"
    },
    "Dulcimer": {
        "Name": "Dulcimer",
        "Value": "25gp",
        "Weight": "10"
    },
    "Dungeoneer's Pack": {
        "Name": "Dungeoneer's Pack",
        "Value": "12gp",
        "Weight": "61.5"
    },
    "Entertainer's Pack": {
        "Name": "Entertainer's Pack",
        "Value": "40gp",
        "Weight": "38"
    },
    "Explorer's Pack": {
        "Name": "Explorer's Pack",
        "Value": "10gp",
        "Weight": "59"
    },
    "Fine Clothes": {
        "Name": "Fine Clothes",
        "Value": "15gp",
        "Weight": "6"
    },
    "Fishing Tackle": {
        "Name": "Fishing Tackle",
        "Value": "1gp",
        "Weight": "4"
    },
    "Flask": {
        "Name": "Flask",
        "Value": "1cp",
        "Weight": "1"
    },
    "Flute": {
        "Name": "Flute",
        "Value": "2gp",
        "Weight": "1"
    },
    "Forgery Kit": {
        "Name": "Forgery Kit",
        "Value": "15gp",
        "Weight": "5"
    },
    "Glass Bottle": {
        "Name": "Glass Bottle",
        "Value": "2gp",
        "Weight": "2"
    },
    "Glassblower's Tools": {
        "Name": "Glassblower's Tools",
        "Value": "30gp",
        "Weight": "5"
    },
    "Grappling Hook": {
        "Name": "Grappling Hook",
        "Value": "2gp",
        "Weight": "4"
    },
    "Hammer": {
        "Name": "Hammer",
        "Value": "1gp",
        "Weight": "3"
    },
    "Healer's Kit": {
        "Name": "Healer's Kit",
        "Value": "5gp",
        "Weight": "3"
    },
    "Hempen Rope (50 feet)": {
        "Name": "Hempen Rope (50 feet)",
        "Value": "1gp",
        "Weight": "10"
    },
    "Herbalism Kit": {
        "Name": "Herbalism Kit",
        "Value": "5gp",
        "Weight": "3"
    },
    "Holy Symbol (Amulet)": {
        "Name": "Holy Symbol (Amulet)",
        "Value": "5gp",
        "Weight": "1"
    },
    "Holy Symbol (Emblem)": {
        "Name": "Holy Symbol (Emblem)",
        "Value": "5gp"
    },
    "Holy Symbol (Reliquary)": {
        "Name": "Holy Symbol (Reliquary)",
        "Value": "5gp",
        "Weight": "2"
    },
    "Holy Water (flask)": {
        "Name": "Holy Water (flask)",
        "Value": "25gp",
        "Weight": "1"
    },
    "Hooded Lantern": {
        "Name": "Hooded Lantern",
        "Value": "5gp",
        "Weight": "2"
    },
    "Horn": {
        "Name": "Horn",
        "Value": "3gp",
        "Weight": "2"
    },
    "Hourglass": {
        "Name": "Hourglass",
        "Value": "25gp",
        "Weight": "1"
    },
    "Hunting Trap": {
        "Name": "Hunting Trap",
        "Value": "5gp",
        "Weight": "25"
    },
    "Ink": {
        "Name": "Ink",
        "Value": "10gp"
    },
    "Ink Pen": {
        "Name": "Ink Pen",
        "Value": "2cp"
    },
    "Iron Pot": {
        "Name": "Iron Pot",
        "Value": "2gp",
        "Weight": "10"
    },
    "Iron Spikes": {
        "Name": "Iron Spikes",
        "Value": "1sp",
        "Weight": "0.5"
    },
    "Iron Spikes (10)": {
        "Name": "Iron Spikes (10)",
        "Value": "1gp",
        "Weight": "5"
    },
    "Jeweler's Tools": {
        "Name": "Jeweler's Tools",
        "Value": "25gp",
        "Weight": "2"
    },
    "Jug": {
        "Name": "Jug",
        "Value": "2cp",
        "Weight": "4"
    },
    "Ladder (10-foot)": {
        "Name": "Ladder (10-foot)",
        "Value": "1sp",
        "Weight": "25"
    },
    "Lamp": {
        "Name": "Lamp",
        "Value": "5sp",
        "Weight": "1"
    },
    "Leatherworker's Tools": {
        "Name": "Leatherworker's Tools",
        "Value": "5gp",
        "Weight": "5"
    },
    "Lock": {
        "Name": "Lock",
        "Value": "10gp",
        "Weight": "1"
    },
    "Lute": {
        "Name": "Lute",
        "Value": "35gp",
        "Weight": "2"
    },
    "Lyre": {
        "Name": "Lyre",
        "Value": "30gp",
        "Weight": "2"
    },
    "Magnifying Glass": {
        "Name": "Magnifying Glass",
        "Value": "100gp"
    },
    "Manacles": {
        "Name": "Manacles",
        "Value": "2gp",
        "Weight": "6"
    },
    "Map or Scroll Case": {
        "Name": "Map or Scroll Case",
        "Value": "1gp",
        "Weight": "1"
    },
    "Mason's Tools": {
        "Name": "Mason's Tools",
        "Value": "10gp",
        "Weight": "8"
    },
    "Merchant's Scale": {
        "Name": "Merchant's Scale",
        "Value": "5gp",
        "Weight": "3"
    },
    "Mess Kit": {
        "Name": "Mess Kit",
        "Value": "2sp",
        "Weight": "1"
    },
    "Miner's Pick": {
        "Name": "Miner's Pick",
        "Value": "2gp",
        "Weight": "10"
    },
    "Navigator's Tools": {
        "Name": "Navigator's Tools",
        "Value": "25gp",
        "Weight": "2"
    },
    "Oil (flask)": {
        "Name": "Oil (flask)",
        "Value": "1sp",
        "Weight": "1"
    },
    "Orb": {
        "Name": "Orb",
        "Value": "25gp",
        "Weight": "3"
    },
    "Painter's Supplies": {
        "Name": "Painter's Supplies",
        "Value": "10gp",
        "Weight": "5"
    },
    "Pan Flute": {
        "Name": "Pan Flute",
        "Value": "12gp",
        "Weight": "2"
    },
    "Paper": {
        "Name": "Paper",
        "Value": "2sp"
    },
    "Parchment (one sheet)": {
        "Name": "Parchment (one sheet)",
        "Value": "1sp"
    },
    "Perfume (vial)": {
        "Name": "Perfume (vial)",
        "Value": "5gp"
    },
    "Pitcher": {
        "Name": "Pitcher",
        "Value": "2cp",
        "Weight": "4"
    },
    "Piton": {
        "Name": "Piton",
        "Value": "5cp",
        "Weight": "0.25"
    },
    "Playing Card Set": {
        "Name": "Playing Card Set",
        "Value": "5sp"
    },
    "Poisoner's Kit": {
        "Name": "Poisoner's Kit",
        "Value": "50gp",
        "Weight": "2"
    },
    "Pole (10-foot)": {
        "Name": "Pole (10-foot)",
        "Value": "5cp",
        "Weight": "7"
    },
    "Portable Ram": {
        "Name": "Portable Ram",
        "Value": "4gp",
        "Weight": "35"
    },
    "Potter's Tools": {
        "Name": "Potter's Tools",
        "Value": "10gp",
        "Weight": "3"
    },
    "Pouch": {
        "Name": "Pouch",
        "Value": "5sp",
        "Weight": "1"
    },
    "Priest's Pack": {
        "Name": "Priest's Pack",
        "Value": "19gp",
        "Weight": "24"
    },
    "Quiver": {
        "Name": "Quiver",
        "Value": "1gp",
        "Weight": "1"
    },
    "Rations (1 day)": {
        "Name": "Rations (1 day)",
        "Value": "5sp",
        "Weight": "2"
    },
    "Robes": {
        "Name": "Robes",
        "Value": "1gp",
        "Weight": "4"
    },
    "Rod": {
        "Name": "Rod",
        "Value": "10gp",
        "Weight": "2"
    },
    "Sack": {
        "Name": "Sack",
        "Value": "1cp",
        "Weight": "0.5"
    },
    "Scholar's Pack": {
        "Name": "Scholar's Pack",
        "Value": "40gp",
        "Weight": "10"
    },
    "Sealing Wax": {
        "Name": "Sealing Wax",
        "Value": "5sp"
    },
    "Shawm": {
        "Name": "Shawm",
        "Value": "2gp",
        "Weight": "1"
    },
    "Shovel": {
        "Name": "Shovel",
        "Value": "2gp",
        "Weight": "5"
    },
    "Signal Whistle": {
        "Name": "Signal Whistle",
        "Value": "5cp"
    },
    "Signet Ring": {
        "Name": "Signet Ring",
        "Value": "5gp"
    },
    "Silk Rope (50 feet)": {
        "Name": "Silk Rope (50 feet)",
        "Value": "10gp",
        "Weight": "5"
    },
    "Sledge Hammer": {
        "Name": "Sledge Hammer",
        "Value": "2gp",
        "Weight": "10"
    },
    "Smith's Tools": {
        "Name": "Smith's Tools",
        "Value": "20gp",
        "Weight": "8"
    },
    "Soap": {
        "Name": "Soap",
        "Value": "2cp"
    },
    "Spellbook": {
        "Name": "Spellbook",
        "Value": "50gp",
        "Weight": "3"
    },
    "Sprig of Mistletoe": {
        "Name": "Sprig of Mistletoe",
        "Value": "1gp"
    },
    "Spyglass": {
        "Name": "Spyglass",
        "Value": "1000gp",
        "Weight": "1"
    },
    "Staff": {
        "Name": "Staff",
        "Value": "5gp",
        "Weight": "4"
    },
    "Steel Mirror": {
        "Name": "Steel Mirror",
        "Value": "5gp",
        "Weight": "0.5"
    },
    "Tankard": {
        "Name": "Tankard",
        "Value": "1cp"
    },
    "Thieves' Tools": {
        "Name": "Thieves' Tools",
        "Value": "25gp",
        "Weight": "1"
    },
    "Three-Dragon Ante Set": {
        "Name": "Three-Dragon Ante Set",
        "Value": "1gp"
    },
    "Tinderbox": {
        "Name": "Tinderbox",
        "Value": "5sp",
        "Weight": "1"
    },
    "Tinker's Tools": {
        "Name": "Tinker's Tools",
        "Value": "50gp",
        "Weight": "10"
    },
    "Torch": {
        "Name": "Torch",
        "Value": "1cp",
        "Weight": "1"
    },
    "Totem": {
        "Name": "Totem",
        "Value": "1gp"
    },
    "Traveler's Clothes": {
        "Name": "Traveler's Clothes",
        "Value": "2gp",
        "Weight": "4"
    },
    "Tent": {
        "Name": "Tent",
        "Value": "2gp",
        "Weight": "20"
    },
    "Vial": {
        "Name": "Vial",
        "Value": "1gp"
    },
    "Viol": {
        "Name": "Viol",
        "Value": "30gp",
        "Weight": "1"
    },
    "Wand": {
        "Name": "Wand",
        "Value": "10gp",
        "Weight": "1"
    },
    "Waterskin": {
        "Name": "Waterskin",
        "Value": "2sp",
        "Weight": "5"
    },
    "Weaver's Tools": {
        "Name": "Weaver's Tools",
        "Value": "1gp",
        "Weight": "5"
    },
    "Whetstone": {
        "Name": "Whetstone",
        "Value": "1cp",
        "Weight": "1"
    },
    "Woodcarver's Tools": {
        "Name": "Woodcarver's Tools",
        "Value": "1gp",
        "Weight": "5"
    },
    "Wooden Staff": {
        "Name": "Wooden Staff",
        "Value": "5gp",
        "Weight": "4"
    },
    "Yew Wand": {
        "Name": "Yew Wand",
        "Value": "10gp",
        "Weight": "1"
    },
    "Chain Mail": {
        "Name": "Chain Mail",
        "Value": "75gp",
        "Weight": "55",
        "AC": "16",
        "strength": "13",
        "stealth": "YES"
    },
    "Plate Armor": {
        "Name": "Plate Armor",
        "Value": "1500gp",
        "Weight": "65",
        "AC": "18",
        "strength": "15",
        "stealth": "YES"
    },
    "Ring Mail": {
        "Name": "Ring Mail",
        "Value": "30gp",
        "Weight": "40",
        "AC": "14",
        "stealth": "YES"
    },
    "Splint Armor": {
        "Name": "Splint Armor",
        "Value": "200gp",
        "Weight": "60",
        "AC": "17",
        "strength": "15",
        "stealth": "YES"
    },
    "Leather Armor": {
        "Name": "Leather Armor",
        "Value": "10gp",
        "Weight": "10",
        "AC": "11"
    },
    "Padded Armor": {
        "Name": "Padded Armor",
        "Value": "5gp",
        "Weight": "8",
        "AC": "11",
        "stealth": "YES"
    },
    "Studded Leather Armor": {
        "Name": "Studded Leather Armor",
        "Value": "45gp",
        "Weight": "13",
        "AC": "12"
    },
    "Battleaxe": {
        "Name": "Battleaxe",
        "Value": "10gp",
        "Weight": "4",
        "dmg1": "1d8",
        "dmg2": "1d10",
        "dmgType": "S",
        "property": "V"
    },
    "Club": {
        "Name": "Club",
        "Value": "1sp",
        "Weight": "2",
        "dmg1": "1d4",
        "dmgType": "B",
        "property": "L"
    },
    "Dagger": {
        "Name": "Dagger",
        "Value": "2gp",
        "Weight": "1",
        "dmg1": "1d4",
        "dmgType": "P",
        "property": "F,L,T",
        "range": "20/60"
    },
    "Flail": {
        "Name": "Flail",
        "Value": "10gp",
        "Weight": "2",
        "dmg1": "1d8",
        "dmgType": "B"
    },
    "Glaive": {
        "Name": "Glaive",
        "Value": "20gp",
        "Weight": "6",
        "dmg1": "1d10",
        "dmgType": "S",
        "property": "H,R,2H"
    },
    "Greataxe": {
        "Name": "Greataxe",
        "Value": "30gp",
        "Weight": "7",
        "dmg1": "1d12",
        "dmgType": "S",
        "property": "H,2H"
    },
    "Greatclub": {
        "Name": "Greatclub",
        "Value": "2sp",
        "Weight": "10",
        "dmg1": "1d8",
        "dmgType": "B",
        "property": "2H"
    },
    "Greatsword": {
        "Name": "Greatsword",
        "Value": "50gp",
        "Weight": "6",
        "dmg1": "2d6",
        "dmgType": "S",
        "property": "H,2H"
    },
    "Halberd": {
        "Name": "Halberd",
        "Value": "20gp",
        "Weight": "6",
        "dmg1": "1d10",
        "dmgType": "S",
        "property": "H,R,2H"
    },
    "Handaxe": {
        "Name": "Handaxe",
        "Value": "5gp",
        "Weight": "2",
        "dmg1": "1d6",
        "dmgType": "S",
        "property": "L,T",
        "range": "20/60"
    },
    "Javelin": {
        "Name": "Javelin",
        "Value": "2sp",
        "Weight": "2",
        "dmg1": "1d6",
        "dmgType": "P",
        "property": "T",
        "range": "30/120"
    },
    "Lance": {
        "Name": "Lance",
        "Value": "10gp",
        "Weight": "6",
        "dmg1": "1d12",
        "dmgType": "P",
        "property": "R,S"
    },
    "Light Hammer": {
        "Name": "Light Hammer",
        "Value": "2gp",
        "Weight": "2",
        "dmg1": "1d4",
        "dmgType": "B",
        "property": "L,T",
        "range": "20/60"
    },
    "Longsword": {
        "Name": "Longsword",
        "Value": "15gp",
        "Weight": "3",
        "dmg1": "1d8",
        "dmg2": "1d10",
        "dmgType": "S",
        "property": "V"
    },
    "Mace": {
        "Name": "Mace",
        "Value": "5gp",
        "Weight": "4",
        "dmg1": "1d6",
        "dmgType": "B"
    },
    "Maul": {
        "Name": "Maul",
        "Value": "10gp",
        "Weight": "10",
        "dmg1": "2d6",
        "dmgType": "B",
        "property": "H,2H"
    },
    "Morningstar": {
        "Name": "Morningstar",
        "Value": "15gp",
        "Weight": "4",
        "dmg1": "1d8",
        "dmgType": "P"
    },
    "Pike": {
        "Name": "Pike",
        "Value": "5gp",
        "Weight": "18",
        "dmg1": "1d10",
        "dmgType": "P",
        "property": "H,R,2H"
    },
    "Quarterstaff": {
        "Name": "Quarterstaff",
        "Value": "2sp",
        "Weight": "4",
        "dmg1": "1d6",
        "dmg2": "1d8",
        "dmgType": "B",
        "property": "V"
    },
    "Rapier": {
        "Name": "Rapier",
        "Value": "25gp",
        "Weight": "2",
        "dmg1": "1d8",
        "dmgType": "P",
        "property": "F"
    },
    "Scimitar": {
        "Name": "Scimitar",
        "Value": "25gp",
        "Weight": "3",
        "dmg1": "1d6",
        "dmgType": "S",
        "property": "F,L"
    },
    "Shortsword": {
        "Name": "Shortsword",
        "Value": "10gp",
        "Weight": "2",
        "dmg1": "1d6",
        "dmgType": "P",
        "property": "F,L"
    },
    "Sickle": {
        "Name": "Sickle",
        "Value": "1gp",
        "Weight": "2",
        "dmg1": "1d4",
        "dmgType": "S",
        "property": "L"
    },
    "Spear": {
        "Name": "Spear",
        "Value": "1gp",
        "Weight": "3",
        "dmg1": "1d6",
        "dmg2": "1d8",
        "dmgType": "P",
        "property": "T,V",
        "range": "20/60"
    },
    "Trident": {
        "Name": "Trident",
        "Value": "5gp",
        "Weight": "4",
        "dmg1": "1d6",
        "dmg2": "1d8",
        "dmgType": "P",
        "property": "T,V",
        "range": "20/60"
    },
    "War Pick": {
        "Name": "War Pick",
        "Value": "5gp",
        "Weight": "2",
        "dmg1": "1d8",
        "dmgType": "P"
    },
    "Warhammer": {
        "Name": "Warhammer",
        "Value": "15gp",
        "Weight": "2",
        "dmg1": "1d8",
        "dmg2": "1d10",
        "dmgType": "B",
        "property": "V"
    },
    "Whip": {
        "Name": "Whip",
        "Value": "2gp",
        "Weight": "3",
        "dmg1": "1d4",
        "dmgType": "S",
        "property": "F,R"
    },
    "Breastplate": {
        "Name": "Breastplate",
        "Value": "400gp",
        "Weight": "20",
        "AC": "14"
    },
    "Chain Shirt": {
        "Name": "Chain Shirt",
        "Value": "50gp",
        "Weight": "20",
        "AC": "13"
    },
    "Half Plate": {
        "Name": "Half Plate",
        "Value": "750gp",
        "Weight": "40",
        "AC": "15",
        "stealth": "YES"
    },
    "Hide Armor": {
        "Name": "Hide Armor",
        "Value": "10gp",
        "Weight": "12",
        "AC": "12"
    },
    "Scale Mail": {
        "Name": "Scale Mail",
        "Value": "50gp",
        "Weight": "45",
        "AC": "14",
        "stealth": "YES"
    },
    "Blowgun": {
        "Name": "Blowgun",
        "Value": "10gp",
        "Weight": "1",
        "dmg1": "1",
        "dmgType": "P",
        "property": "A,LD",
        "range": "25/100"
    },
    "Dart": {
        "Name": "Dart",
        "Value": "5cp",
        "Weight": "0.25",
        "dmg1": "1d4",
        "dmgType": "P",
        "property": "F,T",
        "range": "20/60"
    },
    "Hand Crossbow": {
        "Name": "Hand Crossbow",
        "Value": "75gp",
        "Weight": "3",
        "dmg1": "1d6",
        "dmgType": "P",
        "property": "A,L,LD",
        "range": "30/120"
    },
    "Heavy Crossbow": {
        "Name": "Heavy Crossbow",
        "Value": "50gp",
        "Weight": "18",
        "dmg1": "1d10",
        "dmgType": "P",
        "property": "A,H,LD,2H",
        "range": "100/400"
    },
    "Light Crossbow": {
        "Name": "Light Crossbow",
        "Value": "25gp",
        "Weight": "5",
        "dmg1": "1d8",
        "dmgType": "P",
        "property": "A,LD,2H",
        "range": "80/320"
    },
    "Longbow": {
        "Name": "Longbow",
        "Value": "50gp",
        "Weight": "2",
        "dmg1": "1d8",
        "dmgType": "P",
        "property": "A,H,2H",
        "range": "150/600"
    },
    "Net": {
        "Name": "Net",
        "Value": "1gp",
        "Weight": "3",
        "property": "S,T",
        "range": "5/15"
    },
    "Shortbow": {
        "Name": "Shortbow",
        "Value": "25gp",
        "Weight": "2",
        "dmg1": "1d6",
        "dmgType": "P",
        "property": "A,2H",
        "range": "80/320"
    },
    "Sling": {
        "Name": "Sling",
        "Value": "1sp",
        "dmg1": "1d4",
        "dmgType": "B",
        "property": "A",
        "range": "30/120"
    },
    "Shield": {
        "Name": "Shield",
        "Value": "10gp",
        "Weight": "6",
        "AC": "2"
    },
    "Assassin's Blood (Ingested)": {
        "Name": "Assassin's Blood (Ingested)",
        "Value": "150gp",
        "Weight": "0",
        "roll": "1d12"
    },
    "Burnt Othur Fumes (Inhaled)": {
        "Name": "Burnt Othur Fumes (Inhaled)",
        "Value": "500gp",
        "Weight": "0",
        "roll": ["3d6", "1d6"]
    },
    "Carrion Crawler Mucus (Contact)": {
        "Name": "Carrion Crawler Mucus (Contact)",
        "Value": "200gp",
        "Weight": "0"
    },
    "Drow Poison (Injury)": {
        "Name": "Drow Poison (Injury)",
        "Value": "200gp",
        "Weight": "0"
    },
    "Essence of Ether (Inhaled)": {
        "Name": "Essence of Ether (Inhaled)",
        "Value": "300gp",
        "Weight": "0"
    },
    "Malice (Inhaled)": {
        "Name": "Malice (Inhaled)",
        "Value": "250gp",
        "Weight": "0"
    },
    "Midnight Tears (Ingested)": {
        "Name": "Midnight Tears (Ingested)",
        "Value": "1500gp",
        "Weight": "0",
        "roll": "9d6"
    },
    "Oil of Taggit (Contact)": {
        "Name": "Oil of Taggit (Contact)",
        "Value": "400gp",
        "Weight": "0"
    },
    "Pale Tincture (Ingested)": {
        "Name": "Pale Tincture (Ingested)",
        "Value": "250gp",
        "Weight": "0",
        "roll": "1d6"
    },
    "Purple Worm Poison (Injury)": {
        "Name": "Purple Worm Poison (Injury)",
        "Value": "2000gp",
        "Weight": "0",
        "roll": "12d6"
    },
    "Serpent Venom (Injury)": {
        "Name": "Serpent Venom (Injury)",
        "Value": "200gp",
        "Weight": "0",
        "roll": "3d6"
    },
    "Torpor (Ingested)": {
        "Name": "Torpor (Ingested)",
        "Value": "600gp",
        "Weight": "0",
        "roll": "4d6"
    },
    "Truth Serum (Ingested)": {
        "Name": "Truth Serum (Ingested)",
        "Value": "150gp",
        "Weight": "0"
    },
    "Wyvern Poison (Injury)": {
        "Name": "Wyvern Poison (Injury)",
        "Value": "1200gp",
        "Weight": "0",
        "roll": "7d6"
    },
    "Trinket": {
        "Name": "Trinket",
        "Weight": "0",
        "roll": "1d100"
    },
    "Spiked Armor": {
        "Name": "Spiked Armor",
        "Value": "75gp",
        "Weight": "45",
        "AC": "14",
        "stealth": "YES"
    },
    "Monster Hunter's Pack": {
        "Name": "Monster Hunter's Pack",
        "Value": "33gp",
        "Weight": "48.5"
    }
}
    return Items;

});