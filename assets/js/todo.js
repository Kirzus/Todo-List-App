// var obj = {
//     title: ,
//     todo: []
// }

var todos = [];

//Get user todo input and store it in todos array
$("input[type='text']").on("keypress", function(e) {
    if (e.which == 13) {
        e.preventDefault();
        todos.push($(this).val());
    }
});