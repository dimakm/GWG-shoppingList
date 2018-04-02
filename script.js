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
			$('#quantity').after('<p class="itemAlert">You must enter something !</p>');
    } /* No item entered */

    else if(shoppingItem.match(digits)){
			$('#quantity').after('<p class="itemAlert">Not an item, please try again .</p>');
    }/* If there is any digit in the shoppingItem string, warning is displayed*/

    else {
      if((quantity > 1 && shoppingItem.substr(shoppingItem.length - 1) == 's')) {
      /*  shoppingItem = shoppingItem.substr(0, shoppingItem.length - 1);*/
        $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/> ( " + quantity + unit + "s ) " + shoppingItem + " <button class='delete'> x </button> </li>" );
      } /* More than 1 quantity, and the last character IS an 's', drop the 's'. Reassign the shoppingItem string, starting from the first character (at 0) up to and including the last character (shoppingItem.length - 1) This should be the 's', so now it becomes a singular item */

      else if(quantity > 1 && shoppingItem.substr(shoppingItem.length - 1) != 's' ) {
        $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/>( " + quantity + unit +"s ) " + shoppingItem + "  <button class='delete'> x </button> </li>" );
      } /* Case of there being more than one quantity and the last character IS NOT an 's', leave the shoppingItem as is */

      else if(quantity == 1 && shoppingItem.substr(shoppingItem.length - 1) == 's'){
        shoppingItem = shoppingItem.substr(0, shoppingItem.length - 1);
        $("#myUL").append("<li>  <input type='checkbox' name='done' class='itemDone'/>" + unit +" " +shoppingItem +  "<button class='delete'> x </button> </li>" );
      } /* Exactly 1 quantity, and the last character IS an 's', drop the 's'.*/

      else if(quantity == 1 && shoppingItem.substr(shoppingItem.length - 1) != 's'){
        $("#myUL").append("<li>  <input type='checkbox' name='done' class='itemDone' /> " +  unit+" " + shoppingItem +  "<button class='delete'> x </button> </li>" );
      } /* Exactly 1 quantity, and the last character IS NOT an 's', leave as is*/
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

