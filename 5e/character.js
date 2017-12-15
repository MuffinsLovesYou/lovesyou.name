define([
    '5e/items'
    ,'5e/skills'
    ,'5e/spells'
], (Items,Skills,Spells) => {

    // Eventually this may get migrated to its own file.
    function Class(name, level, archetype) {
        let Classes = {
            'Barbarian': { HD: 12 },
            'Bard': { HD: 8 },
            'Cleric': { HD: 8 },
            'Druid': { HD: 8 },
            'Fighter': { HD: 10 },
            'Monk': { HD: 8 },
            'Paladin': { HD: 10 },
            'Ranger': { HD: 10 },
            'Rogue': { HD: 8 },
            'Sorcerer': { HD: 6 },
            'Warlock': { HD: 8 },
            'Wizard': { HD: 6 }
        }

        let gameclass = this;

        gameclass.Name = name;
        gameclass.Level = parseInt(level) || 1;
        gameclass.HD = Classes[name].HD;
        gameclass.Archetype = archetype || '';
        return this;
    }

    // Is this the most elegant way to do this?
    Number.prototype.Bonus = function () {
        return Math.floor((this - 10) / 2);
    }

    var Character = function () {
        let char = this;

        char.Name = '';
        char.Race = '';
        /* usage: char.Classes.Add('Paladin', 4)  */
        char._classes = [];
        char.Classes = {};
        char.Classes.Add = (name, level) => {
            char._classes.push(name);
            let new_class = new Class(name, level);
            char.Classes[name] = new_class;
        }
        Object.defineProperty(char, 'ClassName', {
            get : function(){
                let className = '';
                char._classes.forEach((c,i)=>{
                    if(i>0){ className+='/'; }
                    className+=c + ' ' + char.Classes[c].Level
                });
                return className;
            }   
        });

        char.Background = '';
        char.XP = 0;
        char.Archetype = '';

        char.Stats = {
            Strength: 10,
            Dexterity: 10,
            Constitution: 10,
            Intelligence: 10,
            Wisdom: 10,
            Charisma: 10
        }
        Object.defineProperty(char, 'Carry_Weight', {
            enumerable : true,
            get : function() {
                return char.Stats.Strength * 15;
            }
        });
        
        
        /* returns the sum of the character's class-levels */
        Object.defineProperty(char, 'Level', {
            enumerable: true,
            get: function () {
                let returnValue = 0;
                for (let l in char.Classes) {
                    let _class = char.Classes[l];
                    if (typeof (_class) != 'object') {
                        continue;
                    }
                    returnValue += _class.Level || 0;
                }
                return returnValue;
            }
        });

        Object.defineProperty(char, 'Proficiency', {
            enumerable: true,
            get: function () {
                let level = char.Level;
                return Math.ceil((level / 4) + 1);
            }
        });

        char._extra_hp = 0;
        Object.defineProperty(char, 'HP', {
            enumerable: true,
            get: function () {
                let hp = 0;
                char._classes.forEach((c, i)=>{
                    let _class = char.Classes[c];
                    hp += _class.Level * ((_class.HD/2)+1);
                    if(i===0){ hp+=((_class.HD/2)-1); }
                });
                hp += char.Stats.Constitution.Bonus() * char.Level;
                hp += char._extra_hp;
                return hp;
            }
        });


        let Save = function (stat) {
            let save = this;
            save.Trained = false;
            save.Stat = stat;
            Object.defineProperty(save, 'Bonus', {
                get: function () {
                    let saveBonus = char.Stats[stat].Bonus();
                    if (save.Trained) {
                        saveBonus += char.Proficiency;
                    }
                    return saveBonus;
                }
            });
        }

        char.Saves = {};
        char.Saves['Strength'] = new Save('Strength');
        char.Saves['Dexterity'] = new Save('Dexterity');
        char.Saves['Constitution'] = new Save('Constitution');
        char.Saves['Intelligence'] = new Save('Intelligence');
        char.Saves['Wisdom'] = new Save('Wisdom');
        char.Saves['Charisma'] = new Save('Charisma');

        char.AC = 0;

        char.Personality = {
            Trait: '',
            Ideal: '',
            Bond: '',
            Flaw: '',
            Description: '',
            isEmpty : function(){
                return (this.Trait+this.Ideal+this.Bond+this.Flaw+this.Description).length === 0;
            }
        }

        Skills.map(char);
     
        // keeping this primitive for now
        char.Features = [];

        
        char.Spells = {};
        char.Spells.Add = (name) => {
            char.Spells[name] = Spells[name]
            char.Spells.length++;
        }
        char.Spells.length = 0;

        char.Items = {}
        char.Items.Add = (name, count, weight) => {
            count = count || 1;
            if(!Items[name])
                return console.log(name+ ' not found in items database.');
            let item = JSON.parse(JSON.stringify(Items[name]));
            item.Count = count;

            item.base_weight = item.Weight || 0;
            item.Weight = Math.floor(((item.base_weight * count) * 10)) / 10;
            char.Items.length++;
            char.Items[name] = item;
        }
        char.Items.length = 0;
        
    }
    return Character;
});