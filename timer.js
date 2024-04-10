window.onload = function() {

  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const appendMinutes = document.getElementById("minutes")
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let seconds = 0;
  let tens = 0;
  let minutes = 0;
  let firstPour;
  let secondPour;
  let thirdPour;
  let fourthPour;
  let fifthPour;
  let Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer,
      10);
    startTimer()
  }

  buttonStop.onclick = function() {
    clearInterval(Interval);
  }


  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = 0o0;
    seconds = 0o0;
    minutes = 0o0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
    clearStyles()
  }

  function getRecipeElements() {
    firstPour = document.getElementById('firstPour');
    secondPour = document.getElementById('secondPour');
    thirdPour = document.getElementById('thirdPour');
    fourthPour = (document.getElementById('fourthPour') === undefined) ?
      null :
      fourthPour;
    fifthPour = (document.getElementById('fifthPour') === undefined) ?
      null :
      fifthPour;
    return [firstPour, secondPour, thirdPour, fourthPour, fifthPour]
  }

  function setActualPourStyle(div) {
    if (div) {
      div.style.marginLeft = "15px";
      div.style.fontWeight = "bold";
    }
  }

  function clearStyles() {
    let divs = getRecipeElements();

    divs.forEach((div) => {
      if (typeof(div) === "object") {
        div.style.marginLeft = "initial";
        div.style.fontWeight = "normal";
      }
    })
  }

  function startTimer() {
    let [firstPour, secondPour, thirdPour, fourthPour, fifthPour] =
    getRecipeElements()

    tens++;
    if (seconds === 0 && minutes === 0) {
      setActualPourStyle(firstPour)
    };
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds === 45 && minutes === 0) {
      clearStyles()
      setActualPourStyle(secondPour)
    }

    if (seconds > 59) {
      minutes++;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      appendMinutes.innerHTML = "0" + minutes;
    }

    if (seconds === 30 && minutes === 1) {
      clearStyles()
      setActualPourStyle(thirdPour)
    }
    if (seconds === 15 && minutes === 2) {
      clearStyles()
      setActualPourStyle(fourthPour)
    }
    if (seconds === 45 && minutes === 2) {
      clearStyles()
      setActualPourStyle(fifthPour)
    }
    if (seconds === 30 && minutes === 3) {
      clearStyles()
    }

  }
}