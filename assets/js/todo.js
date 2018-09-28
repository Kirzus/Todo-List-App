// Set a Default Todolist
var defaultTodolist = new Todolist("Todolist");
var currentList = defaultTodolist;

function Todolist(listName) {
    this.listName = listName;
    this.todos = [];
    this.todosDone = [];
}

//Set default value name of todolist
$(".todolist-name").val(defaultTodolist.listName);
defaultTodolist.todos.unshift("lol");
defaultTodolist.todos.unshift("mdr");
defaultTodolist.todos.unshift("yo");


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

function addList() {

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
    addTodo(defaultTodolist.todos);
    sortTodo()
    doneTodo();
    renameTodo();
    removeTodo();
} 

function sortTodo() {
    $(".todos-todo").sortable({
        items: ".todo",
        // Keep the mouse vertically in the middle of the todo div 
        cursor: "move",
        cursorAt: {
            top: $(".todo").height() / 2
        },
        revert: true
    });
}

function addTodo(arr) {
    // Set up Default todos on load
    for (i = arr.length - 1; i >= 0; i--) {
        $(".todos-todo").prepend(
            "<div class='todo'><input type='checkbox'>" +
            "<label>" + arr[i] + "</label>" + 
            "<i class='fas fa-edit'></i>" + 
            "<i class='fas fa-trash-alt'></i></div>");
        $(".todos-container label").addClass("todo-text");
        $(".fa-edit").addClass("todo-edit");
        $(".fa-trash-alt").addClass("todo-delete");
    }
    //Get user todo input and store it in todos array
    $(".todos-input").on("keypress", function(e) {
        if (e.which === 13) {
            //Prevent input text from submitting form
            e.preventDefault();
            //Store todo and creates DOM element if not empty
            while ($(this).val() !== "") {
                currentList.todos.unshift($(this).val());
                $(".todos-todo").prepend(
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
                $(todoTxt).replaceWith(inputHtml);
                $("input.todo-text").addClass("done");
                // Remove the line through for visibilty upon renaming
                $("input.todo-text").css("text-decoration-line", "none");
            } else {
                $(todoTxt).replaceWith(inputHtml); // FIXME: Error code on a problem of node parent and blur.
            }
        $("input.todo-text").focus();
        // Transfer the txt value to the changed tag: input
        $("input.todo-text").val(txt);
    });
    //Save data on input blur and switch back to a label tag
    $(".todos-container").on("blur", "input.todo-text", function() {
        if ($(this).val() !== "") {
            $(this).removeAttr("style");
            var todoIndex = $(this).parent().index();
            currentList.todos[todoIndex] = $(this).val();
            if ($(this).hasClass("done")) {
                $(this).replaceWith("<label class='todo-text done'>" + $(this).val() + "</label>");
            } else {
                $(this).replaceWith("<label class='todo-text'>" + $(this).val() + "</label>");
            }
            console.log(currentList.todos);
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
        if ($(".todo").parent().hasClass("todos-done") === true) {
            var x = todo.index() - 1;
            currentList.todosDone.splice(x, 1);
        } else {
            currentList.todos.splice(todo.index(), 1);
        // }
        }
        todo.remove();
        removeDoneTitle();
        console.log(currentList.todos);
    });
}

function doneTodo() {
    $(".todos-container").on("click", "input[type=checkbox]", function() {
        //Store todo text only
        var todoTxt = $(this).siblings(".todo-text");
        var lastTodo = $(".todos-todo").children().last();
        var todo = $(this).parent();
        if ($(this).prop("checked") !== false) {
            // Delete data from todos array and store it in todosDone
            currentList.todosDone.unshift(todoTxt.text());
            console.log(currentList.todos);
            console.log(currentList.todosDone);
            currentList.todos.splice(todo.index(), 1);         
            console.log(currentList.todos);
            console.log(currentList.todosDone);   
            //Add a line through to the text of todo
            todoTxt.addClass("done");
            $("h2").removeClass("hide");
            $(this).parent().insertAfter($("h2"));
        } else {
            var titleIndex = 1;
            currentList.todos.push(todoTxt.text());
            currentList.todosDone.splice(todo.index() - titleIndex, 1);
            console.log(currentList.todos);
            console.log(currentList.todosDone);
            //Remove line through to the text of todo
            todoTxt.removeClass("done");
            if (lastTodo.length !== 0) {
                $(this).parent().insertAfter(lastTodo);
            } else {
                $(this).parent().appendTo($(".todos-todo"));
            }
            removeDoneTitle();
        }
    });
}

function removeDoneTitle() {
    if ($(".todos-done").find(".todo").length === 0) {
        $("h2").addClass("hide");
    }
}