define([
    'lite'
    ,'scripts/vendor/chai'
], function(Lite, chai){
    let assert = chai.assert;

    describe('Lite Templating Engine Tests', function(){
     
       describe('Extensibility', function(){
           it('Extends the base object with provided arguments', function(){
                let lite = Lite.extend({
                    hello : 'world'
                });
                lite = new lite();
                assert.isTrue(lite.hello === 'world');
           });

       })

       describe('Initialization', function(){
           it('Executes parameterized initialize function', function() {
                let t = '';
                let lite = Lite.extend({
                    initialize : function() {
                        t = 'test';
                    }
                })
                lite = new lite();
                assert.isTrue(t === 'test');
           });
       })

       describe('Content Loading', function(){
           it('Loads content via xhr request if content_url is provided', function(done){
               let lite = Lite.extend({
                   content_url : 'site/tests/lite_test.js'
                   , onContentLoaded : function(data) {
                       assert.isTrue(data.length > 1);
                       done();
                   }
               });
               new lite().attach(document.createElement('div'));;
           })
       });

       describe('Data Loading', function(){
           it('Loads data if data_url is provided', function(done){
               let lite = Lite.extend({
                   data_url : 'site/tests/lite_test.js'
                   ,onDataLoaded : function(data) {
                       done();
                   }
               });
               new lite().attach(document.createElement('div'));
           });
           it('Appends a .js file to the header if .data_url is provided and has .js extension');
           it('Loads data via xhr if .data_url is provided and does not have a .js extension');
           it('Calls onDataLoaded if .data is defined')

       })

       describe('Attaching', function(){
           it('Binds content on attach')
           it('Binds data on attach')

           it('Loads both content and data before binding')


       });


    });
});