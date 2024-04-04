const countdownEl = document.querySelector(".countdown");
const progressBarEl = document.querySelector(".progress");

let remainingTime = 210; // seconds
const totalTime = remainingTime;

function countdown() {
  if (remainingTime > 0) {
    // update countdown timer
    countdownEl.textContent = remainingTime;

    // update progress bar
    const progress = ((totalTime - remainingTime) / totalTime) * 100;
    progressBarEl.style.width = `${progress}%`;

    remainingTime--;
    setTimeout(countdown, 1000);
  } else {
    // countdown finished
    progressBarEl.style.width = "100%";
    countdownEl.textContent = "Time's up!";
  }
}
