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
