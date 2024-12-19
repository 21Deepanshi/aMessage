// const forgiveButton = document.getElementById("forgiveButton");
// const responseMessage = document.getElementById("responseMessage");

// forgiveButton.addEventListener("click", () => {
//   responseMessage.textContent = "Thank you for forgiving me! ❤️ You're the best!";
//   forgiveButton.style.display = "none";
// });
const forgiveButton = document.getElementById("forgiveButton");
const responseMessage = document.getElementById("responseMessage");
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");

let confettiArray = [];
let animationFrameId;

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confettiArray.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiArray.forEach((confetti, index) => {
    confetti.y += confetti.speed;
    confetti.x += Math.sin(confetti.angle) * 2;
    confetti.angle += 0.02;

    ctx.fillStyle = confetti.color;
    ctx.beginPath();
    ctx.arc(confetti.x, confetti.y, confetti.size / 2, 0, Math.PI * 2);
    ctx.fill();

    if (confetti.y > window.innerHeight) {
      confettiArray.splice(index, 1);
    }
  });
  animationFrameId = requestAnimationFrame(drawConfetti);
}

forgiveButton.addEventListener("click", () => {
  responseMessage.textContent = "Thank you for forgiving me! ❤️ You're the best!";
  forgiveButton.style.display = "none";

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  createConfetti();
  drawConfetti();

  setTimeout(() => {
    cancelAnimationFrame(animationFrameId);
  }, 5000);
});
