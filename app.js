var input = document.getElementById("inp")
var list = document.getElementById("list");
var todoList = [];

function add(){
    if (input.value == ""){
        return;
    }
     todoList.push(inp.value);
     inp.value = "";
    render();
}

function render(){
    list.innerHTML = "";
     for(var i = 0; i < todoList.length; i++){
        list.innerHTML += `<li> ${todoList[i]} <button id="btn" onclick="edit(${i})">Edit</button> <button id="btn" onclick="remove (${i})">Remove</button> </li>`
}
}
function edit(indexNum){
    todoList[indexNum] = prompt("Enter your new value")
      render();
}

function remove(indexNum){
    todoList.splice(indexNum, 1);
    render()
}
function clearList(){
   todoList = [];
   list.innerHTML = "";

}