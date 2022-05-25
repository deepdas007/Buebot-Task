const subsTab1 = document.getElementById("tab1");
const subsTab2 = document.getElementById("tab2");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

let itemPrice = document.getElementById("itemPrice");

// subsTab2.addEventListener("click", showTab1Details);

function showTab1Details() {
  item1.innerHTML = "10 Device - 2 Years Best Deal";
  item2.innerHTML = "5 Device - 2 Year";
  item3.innerHTML = "1 Device - 2 Year";
}

function showTab2Details() {
  item1.innerHTML = "10 Device - 1 Years Best Deal";
  item2.innerHTML = "4 Device - 1 Year";
  item3.innerHTML = "2 Device - 1 Year";
}

function showItemPrice1() {
  itemPrice.innerHTML = "$2.49";
}

function showItemPrice2() {
  itemPrice.innerHTML = "$1.49";
}

function showItemPrice3() {
  itemPrice.innerHTML = "$0.49";
}
