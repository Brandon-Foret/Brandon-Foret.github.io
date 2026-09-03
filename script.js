const desktop = document.getElementById("desktop");
const windowArea = document.getElementById("window-area");
const taskbarWindows = document.getElementById("taskbar-windows");
const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

let windowCount = 0;
let highestZ = 10;

function createWindow(url, title) {
  windowCount++;

  const windowId = `window-${windowCount}`;

  const windowElement = document.createElement("div");

  windowElement.className = "desktop-window";

  windowElement.id = windowId;

  const offset = (windowCount - 1) % 8;

  windowElement.style.left = `${80 + offset * 30}px`;

  windowElement.style.top = `${50 + offset * 25}px`;

  windowElement.style.zIndex = ++highestZ;

  windowElement.innerHTML = `
    <nav>

      <h1>${escapeHTML(title)}</h1>

      <div class="window-controls">

        <button
          class="window-control minimize"
          title="Minimize"
        >−</button>

        <button
          class="window-control maximize"
          title="Maximize"
        >□</button>

        <button
          class="window-control close"
          title="Close"
        >×</button>

      </div>

    </nav>

    <iframe
      src="${escapeAttribute(url)}"
      title="${escapeAttribute(title)}"
    ></iframe>
  `;

  windowArea.appendChild(windowElement);

  setupWindow(windowElement);

  createTaskbarButton(windowElement, title);

  bringToFront(windowElement);

  return windowElement;
}

function setupWindow(windowElement) {
  const titleBar = windowElement.querySelector("nav");

  const minimizeButton = windowElement.querySelector(".minimize");

  const maximizeButton = windowElement.querySelector(".maximize");

  const closeButton = windowElement.querySelector(".close");

  let isDragging = false;

  let offsetX = 0;
  let offsetY = 0;

  titleBar.addEventListener("mousedown", (event) => {
    if (event.target.closest(".window-control")) {
      return;
    }

    if (windowElement.classList.contains("maximized")) {
      return;
    }

    bringToFront(windowElement);

    isDragging = true;

    const rect = windowElement.getBoundingClientRect();

    offsetX = event.clientX - rect.left;

    offsetY = event.clientY - rect.top;

    event.preventDefault();
  });

  document.addEventListener("mousemove", (event) => {
    if (!isDragging) {
      return;
    }

    const desktopRect = desktop.getBoundingClientRect();

    let x = event.clientX - desktopRect.left - offsetX;

    let y = event.clientY - desktopRect.top - offsetY;

    windowElement.style.left = `${x}px`;

    windowElement.style.top = `${y}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  windowElement.addEventListener("mousedown", () => {
    bringToFront(windowElement);
  });

  minimizeButton.addEventListener("click", (event) => {
    event.stopPropagation();

    windowElement.classList.add("minimized");

    updateTaskbar();
  });

  maximizeButton.addEventListener("click", (event) => {
    event.stopPropagation();

    toggleMaximize(windowElement);
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const taskbarButton = document.querySelector(
      `[data-window="${windowElement.id}"]`,
    );

    if (taskbarButton) {
      taskbarButton.remove();
    }

    windowElement.remove();

    updateTaskbar();
  });
}

function bringToFront(windowElement) {
  highestZ++;

  windowElement.style.zIndex = highestZ;

  document.querySelectorAll(".desktop-window").forEach((win) => {
    win.classList.remove("active");
  });

  windowElement.classList.add("active");

  updateTaskbar();
}

function toggleMaximize(windowElement) {
  if (!windowElement.classList.contains("maximized")) {
    const rect = windowElement.getBoundingClientRect();

    windowElement.dataset.oldLeft = `${rect.left}px`;
    windowElement.dataset.oldTop = `${rect.top}px`;
    windowElement.dataset.oldWidth = `${rect.width}px`;
    windowElement.dataset.oldHeight = `${rect.height}px`;

    windowElement.classList.add("maximized");
  } else {
    windowElement.classList.remove("maximized");

    windowElement.style.left = windowElement.dataset.oldLeft;
    windowElement.style.top = windowElement.dataset.oldTop;
    windowElement.style.width = windowElement.dataset.oldWidth;
    windowElement.style.height = windowElement.dataset.oldHeight;
  }

  bringToFront(windowElement);
}

function createTaskbarButton(windowElement, title) {
  const button = document.createElement("button");

  button.className = "taskbar-window";

  button.dataset.window = windowElement.id;

  button.textContent = title;

  button.addEventListener("click", () => {
    if (windowElement.classList.contains("minimized")) {
      windowElement.classList.remove("minimized");
    }

    bringToFront(windowElement);
  });

  taskbarWindows.appendChild(button);

  updateTaskbar();
}

function updateTaskbar() {
  document.querySelectorAll(".desktop-window").forEach((windowElement) => {
    const button = document.querySelector(
      `[data-window="${windowElement.id}"]`,
    );

    if (!button) {
      return;
    }

    if (
      windowElement.classList.contains("active") &&
      !windowElement.classList.contains("minimized")
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

startButton.addEventListener("click", (event) => {
  event.stopPropagation();

  startMenu.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest("#start-menu") &&
    !event.target.closest("#start-button")
  ) {
    startMenu.classList.remove("open");
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".start-item");

  if (!button) {
    return;
  }

  const url = button.dataset.url;
  const title = button.dataset.title;

  createWindow(url, title);

  startMenu.classList.remove("open");
});

document.addEventListener("click", (event) => {
  const app = event.target.closest(".desktop-app");

  if (!app) {
    return;
  }

  const url = app.dataset.url;

  const title = app.dataset.title;

  createWindow(url, title);
});

function escapeHTML(text) {
  const element = document.createElement("div");

  element.textContent = text;

  return element.innerHTML;
}

function escapeAttribute(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const jumper = document.getElementById("jumper");

let x = 50;
let y = -55;

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

  if (y >= -50) {
    y = -50;
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
