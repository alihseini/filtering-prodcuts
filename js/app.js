const searchBox = document.getElementById("search-box");
const productItems = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const searchButton = document.getElementById("search-button");
const searchValue = document.getElementById("search-value");
const prices = document.querySelectorAll(".price");

const searching = (event) => {
  const searchValue = event.target.value.trim().toLowerCase();
  productItems.forEach((item) => {
    const proItem = item.children[1].innerText.toLowerCase(); 
    if (proItem.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
const filtering = (event) => {
  const filterData = event.target.dataset.buttons.toLowerCase();
  selectedButton(filterData);
  productItems.forEach((item) => {
    const category = item.dataset.category.toLowerCase();
    if (filterData === "all") {
      item.style.display = "block";
    } else {
      if (filterData === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
};
const selectedButton = (item) => {
  buttons.forEach((button) => {
    if (item === button.dataset.buttons.toLowerCase()) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};
const searchPrice = () => {
  const enteredPrice = +searchValue.value;
  prices.forEach((price) => {
    productPrice = +price.innerText.split(" ")[0];
    if (!enteredPrice) {
      price.parentElement.style.display = "block";
    } else {
      enteredPrice === productPrice
        ? (price.parentElement.style.display = "block")
        : (price.parentElement.style.display = "none");
    }
  });
};
window.addEventListener("load", () => {
  searchBox.addEventListener("keyup", searching);
  buttons.forEach((item) => {
    item.addEventListener("click", filtering);
  });
  searchButton.addEventListener("click", searchPrice);
});
