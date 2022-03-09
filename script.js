const addBotton = document.getElementById("btn")
const delBotton = document.getElementById("btn2")
const userInput = document.getElementById("inp")
const ulist = document.getElementById("list")

class TodoManeger{
    constructor(task){
        this.task = task
    }
    userToDos=[]
    addToArray(){
        this.userToDos.push(this.task);
        ulist.innerHTML = ""

        for (let i = 0; i < this.userToDos.length; i++) {
        ulist.innerHTML += `<li>${this.userToDos[i]}</li>`
        }

    }
    removeFromArray(){
        this.userToDos.pop()
    }
}

const user = new TodoManeger()

addBotton.addEventListener("click", user.addToArray())

console.log(user.userToDos);


/*addBotton.addEventListener("click", ()=>{
    userArray.push(userInput.value)
    ulist.innerHTML = ""
    for (let i = 0; i < userArray.length; i++) {
        ulist.innerHTML += `<li>${userArray[i]}</li>`
    }    
})  

console.log(userArray);*/