const countDown = 3000;

let timeoutDisplay = setTimeout(changeState, countDown);
let timeoutDisplayHead = setTimeout(hideHead, countDown);

const mainContent = document.getElementById("displayBeforeTime");

function hideHead() {
  mainContent.style.display = "none";
}

function changeState() {
  document.getElementById("cardHead").innerHTML = "Bluebot Technologies";
  document.getElementById("cardBody").innerHTML =
    "This text is displayed after 3 seconds";
}
