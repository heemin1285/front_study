const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = { x: 300, y: 200, size: 10, speed: 3 };
const citizens = Array.from({ length: 10 }, () => ({
  x: Math.random() * 580,
  y: Math.random() * 380,
  size: 8,
  rescued: false
}));
const zombies = Array.from({ length: 3 }, () => ({
  x: Math.random() * 580,
  y: Math.random() * 380,
  size: 12
}));
let keys = {};
let gameOver = false;
let timeLeft = 60;

// 키보드 조작
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// ⏱️ 타이머
const timer = setInterval(() => {
  if (!gameOver) {
    timeLeft--;
    if (timeLeft <= 0) {
      gameOver = true;
      alert("⏰ Time's up! Game Over!");
    }
  }
}, 1000);

// 📱 모바일 버튼 조작
function setupMobileControls() {
  const directions = ['up', 'down', 'left', 'right'];
  directions.forEach(dir => {
    const btn = document.getElementById(dir);
    btn.addEventListener('touchstart', () => keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = true);
    btn.addEventListener('touchend', () => keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = false);
  });
}
setupMobileControls();

function isColliding(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y) < a.size + b.size;
}

function update() {
  if (gameOver) return;

  // 이동
  if (keys['ArrowUp']) player.y -= player.speed;
  if (keys['ArrowDown']) player.y += player.speed;
  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;

  // 구조
  for (const citizen of citizens) {
    if (!citizen.rescued && isColliding(player, citizen)) {
      citizen.rescued = true;
    }
  }

  // 좀비 추적
  for (const zombie of zombies) {
    let dx = player.x - zombie.x;
    let dy = player.y - zombie.y;
    let dist = Math.hypot(dx, dy);
    zombie.x += (dx / dist) * 1;
    zombie.y += (dy / dist) * 1;

    if (isColliding(player, zombie)) {
      gameOver = true;
      alert("☠️ You were caught by a zombie!");
    }
  }

  if (citizens.every(c => c.rescued)) {
    gameOver = true;
    alert("🎉 You rescued everyone! You win!");
  }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어
  ctx.fillStyle = 'lime';
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();

  // 시민
  for (const citizen of citizens) {
    if (!citizen.rescued) {
      ctx.fillStyle = 'cyan';
      ctx.beginPath();
      ctx.arc(citizen.x, citizen.y, citizen.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 좀비
  for (const zombie of zombies) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(zombie.x, zombie.y, zombie.size, 0, Math.PI * 2);
    ctx.fill();
  }

  // HUD
  ctx.fillStyle = 'white';
  ctx.font = '16px Arial';
  ctx.fillText(`Rescued: ${citizens.filter(c => c.rescued).length} / ${citizens.length}`, 10, 20);
  ctx.fillText(`Time Left: ${timeLeft}s`, 10, 40);
}

function gameLoop() {
  update();
  if (!gameOver) {
    requestAnimationFrame(gameLoop);
  }
}

gameLoop();
