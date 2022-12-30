const body = document.getElementsByTagName("BODY")[0];
const calc = document.getElementById("calc");
const board = document.getElementById("board");
let w;

document.getElementById("bgchanger").addEventListener("click", () => {
  let color = body.style.background;
  if (color == "black") {
    body.style.background = "white";
  } else {
    body.style.background = "black";
  }
});
document.getElementById("calc").addEventListener("click", function () {
  calc.innerHTML = "loading";
  board.innerHTML="webworker.js is calculating the sum of first 1000000000 numbers for you on some other thread."
  calc.disabled = true;
  w = new Worker("webworker.js");
  w.postMessage(1000000000);
  w.addEventListener("message", (e) => {
    calc.innerHTML = "done";
    board.innerHTML=`sum of first 1000000000 numbers is ${e.data}`
    calc.disabled = false;
  });
});
