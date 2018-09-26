// Object Data structure
var todolists = [
    {
        listName: "Todolist",
        todos: []
    },
    {
        listName: "Lol",
        todos: []
    }
]

//Store todos data
var todos = [];

//Set default value name of todolist
$(".todolist-name").val("Todolist");

todoActions();
listActions();

// *** Actions for TodoLists *** //
function listActions() {
    //Toggle todolist possible actions on clicking settings btn
    $(".todolist-settings").on("click", function() {
        $(".todolist-settings-content").toggleClass("hide");
    });
    //Hide dropdown list settings content when user click outside of it
    $(window).click(function(e) {
        if (!e.target.matches(".todolist-settings")) {
            $(".todolist-settings-content").addClass("hide");
        }
    });
    renameList();
}

function renameList() {
    //Enable todolist input and focus on it
    $(".todolist-rename").on("click", function() {
        $(".todolist-name").removeAttr("disabled");
        $(".todolist-name").focus();
    });
    //Pressing enter saves renamed totolist by disabling input area
    $(".todolist-name").on("keypress", function(e) {
        //Press enter to disable input
        if (e.which === 13) {
            //Prevent input text from submitting form
            e.preventDefault();
            $(this).attr("disabled", "disabled");
        }
    });
    //Disable input when text unfocused
    $(".todolist-name").focusout(function() {
        $(this).attr("disabled", "disabled");
    });
}

// *** Actions for Todos *** //
function todoActions() {
    addTodo();
    sortTodo()
    doneTodo();
    renameTodo();
    removeTodo();
} 

function sortTodo() {
    $(".todos-container").sortable();
}

function addTodo() {
//Get user todo input and store it in todos array
    $(".todos-input").on("keypress", function(e) {
        if (e.which === 13) {
            //Prevent input text from submitting form
            e.preventDefault();
            //Store todo and creates DOM element if not empty
            while ($(this).val() !== "") {
                todos.unshift($(this).val());
                $(".todos-container").prepend(
                    "<div class='todo'><input type='checkbox'>" +
                    "<label>" + $(this).val() + "</label>" + 
                    "<i class='fas fa-edit'></i>" + 
                    "<i class='fas fa-trash-alt'></i></div>");
                $(".todos-container label").addClass("todo-text");
                $(".fa-edit").addClass("todo-edit");
                $(".fa-trash-alt").addClass("todo-delete");
                $(this).val("");
            }
        }
    });
}

function renameTodo() {
    var inputHtml = "<input type='text' class='todo-text'>";
    //Change DOM elem to input tag on clicking edit btn
    $(".todos-container").on("click", ".todo-edit", function() {
        var todoTxt = $(this).siblings(".todo-text");
        var txt = todoTxt.text();
        console.log($(todoTxt).prop("tagName"));
        // Check if it's already a done todo
            if (todoTxt.hasClass("done")) {
                $(todoTxt).replaceWith(inputHtml)
                $("input.todo-text").addClass("done");
                // Remove the line through for visibilty upon renaming
                $("input.todo-text").css("text-decoration-line", "none");
            } else {
                $(todoTxt).replaceWith(inputHtml);
            }
            $("input.todo-text").focus();
            $("input.todo-text").val(txt);
    });
    //Save data on input blur and switch back to a label tag
    $(".todos-container").on("blur", "input.todo-text", function() {
        if ($(this).val() !== "") {
            $(this).removeAttr("style");
            var todoIndex = $(this).parent().index();
            todos[todoIndex] = $(this).val();
            if ($(this).hasClass("done")) {
                $(this).replaceWith("<label class='todo-text done'>" + $(this).val() + "</label>");
            } else {
                $(this).replaceWith("<label class='todo-text'>" + $(this).val() + "</label>");
            }
            console.log(todos);
        }
    });
    //Pressing enter saves todo and get back to a label tag by trigerring blur
    $(".todos-container").on("keypress", "input.todo-text", function(e) {
        if (e.which === 13) {
            e.preventDefault();
            if ($(this).val() !== "") {
                $(this).trigger("blur");
            }
        }
    });
}

function removeTodo() {
    $(".todos-container").on("click", ".todo-delete", function() {
        //Select and store the current todo 
        var todo = $(this).parent();
        //Remove the todo & its data
        todos.splice(todo.index(), 1);
        todo.remove();
    });
}

function doneTodo() {
    $(".todos-container").on("click", "input[type=checkbox]", function() {
        //Store todo text only
        var todoTxt = $(this).siblings(".todo-text");
        if ($(this).prop("checked") !== false) {
            //Add a line through to the text of todo
            todoTxt.addClass("done");
        } else {
            //Remove line through to the text of todo
            todoTxt.removeClass("done");
        }
    });
}


// TODO: TodoListApp Features:

// Create Todolist Data structure

// Create DOM elements on Side menu

//Drag & Drop Todos
    // While drag, move div on y axis
    // On drop, store Y position data
    // Check position data relatively to other todos
    // If this y position = todo position , then this.insertAfter("todo");
    // If this y poistion = !todo, then this.insertAfter("last-todo");

// Add a TodoList
    // Add data 

// Delete a Todolist 
    // When Todolist todolist-delete clicked
    // Display a customed alert message
    // Delete the current Todolist in data
    // Delete DOM elements 
    // switchTodolist() to the next Todolist in Data 

// Switch between Todolists
    // When Todolist is clicked 
    // switchTodolist() to clicked Todolist

// switchTodolist(currentTodolist, nextTodolist)
    // Delete current Todolist DOM elements
    // Get data from Todolists
    // Create corresponding DOM Elements

// Change todoList Icon

// Change General Theme

// Add a todo [Done]
// Remove a Todo [Done]
// Rename a Todo List [Done]

// Rename a Todo [Done]
    // Switch from label to input [DONE]
    // Pass in label value to input value [DONE]
    // VICE VERSA [DONE]
    // Prevent from reset of code [DONE]
