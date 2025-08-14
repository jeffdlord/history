const events = [
  { title: "Moon Landing", year: 1969, link: "https://en.wikipedia.org/wiki/Moon_landing" },
  { title: "Berlin Wall Falls", year: 1989, link: "https://en.wikipedia.org/wiki/Berlin_Wall" },
  { title: "iPhone Released", year: 2007, link: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)" },
  { title: "Declaration of Independence", year: 1776, link: "https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence" },
  { title: "First Website Goes Live", year: 1991, link: "https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web" }
];

let current = [];
let streak = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function startGame() {
  shuffle(events);
  pickPair();
  updateStreak();
}

function pickPair() {
  current = [events[0], events[1]];
  document.getElementById("cardA").innerHTML = `<a href="\${current[0].link}" target="_blank">\${current[0].title}</a>`;
  document.getElementById("cardB").innerHTML = `<a href="\${current[1].link}" target="_blank">\${current[1].title}</a>`;
  document.getElementById("feedback").textContent = "";
}

function updateStreak() {
  document.getElementById("streak").textContent = "Streak: " + streak;
}

function judgeSwipe(direction) {
  const [a, b] = current;
  let correct = false;
  if (direction === "left" && a.year < b.year) correct = true;
  if (direction === "right" && a.year > b.year) correct = true;

  if (correct) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    streak++;
  } else {
    document.getElementById("feedback").textContent = `❌ Wrong! \${a.year} vs \${b.year}`;
    streak = 0;
  }
  updateStreak();
  setTimeout(() => {
    shuffle(events);
    pickPair();
  }, 1500);
}

document.getElementById("newGameBtn").addEventListener("click", startGame);
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") judgeSwipe("left");
  if (e.key === "ArrowRight") judgeSwipe("right");
});

window.onload = startGame;
