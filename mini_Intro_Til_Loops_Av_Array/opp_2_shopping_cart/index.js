const shoppingList = document.getElementById("shoppingList");
const inputId = document.getElementById("inputId");
let shoppingItems = ["test", "test1", "test2"];

updateCart();
function updateCart() {
  if (shoppingItems.length === 0) {
    shoppingList.innerHTML = "You have no items in your shopping cart.";
  } else {
    shoppingList.innerHTML = "";
    /* Here we generate <li>(list item) for every item in the var shoppingIteem */
    for (i = 1; i <= shoppingItems.length; i++) {
      if (shoppingList.innerHTML.includes(shoppingItems[i])) {
        console.log("hello");
      }
      shoppingList.innerHTML += /* HTML */ `<li id="listItem1">
        <h3 id="itemText${i}">${shoppingItems[i - 1]}</h3>
        <button class="removeButton" onclick="(removeItem(${i}))">❌</button>
        <button class="removeButton" onclick="(checkMarkButton(${i}))">✔</button>
      </li>`;
      /* Every list item gets their own button to remove that specific item*/
      // console.log(shoppingList.innerHTML);
    }
  }
}

function removeItem(liIndex) {
  shoppingItems.splice(liIndex - 1, 1);
  updateCart();
}

function checkMarkButton(liIndex) {
  itemText = document.getElementById(`itemText${liIndex}`);
  itemText.setAttribute("class", "lineThrough");
}

function addToCart() {
  shoppingItems.push(inputId.value);
  inputId.value = "";
  updateCart();
}

/* what I am trying now is to not reload a item in shopping items */

/* option to remove item from cart */
/* Option to checkmark an item putting a line through said item */
