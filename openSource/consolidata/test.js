var cons = require('consolidate');
var Handlebars = require('handlebars');


Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})

cons.handlebars.render("hello {{loud name}}", {name: 'WoRld'}).then(res=>{
    console.log(res);
})