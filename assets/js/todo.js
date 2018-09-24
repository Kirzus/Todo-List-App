// var list = {
//     listName: "",
//     todos: []
// }
// var defaultList {
//     listName: "Give me a name"
// }

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

var todos = [];

// var currentList = defaultList;

//Set default value
$(".todolist-name").val("Todolist");

//
$(".todolist-settings").on("click", function() {
    $(".todolist-settings-content").toggleClass("hide");
});

//Hide dropdown content when click outside of it
$(window).click(function(e) {
    if (!e.target.matches(".todolist-settings")) {
        $(".todolist-settings-content").addClass("hide");
    }
});

$(".todolist-rename").on("click", function() {
    $(".todolist-name").removeAttr("disabled");
    $(".todolist-name").focus();
});

$(".todolist-name").on("keypress", function(e) {
    //Press enter to disable input
    if (e.which === 13) {
        //Prevent input text from submitting form
        e.preventDefault();
        $(this).attr("disabled", "disabled");
    }
});
//Disable input when not text unfocused
$(".todolist-name").focusout(function() {
    $(this).attr("disabled", "disabled");
})

todoActions();

function todoActions() {
    addTodo();
    doneTodo();
    renameTodo();
    removeTodo();
} 

function addTodo() {
//Get user todo input and store it in todos array
    $(".todos-input").on("keypress", function(e) {
        if (e.which === 13) {
            //Prevent input text from submitting form
            e.preventDefault();
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
    //Outside flag to check on first click
    var open = false;
    //Switch to input tag on clicking edit btn
    $(".todos-container").on("click", ".todo-edit", function() {
        open = !open;
        if (open) {
            var todoTxt = $(this).siblings(".todo-text");
            var txt = todoTxt.text();
            $(todoTxt).replaceWith("<input type='text' class='todo-text'>")
            $("input.todo-text").focus();
            $("input.todo-text").val(txt);
        }
    });
    //Save data on input blur and switch back to a label
    $(".todos-container").on("blur", "input.todo-text", function() {
        if ($(this).val() !== "") {
            var todoIndex = $(this).parent().index();
            todos[todoIndex] = $(this).val();
            $(this).replaceWith("<label class='todo-text'>" + $(this).val() + "</label>");
            console.log(todos);
        }
    });
    //When renaming save todo and get back to a label
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

// Rename a Todo [Done]
    // Switch from label to input [DONE]
    // Pass in label value to input value [DONE]
    // VICE VERSA [DONE]
    // Prevent from reset of code [DONE]

// Create DOM elements on Side menu
// Create Todolist Data structure

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

