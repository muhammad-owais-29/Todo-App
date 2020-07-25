
var list = document.getElementById("list")

function addTodo(){
var todoItem = document.getElementById("todo-item")

// Create Li Tag With Text Node
var li = document.createElement('li')
var liText = document.createTextNode(todoItem.value)
li.appendChild(liText);


// Create Delete Button
var delBtn = document.createElement("button")
var deleteText = document.createTextNode("DELETE")
delBtn.setAttribute("class","btn1")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(deleteText)

// Create Edit Button
var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("id","btn2")
editBtn.setAttribute("onclick","editItem(this)")

li.appendChild(delBtn);
li.appendChild(editBtn)

list.appendChild(li)

todoItem.value = ""


}


function deleteItem(e){
e.parentNode.remove()

}

function deleteAll(){
    list.innerHTML = ""
    
    }


    function editItem(e){
        var val = prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
        e.parentNode.firstChild.nodeValue = val;
        }