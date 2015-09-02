function addItem() {

}

function checkItem() {
	
}

function deleteItem() {
	
}

function clearAll() {
	$(".clear-list").on("click", ".clear-all", function(){
    	$(".item-list").empty();
});
	alert("Items deleted");
}

$(function() {

    addItem();
    checkItem();
    deleteItem();
    clearAll();
  
    });