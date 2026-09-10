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
  let isResizing = false;

  let offsetX = 0;
  let offsetY = 0;

  let resizeDirection = "";

  let startX = 0;
  let startY = 0;

  let startLeft = 0;
  let startTop = 0;

  let startWidth = 0;
  let startHeight = 0;

  const minWidth = 250;
  const minHeight = 150;
  const resizeMargin = 8;

  function getResizeDirection(event) {
    if (windowElement.classList.contains("maximized")) {
      return "";
    }

    const rect = windowElement.getBoundingClientRect();

    const margin = isResizing ? 40 : 12;

    const left = event.clientX - rect.left;
    const right = rect.right - event.clientX;
    const top = event.clientY - rect.top;
    const bottom = rect.bottom - event.clientY;

    let direction = "";

    if (top <= margin) {
      direction += "n";
    } else if (bottom <= margin) {
      direction += "s";
    }

    if (left <= margin) {
      direction += "w";
    } else if (right <= margin) {
      direction += "e";
    }

    return direction;
  }

  function updateResizeCursor(event) {
    if (isDragging || isResizing) {
      return;
    }

    const direction = getResizeDirection(event);

    const cursors = {
      n: "ns-resize",
      s: "ns-resize",
      e: "ew-resize",
      w: "ew-resize",
      ne: "nesw-resize",
      sw: "nesw-resize",
      nw: "nwse-resize",
      se: "nwse-resize",
    };

    windowElement.style.cursor = cursors[direction] || "";
  }

  windowElement.addEventListener("mousemove", updateResizeCursor);

  windowElement.addEventListener("mouseleave", () => {
    if (!isResizing && !isDragging) {
      windowElement.style.cursor = "";
    }
  });

  titleBar.addEventListener("mousedown", (event) => {
    if (event.target.closest(".window-control")) {
      return;
    }

    if (windowElement.classList.contains("maximized")) {
      return;
    }

    const direction = getResizeDirection(event);

    if (direction) {
      return;
    }

    bringToFront(windowElement);

    isDragging = true;

    const rect = windowElement.getBoundingClientRect();

    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    event.preventDefault();
  });

  windowElement.addEventListener("mousedown", (event) => {
    bringToFront(windowElement);

    const direction = getResizeDirection(event);

    if (!direction) {
      return;
    }

    isResizing = true;
    resizeDirection = direction;

    const rect = windowElement.getBoundingClientRect();

    startX = event.clientX;
    startY = event.clientY;

    startLeft = rect.left;
    startTop = rect.top;

    startWidth = rect.width;
    startHeight = rect.height;

    windowElement.style.cursor =
      {
        n: "ns-resize",
        s: "ns-resize",
        e: "ew-resize",
        w: "ew-resize",
        ne: "nesw-resize",
        sw: "nesw-resize",
        nw: "nwse-resize",
        se: "nwse-resize",
      }[direction] || "default";

    event.preventDefault();
    event.stopPropagation();
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const desktopRect = desktop.getBoundingClientRect();

      let x = event.clientX - desktopRect.left - offsetX;
      let y = event.clientY - desktopRect.top - offsetY;

      windowElement.style.left = `${x}px`;
      windowElement.style.top = `${y}px`;

      return;
    }

    if (!isResizing) {
      return;
    }

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    let newLeft = startLeft;
    let newTop = startTop;

    let newWidth = startWidth;
    let newHeight = startHeight;

    if (resizeDirection.includes("e")) {
      newWidth = Math.max(minWidth, startWidth + dx);
    }

    if (resizeDirection.includes("s")) {
      newHeight = Math.max(minHeight, startHeight + dy);
    }

    if (resizeDirection.includes("w")) {
      newWidth = Math.max(minWidth, startWidth - dx);

      if (newWidth !== minWidth || startWidth - dx >= minWidth) {
        newLeft = startLeft + dx;
      } else {
        newLeft = startLeft + startWidth - minWidth;
      }
    }

    if (resizeDirection.includes("n")) {
      newHeight = Math.max(minHeight, startHeight - dy);

      if (newHeight !== minHeight || startHeight - dy >= minHeight) {
        newTop = startTop + dy;
      } else {
        newTop = startTop + startHeight - minHeight;
      }
    }

    const desktopRect = desktop.getBoundingClientRect();

    newLeft -= desktopRect.left;
    newTop -= desktopRect.top;

    windowElement.style.left = `${newLeft}px`;
    windowElement.style.top = `${newTop}px`;
    windowElement.style.width = `${newWidth}px`;
    windowElement.style.height = `${newHeight}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    isResizing = false;
    resizeDirection = "";

    windowElement.style.cursor = "";
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

document.addEventListener("dblclick", (event) => {
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

const NORMAL_SPEED = 5;
const SPEED_RETURN_RATE = 0.02;
const MAX_THROW_SPEED = 28;

let onGround = true;
let direction = 1;

const pickupSound = new Audio("assets/squeak_Q72c7Tg.mp3");

pickupSound.volume = 0.7;

let scaleX = 1;
let scaleY = 1;

const baseFrameTime = 1000 / 60;
let lastTime = performance.now();

let dragging = false;

let grabOffsetX = 0;
let grabOffsetY = 0;

let previousPointerX = 0;
let previousPointerY = 0;

let dragVelocityX = 0;
let dragVelocityY = 0;

let dragAccelerationX = 0;
let dragAccelerationY = 0;

jumper.style.touchAction = "none";
jumper.style.userSelect = "none";
jumper.style.cursor = "grab";

jumper.addEventListener("pointerdown", (event) => {
  event.preventDefault();

  dragging = true;

  jumper.setPointerCapture(event.pointerId);

  const rect = jumper.getBoundingClientRect();

  grabOffsetX = event.clientX - rect.left;
  grabOffsetY = event.clientY - rect.top;

  previousPointerX = event.clientX;
  previousPointerY = event.clientY;

  dragVelocityX = 0;
  dragVelocityY = 0;

  dragAccelerationX = 0;
  dragAccelerationY = 0;

  velocityX = 0;
  velocityY = 0;

  pickupSound.currentTime = 0;
  pickupSound.play().catch(() => {});

  jumper.style.cursor = "grabbing";
});

jumper.addEventListener("pointermove", (event) => {
  if (!dragging) return;

  event.preventDefault();

  const dx = event.clientX - previousPointerX;
  const dy = event.clientY - previousPointerY;

  const rawVelocityX = dx;
  const rawVelocityY = dy;

  dragAccelerationX = rawVelocityX - dragVelocityX;

  dragAccelerationY = rawVelocityY - dragVelocityY;

  dragVelocityX += (rawVelocityX - dragVelocityX) * 0.35;

  dragVelocityY += (rawVelocityY - dragVelocityY) * 0.35;

  x += dx;
  y += dy;

  previousPointerX = event.clientX;
  previousPointerY = event.clientY;

  if (dx > 0) {
    direction = 1;
  } else if (dx < 0) {
    direction = -1;
  }
});

function releaseJumper(event) {
  if (!dragging) return;

  dragging = false;

  const speed = Math.hypot(dragVelocityX, dragVelocityY);

  let throwPower = 1.8;
  throwPower += Math.min(speed * 0.12, 4);

  const aggression = Math.hypot(dragAccelerationX, dragAccelerationY);

  throwPower += Math.min(aggression * 0.08, 3);

  let throwX = dragVelocityX * throwPower;

  let throwY = dragVelocityY * throwPower;

  if (speed > 15) {
    throwX *= 1.25;
    throwY *= 1.25;
  }

  const throwSpeed = Math.hypot(throwX, throwY);

  if (throwSpeed > MAX_THROW_SPEED) {
    const multiplier = MAX_THROW_SPEED / throwSpeed;

    throwX *= multiplier;
    throwY *= multiplier;
  }

  velocityX = throwX;
  velocityY = throwY;

  onGround = false;

  jumper.style.cursor = "grab";

  try {
    jumper.releasePointerCapture(event.pointerId);
  } catch (error) {}
}

jumper.addEventListener("pointerup", releaseJumper);

jumper.addEventListener("pointercancel", releaseJumper);

function animate(currentTime) {
  requestAnimationFrame(animate);

  const elapsed = currentTime - lastTime;

  if (elapsed < baseFrameTime) {
    return;
  }

  const frameScale = Math.min(elapsed / baseFrameTime, 3);

  lastTime = currentTime;

  if (!dragging) {
    const targetSpeed = Math.sign(velocityX) * NORMAL_SPEED;

    velocityX += (targetSpeed - velocityX) * SPEED_RETURN_RATE * frameScale;

    if (Math.abs(velocityX) < 0.05 && Math.abs(velocityX) > 0) {
      velocityX = Math.sign(velocityX) * NORMAL_SPEED;
    }

    x += velocityX * frameScale;
    velocityY += gravity * frameScale;
    y += velocityY * frameScale;

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
  }

  const targetScaleX = dragging ? 1.15 : onGround ? 5 : 1;

  const targetScaleY = dragging ? 0.85 : onGround ? 0.1 : 1;

  const ease = 0.15;

  scaleX += (targetScaleX - scaleX) * ease;

  scaleY += (targetScaleY - scaleY) * ease;

  jumper.style.transform = `
    translate(${x}px, ${y}px)
    scale(
      ${scaleX * direction},
      ${scaleY}
    )
  `;
}

requestAnimationFrame(animate);
