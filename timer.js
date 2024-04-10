window.onload = function() {

  let seconds = 0o0;
  let tens = 0o0;
  let minutes = 0o0;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes")
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let first;
  let second;
  let third;
  let fourth;
  let fifth;
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
    first = document.getElementById('first');
    second = document.getElementById('second');
    third = document.getElementById('third');
    fourth = (document.getElementById('fourth') === undefined) ? null :
      fourth;
    fifth = (document.getElementById('fifth') === undefined) ?
      null :
      fifth;
    return [first, second, third, fourth, fifth]
  }

  function setActualPourStyle(div) {
    if (div) {
      div.style.marginLeft = "15px";
      div.style.fontWeight = "bold";
    }
  }

  function clearStyles() {
    let divs = getRecipeElements();

    function noneStyle(div) {
      if (typeof(div) === "object") {
        div.style.marginLeft = "initial";
        div.style.fontWeight = "normal";
      }
    }

    divs.forEach((div) => noneStyle(div))
  }

  function startTimer() {
    let [first, second, third, fourth, fifth] = getRecipeElements()

    tens++;
    if (seconds === 0 && minutes === 0) {
      setActualPourStyle(first)
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
      setActualPourStyle(second)
    }

    if (seconds > 59) {
      minutes++;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      appendMinutes.innerHTML = "0" + minutes;
    }

    if (seconds === 30 && minutes === 1) {
      clearStyles()
      setActualPourStyle(third)
    }
    if (seconds === 15 && minutes === 2) {
      clearStyles()
      setActualPourStyle(fourth)
    }
    if (seconds === 45 && minutes === 2) {
      clearStyles()
      setActualPourStyle(fifth)
    }
    if (seconds === 30 && minutes === 3) {
      clearStyles()
    }

  }
}