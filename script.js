$(document).ready(function() {
  console.log("DOMContent fully loaded.");

  function addListItem() {
		$('.itemAlert').remove();
    var shoppingItem = $("#myItem").val();
    var quantity = $("#quantity").val();
    var unit= $("#unit").val();
    //Regular expression below checks for digits, used for error checking the shoppingItem
    // \d+ checks for one or more digits and 'g' means global, checking for all occurreances of a digit
    var digits = /\d+/g;

    if (shoppingItem === '') {
			$('#unit').after('<p class="itemAlert">You must enter something !</p>');
    } /* No item entered */

    else if(shoppingItem.match(digits)){
			$('#unit').after('<p class="itemAlert">Not an item, please try again .</p>');
    }/* If there is any digit in the shoppingItem string, warning is displayed*/

    else {
      if((quantity >= 1)) {
      /*  shoppingItem = shoppingItem.substr(0, shoppingItem.length - 1);*/
        $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/>  " + quantity + " ( "+ unit +" ) " + shoppingItem + " <button class='delete'> x </button> </li>" ); 
      } 
      
     
    } // The input field has a valid shoppingItem
   $("#myItem").val('');
  }
 
  
   function doneBuyItem() {      /*----strike through the item when done buying it----*/
     $(this).parent().toggleClass('strike');
 } 

  function deleteItem(){
      $(this).parent().hide();
  }
  
    $(function(){
    $("#add").on("click", addListItem);
    $(document).on('click','.itemDone', doneBuyItem);
     $(document).on('click','.delete', deleteItem);
  });
  
});
