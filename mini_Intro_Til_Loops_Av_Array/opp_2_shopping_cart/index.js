const shoppingList = document.getElementById("shoppingList");
const inputId = document.getElementById("inputId");
let shoppingItems = ["test", "test1", "test2", "test1"];

updateCart();
function updateCart() {
  if (shoppingItems.length === 0) {
    shoppingList.innerHTML = "You have no items in your shopping cart.";
  } else {
    shoppingItems.forEach(function name(shoppingItem, i) {
      if (shoppingList.innerHTML.includes(shoppingItem)) {
        // console.log(shoppingItem);
        // console.log(shoppingList.innerHTML);
      } else {
        shoppingList.innerHTML += /* HTML */ `<li id="listItem1">
          <h3 id="itemText${i}">${shoppingItems[i]}</h3>
          <button class="removeButton" onclick="(removeItem(${i}))">❌</button>
          <button class="removeButton" onclick="(checkMarkButton(${i}))">
            ✔
          </button>
        </li>`;
      }
    });
  }
}

// updateCart();
// function updateCart() {
//   if (shoppingItems.length === 0) {
//     shoppingList.innerHTML = "You have no items in your shopping cart.";
//   } else {
//     shoppingList.innerHTML = "";
//     /* Here we generate <li>(list item) for every item in the var shoppingIteem */
//     for (i = 1; i <= shoppingItems.length; i++) {
//       /* Only add new items, and skip items already rendered on the page */
//       if (shoppingList.innerHTML.includes(shoppingItems)) {
//       } else {
//         shoppingList.innerHTML += /* HTML */ `<li id="listItem1">
//           <h3 id="itemText${i}">${shoppingItems[i - 1]}</h3>
//           <button class="removeButton" onclick="(removeItem(${i}))">❌</button>
//           <button class="removeButton" onclick="(checkMarkButton(${i}))">
//             ✔
//           </button>
//         </li>`;
/* Every list item gets their own button to remove that specific item*/
// console.log(shoppingList.innerHTML);
//       }
//     }
//   }
// }

function removeItem(liIndex) {
  shoppingItems.splice(liIndex, 1);
  console.log(liIndex - 1)
  console.log(shoppingItems);
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
