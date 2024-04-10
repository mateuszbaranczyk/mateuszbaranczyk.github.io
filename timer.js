window.onload = function() {

  var seconds = 0o0;
  var tens = 0o0;
  var minutes = 0o0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var first;
  var second;
  var third;
  var fourth;
  var fifth;
  var Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer,
      10);
    startTimer(first, second, third, fourth, fifth)
  }

  buttonStop.onclick = function() {
    clearInterval(Interval);
  }


  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    clearStyle(first, second, third, fourth, fifth)
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

  function setStyle(div) {
    if (div) {
      div.style.marginLeft = "15px";
      div.style.fontWeight = "bold";
    }
  }

  function clearStyle() {
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
      clearStyle()
      setStyle(first)
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
      clearStyle()
      setStyle(second)
    }

    if (seconds > 59) {
      minutes++;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      appendMinutes.innerHTML = "0" + minutes;
    }

    if (seconds === 30 && minutes === 1) {
      clearStyle()
      setStyle(third)
    }
    if (seconds === 15 && minutes === 2) {
      clearStyle()
      setStyle(fourth)
    }
    if (seconds === 45 && minutes === 2) {
      clearStyle()
      setStyle(fifth)
    }
    if (seconds === 30 && minutes === 3) {
      clearStyle()
    }

  }
}