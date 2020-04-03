define([
    'lite'
    ,'scripts/homerolled/encounterBuilder'
], (lite, EncounterBuilder) => {

    return lite.extend({
        content_url : 'site/dungeons-dragons/encounter-builder/encounter-builder.html',
        onContentBound : function() { 
            let vm = this;

            vm.encounterBuilder = new EncounterBuilder();
            vm.builderArgs = vm.EncounterBuilderArgs();

            vm.populateCRDropDowns();

            // bind event listeners to UI controls 


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
        populateCRDropDowns : function() { 
            let vm = this;
            let crMin = document.getElementById('crMin');
            let crMax = document.getElementById('crMax');

            vm.populateCRSelect(crMin, 1);
            vm.populateCRSelect(crMax, 5);
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
        }
    });

});