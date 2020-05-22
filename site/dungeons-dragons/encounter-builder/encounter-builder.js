import { lite } from '../../../scripts/homerolled/lite.js';
import { EncounterBuilder } from '../../../scripts/homerolled/encounterBuilder.js';
import { Gridify } from '../../../scripts/homerolled/gridify.js';

/* TODO: cleanup and styling: 
    Table styles. 
    Input styles 
        fixed width left 
    give character levels alternative input (x chars of y level)
*/

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/encounter-builder/encounter-builder.html',
    onContentBound : function() { 
        let vm = this;

        vm.loadStyleSheet('site/dungeons-dragons/encounter-builder/encounter-builder.css');
        vm.setUI();
        vm.populateCRDropDowns();
        vm.initializeBuilder();
        vm.setEventListeners();
    },
    setUI : function() { 
        let vm = this;
        vm.ui = {};
        let elements = ['characters', 'difficulty', 'crMin', 'crMax', 'monsterCountMin', 'monsterCountMax'];
        elements.forEach(e => {
            vm.ui[e] = document.getElementById(e); 
        });
    },
    initializeBuilder : function() {
        let vm = this;
        vm.encounterBuilder = new EncounterBuilder();
        vm.builderArgs = vm.EncounterBuilderArgs();
        vm.setArgDefaults();
    },
    EncounterBuilderArgs : function() {
        let builderArgs = {
            players : [],
            difficulty : '',
            crRange : { min : 0, max : 0 },
            monsterCountRange : { min : 0, max : 0 },

            setCharacters : function(value) {
                builderArgs.players = value
                    .split(',')
                    .map(c => { return { level : +c||0 } });
            },
            setDifficulty : function(value) {
                builderArgs.difficulty = value;
            },
            setCRMin : function(value) { 
                builderArgs.crRange.min = +value;
            },
            setCRMax : function(value) { 
                builderArgs.crRange.max = +value;
            },
            setCountMin : function(value) { 
                builderArgs.monsterCountRange.min = +value;
            },
            setCountMax : function(value) { 
                builderArgs.monsterCountRange.max = +value;
            }
        }
        return builderArgs;
    },
    setArgDefaults : function () { 
        let vm = this;
        vm.builderArgs.setCharacters(vm.ui.characters.value);
        vm.builderArgs.setDifficulty(vm.ui.difficulty.value);
        vm.builderArgs.setCRMin(vm.ui.crMin.value);
        vm.builderArgs.setCRMax(vm.ui.crMax.value);
        vm.builderArgs.setCountMin(vm.ui.monsterCountMin.value);
        vm.builderArgs.setCountMax(vm.ui.monsterCountMax.value);
        
    },
    populateCRDropDowns : function() { 
        let vm = this;
        vm.populateCRSelect(vm.ui.crMin, 1);
        vm.populateCRSelect(vm.ui.crMax, 5);
    },
    populateCRSelect : function (select, defaultValue = 1) { 
        let createOption = function(innerText, value) {
            let option = document.createElement('option');
            option.innerText = innerText; 
            option.value = value;
            if(value === defaultValue) {
                option.selected = true;
            }
            select.appendChild(option);
        }

        createOption('0', 0);
        createOption('1/8', .135);
        createOption('1/4', .25);
        createOption('1/2', .5);
        for(let i = 1; i <= 30; i++) { 
            createOption(i, i);
        }
    },
    patterns : {
        notNumbers : /[^\d]/g,
        notNumberList : /[^\d,\s]/g
    },
    removeCharacters : function(event, rgx) { 
        event.target.value = event.target.value.replace(rgx, '');
    },
    setEventListeners : function() {
        let vm = this;
        vm.ui.characters.addEventListener('keyup', (e) => {
            vm.removeCharacters(e, vm.patterns.notNumberList);
            vm.builderArgs.setCharacters(e.target.value);
            vm.generateEncounter();
        });

        vm.ui.difficulty.addEventListener('change', (e) => {
            vm.builderArgs.setDifficulty(e.target.value);
            vm.generateEncounter();
        });

        vm.ui.crMin.addEventListener('change', (e) => { 
            vm.builderArgs.setCRMin(e.target.value);
            vm.generateEncounter();
        });

        vm.ui.crMax.addEventListener('change', (e) => { 
            vm.builderArgs.setCRMax(e.target.value);
            vm.generateEncounter();
        });

        vm.ui.monsterCountMin.addEventListener('keyup', (e) => { 
            vm.removeCharacters(e, vm.patterns.notNumbers);
            vm.builderArgs.setCountMin(e.target.value);
            vm.generateEncounter();    
        });

        vm.ui.monsterCountMax.addEventListener('keyup', (e) => { 
            vm.removeCharacters(e, vm.patterns.notNumbers);
            vm.builderArgs.setCountMax(e.target.value);
            vm.generateEncounter();
        });
    },
    generateEncounter : function() { 
        let vm = this;
        let encounters = vm.encounterBuilder.getEncounters(vm.builderArgs);
        encounters = vm.prepareOutput(encounters);
        vm.writeOutput(encounters);        
    },
    prepareOutput : function(encounters) { 
        encounters.forEach(encounter => { 
            // Get a count of how many times each CR occurs
            let crs = {}
            encounter.crs.forEach(cr => { 
                crs[cr] = crs[cr] ? crs[cr]+1 : 1;
            });
            // Prepare them as display strings
            let crsStrings = [];
            for(let cr in crs) {
                crsStrings.push('CR' + cr + ' x' + crs[cr]);
            }
            // Sort them and join them to a single string
            encounter.crsString = crsStrings
                .sort((a, b) => a <= b)
                .join(', ');
        });

        return encounters;
    },
    writeOutput : function(encounters) { 
        let grid = new Gridify('encounter-output-table');
        let numberSort = function(a, b) { return +a >= +b ? 1 : -1 };

        grid.initialize({
            data : encounters,
            columns : [
                { field : 'count', header : '# Monsters', filter : true, sort : numberSort }
                , { field : 'xpCost', header : 'XP Cost', filter : true, sort : numberSort }
                , { field : 'crsString', header : 'Challenge Ratings', filter : true, sort : true }
            ], 
            paging : true
        });
    }
});

