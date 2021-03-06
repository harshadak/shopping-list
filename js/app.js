// Function to add an item to the shopping list

function addItem() {
    var info = $('#item-value').val();
    var list = $('.item-list');
    var item = $('<li><button class="checkbox">&#x2713;</button><span>' + info + '</span><button class="delete">X</button></li>');
    var itemValue = $('#item-value');

    // Returns false if the user enters nothing or more than 12 characters

    if (info.length === 0 || info.length > 12) {
        alert('Please enter an item !!');
        return false;
    }

    // Adds the items on top of the list

    list.prepend(item);
    $(itemValue).val('');
}



// Function to check off and uncheck the items in the shopping list

function checkItem() {
    $(this).parent().toggleClass('checked');
    // Moves checked items to the bottom of the list
    $('.item-list').find('.checked').appendTo('.item-list');
}



// Function to delete an item from the shopping list

function deleteItem() {
    $(this).parent().remove();
}



// Function to clear all the items from the shopping list

function clearAll() {

    $('.item-list').children().remove();
    /*$(document).on('click', '.clear-all', function(){
        $('.item-list').empty();
        console.log('Items deleted');
    });*/
}

$(document).ready(function () {
    $('#submit-item').on('click', addItem);
    $('.clear-all').on('click', clearAll);
});

$(document).on('keypress', function (e) {
    if (e.which == 13) {
        addItem();
    }
});
$(document).on('click', '.delete', deleteItem);
$(document).on('click', '.checkbox', checkItem);
