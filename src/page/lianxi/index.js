var hogan = require('hogan.js');
var templateLianxi = require('./index.string')


var data = {
    names : 'hanmeimei',
    htmls: '<span color="red">Rosen</span>',
    lists: [
        { names: 'lily'},
        { names: 'lucy'}
    ],
    isRosen: false,
    listNull:[]
};

var templateIndex = hogan.compile(templateLianxi);
var result = templateIndex.render(data);
$('#moban').html(result);
console.log(result);