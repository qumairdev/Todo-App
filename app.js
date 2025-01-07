// const ol = document.querySelector(".list")
// const input = document.querySelector("#input")
// const arr = []

// function addTodo(){
//     console.log(input.value);
//     input.value = ""
//     arr.push (input.values)
    

//     for (let i = 1 ;i < arr.length ; i++){
//         ol.innerHTML += `<li>${arr[i]}</li>`
//         console.log(arr)
//     }
    
// }












function renderTodo() {
    ol.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `
        <li> ${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>
        `
    }
}









const todoInput = document.querySelector("#input");
const ol = document.querySelector("ol");

const arr = [];

function addTodo() {
    arr.push(todoInput.value);
    renderTodo()
    todoInput.value = ""
}



function deleteTodo(index) {
    console.log("todo deleted" , index);
    arr.splice(index, 1);
    renderTodo()
}

function editTodo(index) {
    console.log("todo edited" , index);
    
    const updatedVal = prompt("enter updated value");
    arr.splice(index , 1 , updatedVal);
    renderTodo()
}