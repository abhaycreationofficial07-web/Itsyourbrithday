function goToPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");

  if(num === 4) startTyping();
}

/* PAGE 1 FEATURES */

function dropBanner() {
  const banner = document.getElementById("banner");
  banner.innerText = "🎉 Happy Birthday 🎉";
  banner.classList.add("show");
}

function releaseBalloons() {
  const container = document.getElementById("balloons");

  for(let i=0;i<10;i++){
    let b = document.createElement("div");
    b.className = "balloon";
    b.innerText = "🎈";
    b.style.left = Math.random()*100 + "vw";
    container.appendChild(b);
  }
}

function showCake() {
  document.getElementById("cake").classList.remove("hidden");
}

function celebrate() {
  document.getElementById("music").play();
  alert("🎉 Celebration Started!");
}

function blowCandles() {
  document.getElementById("wishMsg").innerText = "Make a wish ✨";
  document.getElementById("next1").classList.remove("hidden");
}

/* PAGE 2 */
function openCard(card) {
  card.classList.toggle("open");
}

/* PAGE 4 Typing Effect */
const text = `🤍 Is there friendship or something else...
You will always be my best friend ❤️
Happy Birthday once again, Ankit 🎂`;

let i = 0;

function startTyping() {
  let speed = 40;
  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
