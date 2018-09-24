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
console.log($(".todo-text").is(":focus"));

function renameTodo() {
    $(".todos-container").on("click", ".todo-edit", function() {
        // var focused = $(".todo-text").is(":focus");
        // console.log(focused);
        while ($("input.todo-text").is(":focus") === false) {
            var todoTxt = $(this).siblings(".todo-text");
            var txt = todoTxt.text();
            // console.log(txt);
            $(todoTxt).replaceWith("<input type='text' class='todo-text'>")
            $("input.todo-text").focus();
            $("input.todo-text").val(txt);
            console.log($("input.todo-text").is(":focus"));
        }
    });
    
    $(".todos-container").on("blur", "input.todo-text", function() {
        if ($(this).val() !== "") {
            var todoIndex = $(this).parent().index();
            todos[todoIndex] = $(this).val();
            $(this).replaceWith("<label class='todo-text'>" + $(this).val() + "</label>");
            console.log(todos);
            console.log($("input.todo-text").is(":focus"));
        }
    });
//When renaming save todo and get back to a <label>
    $(".todos-container").on("keypress", "input.todo-text", function(e) {
        if (e.which === 13) {
            e.preventDefault();
            if ($(this).val() !== "") {
                $(this).trigger("blur");
                // var todoIndex = $(this).parent().index();
                // todos[todoIndex] = $(this).val();
                // $(this).replaceWith("<label class='todo-text'>" + $(this).val() + "</label>");
                // console.log(todos);
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


//Renametodo
//Addtodo
//Removetodo
//RenameTodolist
//RemoveTodolist
//Addtodolist
//ChangetodolistIcon