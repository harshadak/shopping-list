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
	
}



// Function to delete an item from the shopping list

function deleteItem() {
	$(this).parent().remove();
}



// Function to clear all the items from the shopping list

function clearAll() {
	$(document).on('click', '.clear-all', function(){
    	$('.item-list').empty();
    	console.log('Items deleted');
	});
}

$(function() {
	var add = $('#submit-item');
	var list = $('.item-list');
	var itemValue = $('#item-value');

    add.on('click', addItem);
    list.on('click','.delete', deleteItem);
    itemValue.on('keypress', function(e){
    	if (e.which == 13) {
    		addItem();
    	}
    });
    /*
    checkItem();
    deleteItem();
    clearAll();
    */
  
    });