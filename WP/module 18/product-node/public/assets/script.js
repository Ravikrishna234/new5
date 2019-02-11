var data = require('../../controllers/productController');
function edit(i) {
    console.log(i);
    document.getElementById('form'+i).style.display = 'block';
    document.getElementById('details'+i).innerHTML = "hai";

    document.getElementById('form'+i).innerHTML = '<div>'+
    "Name:" +'<input id="name'+i+'" type="text" value="">'+ 
    "Quantity:"+ '<input id="quant'+i+'" type="number">'+
    '<button id="save<%=i+1%>" onclick="save('+i+')">'+"Save"+'</button>'+
    '</div>'
}

function save(i) {
    document.getElementById('title'+i).innerHTML = document.getElementById('name'+i).value;
    document.getElementById('quan'+i).innerHTML = document.getElementById('quant'+i).value;
    document.getElementById('form'+i).style.display = 'none'; 
}

// var data = require('../../controllers/productController');

console.log(data.maindata);
function delet(i) {
    
}