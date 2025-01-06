const ol = document.querySelector(".list")
const input = document.querySelector("#input")
const arr = []

function addTodo(){
    console.log(input.value);
    input.value = ""
    arr.push (input.values)
    

    for (let i = 1 ;i < arr.length ; i++){
        ol.innerHTML += `<li>${arr[i]}</li>`
        console.log(arr)
    }
    
}