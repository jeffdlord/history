
const events = [
  { title: "Moon landing", year: 1969, wiki: "https://en.wikipedia.org/wiki/Moon_landing" },
  { title: "Fall of Berlin Wall", year: 1989, wiki: "https://en.wikipedia.org/wiki/Berlin_Wall" },
  { title: "Invention of the Internet", year: 1983, wiki: "https://en.wikipedia.org/wiki/History_of_the_Internet" },
  { title: "Start of World War II", year: 1939, wiki: "https://en.wikipedia.org/wiki/World_War_II" },
  { title: "Signing of the Declaration of Independence", year: 1776, wiki: "https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence" }
];

let streak = 0;

function newGame() {
  const current = [events[Math.floor(Math.random() * events.length)], events[Math.floor(Math.random() * events.length)]];
  document.getElementById("eventA").innerHTML = `<a href="${current[0].wiki}" target="_blank">${current[0].title}</a>`;
  document.getElementById("eventB").innerHTML = `<a href="${current[1].wiki}" target="_blank">${current[1].title}</a>`;

  const result = document.getElementById("result");
  result.innerText = "";

  const correctDirection = current[0].year < current[1].year ? "left" : "right";

  function handleAnswer(direction) {
    if (direction === correctDirection) {
      streak++;
      result.innerText = "✅ Correct!";
    } else {
      streak = 0;
      result.innerText = "❌ Wrong!";
    }
    document.getElementById("streak").innerText = `Streak: ${streak}`;
    newGame();
  }

  document.getElementById("leftBtn").onclick = () => handleAnswer("left");
  document.getElementById("rightBtn").onclick = () => handleAnswer("right");

  document.onkeydown = function (e) {
    if (e.key === "ArrowLeft") handleAnswer("left");
    if (e.key === "ArrowRight") handleAnswer("right");
  };
}

window.onload = newGame;
