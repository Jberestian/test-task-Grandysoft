let clicks = 0;
let lastClick = [0, 0];
let button = document.getElementById("btn");
let canvasEL = document.getElementById("canvas");

function getCursorPosition(e) {
  let x;
  let y;

  if (e.pageX != undefined && e.pageY != undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    y =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return [x, y];
}

function drawLine(e) {
  context = this.getContext("2d");

  x = getCursorPosition(e)[0] - this.offsetLeft;
  y = getCursorPosition(e)[1] - this.offsetTop;

  if (clicks != 1) {
    clicks++;
  } else {
    context.beginPath();
    context.moveTo(lastClick[0], lastClick[1]);
    context.lineTo(x, y, 6);

    context.strokeStyle = "#000000";
    context.stroke();

    clicks = 0;
  }

  lastClick = [x, y];
}

function stopDraw() {
  button.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
}

stopDraw();

canvasEL.addEventListener("click", drawLine, false);
