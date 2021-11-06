/* // Check Off Specific Todos By Clicking
var style = {
    color: "gray",
    textDecoration: "line-through"
}

var revstyle = {
    color: "black",
    textDecoration: "none"
}

$("li").click(function () {
    if ( $(this).css("color") === "rgb(128, 128, 128)" ) {
        $(this).css(revstyle);
    }
    else
    {
        $(this).css(style);
    }
}); */

// Check Off Specific Todos By Clicking
$("ul").on("click","li", function() {
    $(this).toggleClass("completed");    
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
    if( event.which === 13 ) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});