// Getting elements from the HTML file and assigning them to respective variables
let addButton = document.getElementById("add_task");
let to_do = document.getElementById("typebox"); 
let MainTodoBox = document.getElementById("todomain_div");
let allTask = document.getElementById("allTasks")
let completedTask = document.getElementById("completedTasks")
let pendingTask = document.getElementById("pendingTasks")
let clearAllButton = document.getElementById("clearAll")

clearAllButton.style.display = "none";
// Creating a function for the Add task button
addButton.addEventListener("click", function(){
    
    let enterTodo= to_do.value.trim();
    // This condition checks to see if the Enter task/input section of the code is empty
    if (enterTodo === "") {
        alert("Task is empty. Add Task!");
        return; }

    clearAllButton.style.display = "block"; //displays clear all button once a task is added

    let toDoItem = document.createElement("li");    
    let timestamp = new Date().toLocaleString();
    toDoItem.innerHTML = `<strong>${enterTodo}</strong>  <br> <small> <b>Added on: </b> <br><p> ${timestamp}</p></small>`
 
    // Creating and styling the Complete button
    let complete_button = document.createElement("button");
    complete_button.style.backgroundColor = "green"
    complete_button.innerText = "Complete";
    
    //adding onclick event listener to the Complete button
    complete_button.addEventListener("click", function(){
        toDoItem.style.textDecoration = "line-through" ;
        toDoItem.style.textDecorationThickness = "3px" ;
        ToDoHolder.style.backgroundColor = "#96ebbcda" ;
        undo_button.style.display = "block";
        complete_button.style.display = "none";
    })
    
    // adding hover effect to complete button
    complete_button.addEventListener("mouseenter", function(){
        complete_button.style.backgroundColor = "darkgreen"
    })
    complete_button.addEventListener("mouseleave", function(){
        complete_button.style.backgroundColor = "green"
    })

    // Creating and styling the Delete button
    let delete_button = document.createElement("button");
    delete_button.innerText = "Delete";
    delete_button.style.backgroundColor = "red"

    //adding onclick event listener to the delete button
    delete_button.addEventListener("click", function(){
        MainTodoBox.removeChild(ToDoHolder);
        checkTaskLength();
        complete_button.style.display = "none";
    })

    // adding hover effect to drlete button
    delete_button.addEventListener("mouseenter", function(){
        delete_button.style.backgroundColor = "darkred"
    })

    delete_button.addEventListener("mouseleave", function(){
        delete_button.style.backgroundColor = "red"
    })

    // Creating and styling the Undo button
    let undo_button = document.createElement("button");
    undo_button.innerText = "Undo";
    undo_button.style.backgroundColor = "green";
    undo_button.style.display = "none";

    //adding onclick event listener to the undo button
    undo_button.addEventListener("click", () => {
        complete_button.style.display = "block";
        undo_button.style.display = "none";
        toDoItem.style.textDecoration = "none";
        ToDoHolder.style.backgroundColor = "transparent"
        sortTasks();
    })
        
    // Creating a div and adding class for the To-do item holder(space)
    let ToDoHolder = document.createElement("div");
    ToDoHolder.classList.add("to-do-holder");
        
    // Appending To-do items(Tasks) and other functional buttons to the div created above
    ToDoHolder.appendChild(toDoItem);
    ToDoHolder.appendChild(complete_button);
    ToDoHolder.appendChild(undo_button);
    ToDoHolder.appendChild(delete_button);

    MainTodoBox.appendChild(ToDoHolder);

    to_do.value =""
})


function checkTaskLength(){
    if  (MainTodoBox.children.length === 0) {
        clearAllButton.style.display = "none";
    }
    else {
        clearAllButton.style.display = "block";
    }
}

clearAllButton.addEventListener("click", function(){
    let confirmDelete = confirm("Delete All? This cannot be undone");
    if (confirmDelete){
        MainTodoBox.innerHTML = "";
        checkTaskLength();

}})
