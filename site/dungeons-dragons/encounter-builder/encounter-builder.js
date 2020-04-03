define([
    'lite'
    ,'scripts/homerolled/encounterBuilder'
], (lite, EncounterBuilder) => {

    return lite.extend({
        content_url : 'site/dungeons-dragons/encounter-builder/encounter-builder.html',
        onContentBound : function() { 
            let vm = this;

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
            console.log(vm.builderArgs)
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
                // generate encounter
            });
        }
    });

});