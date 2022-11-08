let input = document.querySelector("#input-field");

function editTodo(event){
    let editButtonClicked = event.target
    let li = editButtonClicked.parentNode.parentNode;
    let child = li.childNodes[2].innerHTML
    alert(child);
    input.value = child;
    let newbtn = document.createElement("button");
    newbtn.innerHTML = `<button class="  btn btn-primary">Edit Task</button>`;
    newbtn.classList.add("doneBtn")
    li.append(newbtn);
    editButtonClicked.disabled = true;
    newbtn.addEventListener("click", doThis)
    function doThis(){
    let spanny = li.childNodes[2]
    spanny.innerHTML = input.value
    console.log(spanny.innerHTML)
    input.value = ""
    editButtonClicked.disabled = false
    newbtn.remove()

}
   
    }


function deleteTodo(eventobject){
    let ask = prompt("are you sure you want to delete?");
    if(ask === "yes"){
        let btnclicked = eventobject.target;
        let li= btnclicked.parentNode.parentNode;
         li.remove();
         alert("deleted!")
    }

    else{
        alert("respond with a Yes or No")
    }
   
    
}


function DeleteButton(){
    const allDeleteButtons = document.querySelectorAll(".deleteButton");
    console.log(allDeleteButtons);
    const lastBtn = allDeleteButtons[allDeleteButtons.length - 1];
    lastBtn.addEventListener("click", deleteTodo );
}

function EditButton(){
    const allEditButtons = document.querySelectorAll(".editButton");
    console.log(allEditButtons);
    const lastButton = allEditButtons[allEditButtons.length - 1];
    lastButton.addEventListener("click", editTodo );  
}


function showNavigation(todo){
    const Navigationlist = document.querySelector("#navigation-list");

    const new__li =document.createElement("li");
    new__li.innerHTML = `
                 <li class="text-center">
                    <input type="checkbox" class="me-1"/><span>${todo}</span>

                    <button class =" editButton btn btn-primary">
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button class=" deleteButton btn btn-danger">
                    <i class="far fa-trash-alt"></i></button>
                </li>`

    Navigationlist.appendChild(new__li);
    new__li.classList.add("navigation-list-li");
    DeleteButton();
    EditButton();


}

// localStorage.setItem("name", "Chris");
    
// let myName = localStorage.getItem("name");
// myName;

// localStorage.removeItem("name");
// myName = localStorage.getItem("name");
// myName;

function formHandler(event){
    event.preventDefault();
    const inputfield = document.querySelector("#input-field").value;

    showNavigation(inputfield);
    

}

const formdata = document.querySelector("#form");
formdata.addEventListener("submit", formHandler);
// DeleteButton();

    

