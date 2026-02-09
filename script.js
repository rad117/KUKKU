const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const phrases = [
  "Better luck next life!",
  "You don't want that!",
  "Missed it!",
  "Try again later!",
  "Nope, not today!"
];

/* No button runs away AFTER hover and shows phrases */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";

  let x = Math.random() * (window.innerWidth - 200);
  let y = Math.random() * (window.innerHeight - 200);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Pick a random phrase and set it as the button text
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  noBtn.textContent = randomPhrase;
});

/* Yes button redirect */
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
