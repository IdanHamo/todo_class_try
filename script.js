const addBotton = document.getElementById("btn")
const delBotton = document.getElementById("btn2")
const userInput = document.getElementById("inp")
const ulist = document.getElementById("list")

class TodoManeger{
    userToDos=[]
    constructor(task){
        this.task = task
    }
    addToArray(){
        this.userToDos.push(this.task);
        ulist.innerHTML += `<li>${this.task}</li>`

    }
    removeFromArray(){
        this.userToDos.pop()
    }
}

const user = new TodoManeger()

addBotton.addEventListener("click", user.addToArray())

console.log(user.userToDos);
