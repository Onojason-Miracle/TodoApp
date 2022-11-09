let input = document.querySelector
("#input-field");




function editTodo(event){

    let editbtn = event.target;
    let list_item = editbtn.parentNode.parentNode;
    let list_item_child = list_item.childNodes[2].innerHTML;
    input.value = list_item_child;
    let newbtn = document.createElement("button");
    newbtn.innerHTML = `<button class="  btn btn-primary">Edit Task</button>`;
    newbtn.classList.add("doneBtn")
    list_item.append(newbtn);
    editbtn.disabled = true;
    newbtn.addEventListener("click", doThis)
    function doThis(){
    let span = list_item.childNodes[2]
    span.innerHTML = input.value
    console.log(span.innerHTML)
    input.value = ""
    editbtn.disabled = false
    newbtn.remove()

}
   
    }


function deleteTodo(eventobject){
    let ask = confirm("are you sure you want to delete?");
    if(ask === true){
        let btnclicked = eventobject.target;
        let li= btnclicked.parentNode.parentNode;
         li.remove();
         
    }

    else{
        alert("Not Deleted")
    }
   
    
}

function check(){
    const allcheckbox = document.querySelectorAll(".checkbox");
    console.log(allcheckbox);
    const checkbox = allcheckbox[allcheckbox.length - 1];
    checkbox.addEventListener("change", function(){
        if(this.checked){
    
    let hello = document.querySelector(".list_item");
    let mimie =hello.childNodes[2].innerHTML;
   
    mimie.classList.toggle("checkboxline ");
    
        }
    })  
}


function DeleteEdit(){
    const allDeleteButtons = document.querySelectorAll(".deleteButton");
    // console.log(allDeleteButtons);
    const lastBtn = allDeleteButtons[allDeleteButtons.length - 1];
    lastBtn.addEventListener("click", deleteTodo );

    
    const allEditButtons = document.querySelectorAll(".editButton");
    // console.log(allEditButtons);
    const lastButton = allEditButtons[allEditButtons.length - 1];
    lastButton.addEventListener("click", editTodo );  

    
}


function showNavigation(todo){
    const Navigationlist = document.querySelector("#navigation-list");
    
    const new__li =document.createElement("li");
    new__li.innerHTML = `
                 <li class="text-center list_item">
                    <input type="checkbox" class="me-1 checkbox" id="checkbox"/><span class="todospan">${todo}</span>

                    <button class =" editButton btn btn-primary">
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button class=" deleteButton btn btn-danger">
                    <i class="far fa-trash-alt"></i></button>
                </li>`

                

    Navigationlist.appendChild(new__li);
    new__li.classList.add("navigation-list-li");
    
    DeleteEdit()
    check();


}


function formHandler(event){

    event.preventDefault();
    
    const inputfield = document.querySelector("#input-field").value;
   
    showNavigation(inputfield);
    

}



const formdata = document.querySelector("#form");
formdata.addEventListener("submit", formHandler);
  

