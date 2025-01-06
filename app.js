// const input = document.querySelector("#inptut")

// function addTodo

let fruits = ["Mango" , "Orange" , "Banana"]
const ol = document.querySelector(".list")

for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
    ol.innerHTML += `<li>${fruits[i]}</li>`
}