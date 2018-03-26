
function addListItem() {
  var shoppingItem = $("#myItem").val();
 if (shoppingItem === '') { 
    alert("You must enter something!");
  } else { 
$('#myUL').append('<li>' + shoppingItem +  '</li>' ); }
}


$(function(){
  $('#add').on('click', addListItem) ;
});
