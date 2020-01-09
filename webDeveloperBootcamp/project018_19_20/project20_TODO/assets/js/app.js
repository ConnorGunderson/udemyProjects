// Give alternate CSS to odd children in the ToDO ul
$("li:nth-child(odd)").css({"background-color": "var(--custom-color-01"});

// give input a enter function which clears the text and submits the new ToDo the ul

$("#inputToDo").on("keypress",function(e) {
    if (e.which == 13) {
        
    }
})

$("li").click( function()
{
    $(this).fadeToggle(200)
    setTimeout(() => {
        $(this).remove()
    }, 150);
    
})

// Prototypes