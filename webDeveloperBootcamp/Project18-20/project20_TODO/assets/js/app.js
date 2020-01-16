// Give alternate CSS to odd children in the ToDO ul
function LiColor() { $("li:nth-child(odd)").css({"background-color": "var(--custom-color-01"}) };
// Click the 'X' in the li to delete the list item
function addRemoveFnc() { $("ul").on("click", "li", function()
{
    $(this).fadeToggle(150)
    setTimeout(() => {
        $(this).remove()
    }, 100);
    
})};

// Call init functions
LiColor();
addRemoveFnc();

// give input a enter function which clears the text and submits the new ToDo the ul
$("input[type='text']").on("keypress",function(e) {
    if (e.which === 13) {
        // Store the text from input into new variable
        let tmpTxt = $(this).val()
        // Append the text into a new list item then color it
        $('ul').append("<li><span class='py-3'><i class='fa fa-trash-o'></i></span>" + tmpTxt +"</li>");
        LiColor();
        addRemoveFnc();
        // Delete the text so a new todo can be added
        $(this).val("")
    }
});

// toggle input
$(".fa-plus").click(function(){
    $("#inputToDo").fadeToggle();
})