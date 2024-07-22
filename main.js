const state = {
  turn: "noughts",
};
const size = 50;
window.onload = function () {
  console.log("load");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.addEventListener("click", function (e) {
    if (state.turn === "noughts") {
      drawCircle(ctx, e.offsetX, e.offsetY, size);
    } else {
      drawCross(ctx, e.offsetX, e.offsetY, size);
    }
    switchPlayer();
  });
  updateStatus(state);
};
function drawCircle(ctx, x, y, size) {
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.stroke();
}
function drawCross(ctx, x, y, size) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x - size, y - size);
  ctx.lineTo(x + size, y + size);
  ctx.moveTo(x + size, y - size);
  ctx.lineTo(x - size, y + size);
  ctx.stroke();
}
function switchPlayer() {
  if (state.turn === "noughts") {
    state.turn = "crosses";
  } else {
    state.turn = "noughts";
  }
  updateStatus(state);
}
function updateStatus() {
  const status = document.getElementById("status");
  status.innerHTML = "Player " + state.turn + " turn";
}
