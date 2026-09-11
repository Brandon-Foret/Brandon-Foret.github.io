const colors = [
  "#ff3838",
  "#ff9f1a",
  "#ffe600",
  "#2ed573",
  "#1e90ff",
  "#a55eea",
  "#ff4dcb",
];

const baseFrameTime = 1000 / 60;
let lastTime = performance.now();
function partyPopper() {

  const startX = window.innerWidth / 2;
  const startY = window.innerHeight * 0.85;
  const amount = 250;

  for (let i = 0; i < amount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    let x = startX;
    let y = startY;

    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 7 + 5;
    confetti.style.width = size + "px";
    confetti.style.height = size * 1.6 + "px";

    document.body.appendChild(confetti);

    let velocityX = (Math.random() - 0.5) * 18;
    let velocityY = -(Math.random() * 10 + 12);

    const gravity = 0.32;
    let rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 25;

    function animate() {
      requestAnimationFrame(animate);
      
      const elapsed = currentTime - lastTime;
      if (elapsed < baseFrameTime) {
        return;
      }

      const frameScale = Math.min(elapsed / baseFrameTime, 3);

      lastTime = currentTime;
      velocityY += gravity;

      x += velocityX * frameScale;
      y += velocityY * frameScale;
      rotation += rotationSpeed * frameScale;

      confetti.style.left = x + "px";
      confetti.style.top = y + "px";
      confetti.style.transform = `rotate(${rotation}deg)`;

      if (y > window.innerHeight + 50) {
        y = -30;
        x = Math.random() * window.innerWidth;

        velocityY = Math.random() * 2 + 1;
        velocityX = (Math.random() - 0.5) * 2;
      }

    }

    requestAnimationFrame(animate);
  }
}

partyPopper();
