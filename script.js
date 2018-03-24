

// Create a new list item whith the amount 
function newElement() {
  let  li = document.createElement("li");
  const shoppingItem = document.getElementById("myItem").value;
  const quantity = document.getElementById("theAmount").value;
  const inputVal = shoppingItem + ' ' + quantity  ;
  
  let n = document.createTextNode(inputVal);
  li.appendChild(n);
  if (inputVal === '') {
    alert("You must enter something!");
  } else {
  document.getElementById("theListUL").appendChild(li);
  }
  document.getElementById("myItem").value = ""; 
  document.getElementById("theAmount").value = ""; 

 
}
