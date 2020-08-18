// Check off todos by clicking
$('li').click(function(){
    $(this).toggleClass('completed');
});

// click on X to delete todo
$('span').click(function(event){
    $(this).parent().fadeOut(500, function(){
        //'this' refers to the selected li parent now
        $(this).remove()
    });
    event.stopPropagation();
});