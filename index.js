
function editTodo(e){
    let btnclicked = eventobject.target;
   let li= btnclicked.parentNode;
    let forminput = li.querySelector("#input-field");
    let label=li.querySelector("span");
    containsClass=li.classList.add("editMode");
    if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=forminput.value;
		}else{
			forminput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}


    // alert("i am editing")
    // let edit = e.target;
    // let selectedTask = e.parentElement.parentElement;
    // edit.value = selectedTask.children[0].innerHTML;
    // deleteTodo(e);


function deleteTodo(eventobject){
    let btnclicked = eventobject.target;
   let li= btnclicked.parentNode;
    li.remove();
    // confirm("are you sure yo want to delete?")
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

                    <button class =" editButton btn btn-primary">Edit</button>

                    <button class=" deleteButton btn btn-danger">Delete</button>
                </li>`

    Navigationlist.appendChild(new__li);
    new__li.classList.add("navigation-list-li");
    DeleteButton();
    EditButton()


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

    

