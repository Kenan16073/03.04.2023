"use strict"



let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let rmv = document.getElementById('rmv');
let list = document.getElementById('list');
let dlt = document.getElementById('dlt')
let todo = [];


function add() {

    if (inp.value == "") {
        alert('Spaces cannot be added!')
    }
    else {
        todo.push(inp.value);
        inp.value = '';
        let data = '';

        for (let item of todo) {
    
            data += `<li class="list-group-item"> ${item} </li>`
            
        }
    
    
        list.innerHTML = data;
    }
}


function removeItems(){
    if (todo.length > 0) {
        todo.pop(todo[0]);
      }
    
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
      }
    
}




btn.addEventListener('click', add);
rmv.addEventListener('click', removeItems);
inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      add();
    }
    else if(event.key == "BackSpace"){
        removeItems();
    }
  });
