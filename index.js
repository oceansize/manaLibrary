console.log("yeah I'm here");
let list = document.createElement("ul");

(function fruitShop() {

  let fruits = ["Banana", "Apple", "Mango"]
  let targetElement = document.getElementById('shop-front')
  let addFruitButton = document.getElementById('add-fruit')

  fruits.forEach(stockShelves);
  targetElement.appendChild(list);

  addFruitButton.addEventListener("submit", e => {
    e.preventDefault();
    let newFruit = document.getElementById('new-fruit').value;

    if (newFruit != "") {
      addItemToShelf(newFruit);
      addFruitButton.reset();
    }
  });

})()

function stockShelves(item) {
  addItemToShelf(item);
}

function addItemToShelf(item) {
  let listItem = document.createElement("li");
  let editLink = document.createElement('a');
  let deleteLink = document.createElement('a');
  let lineItem = document.createTextNode(item);


  // editLink.href = "#";
  // editLink.textContent ="Edit";
  deleteLink.href = "#";
  deleteLink.textContent ="Delete";

  listItem.appendChild(document.createTextNode(item));
  // listItem.appendChild(editLink);
  listItem.appendChild(deleteLink);
  list.appendChild(listItem);
};

