$(document).ready(function() {
// cache the window object
    var $window = $(window);
});

// click handlers for shoe
$("#shoes").on("click", ".shoe", function(event){
    if (!$(this).is('.expanded')) {
        var $this = $(this);
        $(this).addClass('expanded');
    }
    return false;
});

// click handler for expanded/focused shoe

$("#shoes").on("click", ".expanded", function(event){
    $(this).removeClass('expanded');
    return false;
});