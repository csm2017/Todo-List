// Check off todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        //'this' refers to the selected li parent now
        $(this).remove()
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13 && $(this).val() !== '') {
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $('ul').append(`<li><span>X</span> ${todoText}</li>`);
    }
});