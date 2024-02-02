const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions based on screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set initial drawing properties
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#000";

let isDrawing = false;

// Event listeners for drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  draw(e); // Start drawing from the initial point
}

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

// Adjust canvas dimensions on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
