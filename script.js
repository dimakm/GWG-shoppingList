

// Create a new list item whith the amount 
function newElement() {
  //create new list item
  let  li = document.createElement("li"); 
  // assign the value in the input to shoppingItem
  const shoppingItem = document.getElementById("myItem").value;
  // assign the value in the quantity input to quantity
  const quantity = document.getElementById("theAmount").value;
   // create a string with the item and quantity
  const inputVal = shoppingItem + ' ' + quantity  ;
  
  let n = document.createTextNode(inputVal);
  li.appendChild(n); 
  if (shoppingItem === '') { // test if the shoopping item input field is empty then show an alert
    alert("You must enter something!");
  } else {
  document.getElementById("theListUL").appendChild(li);
  }
  document.getElementById("myItem").value = ""; 
  document.getElementById("theAmount").value = ""; 

 
}
