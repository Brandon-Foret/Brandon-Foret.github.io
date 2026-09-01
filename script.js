const windowElement = document.getElementById("all-contents");
const titleBar = windowElement.querySelector("nav");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener("mousedown", (event) => {
  if (event.target.closest("a")) {
    return;
  }

  isDragging = true;

  const rect = windowElement.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;

  windowElement.style.position = "fixed";
  windowElement.style.margin = "0";

  titleBar.style.cursor = "grabbing";
  event.preventDefault();
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  windowElement.style.left = `${event.clientX - offsetX}px`;
  windowElement.style.top = `${event.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;

  isDragging = false;
  titleBar.style.cursor = "grab";
});

const jumper = document.getElementById("jumper");

let x = 50;
let y = 0;

let velocityX = 5;
let velocityY = 0;

const gravity = 0.72;
const jumpPower = -12;

let onGround = true;

let direction = 1;

let scaleX = 1;
let scaleY = 1;

function animate() {
  x += velocityX;
  velocityY += gravity;
  y += velocityY;

  if (y >= 0) {
    y = 0;
    velocityY = jumpPower;
    onGround = true;
  } else {
    onGround = false;
  }

  const maxX = window.innerWidth - jumper.offsetWidth;

  if (x <= 0) {
    x = 0;
    velocityX *= -1;
    direction *= -1;
  }

  if (x >= maxX) {
    x = maxX;
    velocityX *= -1;
    direction *= -1;
  }

  const targetScaleX = onGround ? 5 : 1;
  const targetScaleY = onGround ? 0.1 : 1;
  const ease = 0.15;

  scaleX += (targetScaleX - scaleX) * ease;
  scaleY += (targetScaleY - scaleY) * ease;

  jumper.style.transform = `
    translate(${x}px, ${y}px)
    scale(${scaleX * direction}, ${scaleY})
  `;

  requestAnimationFrame(animate);
}

animate();
