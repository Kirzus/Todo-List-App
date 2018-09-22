// var obj = {
//     title: ,
//     todo: []
// }

var todos = [];

//Get user todo input and store it in todos array
$("input[type='text']").on("keypress", function(e) {
    if (e.which === 13) {
        e.preventDefault();
        while ($(this).val() !== "") {
            todos.push($(this).val());
            $(".list-todos").append("<div class='todo'><input type='checkbox'><label>" + $(this).val() + "</label><i class='fas fa-edit'></i><i class='fas fa-trash-alt'></i></div>");
            $(".fa-edit").addClass("edit-todo");
            $(".fa-trash-alt").addClass("trash-todo");
            $(this).val("");
        }
    }
});

//remove todo when clicking on the trash button
$(".list-todos").on("click", ".trash-todo", function() {
    var todo = $(this).parent();
    console.log(todo);
    todos.splice(todo.index(), 1);
    todo.remove();
});