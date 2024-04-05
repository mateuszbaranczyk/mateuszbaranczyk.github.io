window.onload = function () {
  
  var seconds = 0o0; 
  var tens = 0o0; 
  var minutes = 0o0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');

  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
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
  }
  

  function setStyle (div) {
    if (div) {
    div.style.marginLeft = "15px";
    div.style.fontWeight = "bold";
    }
  }
  
  function startTimer () {
    var first = document.getElementById('first') || null;
    var second = document.getElementById('second') || null;
    var third = document.getElementById('third') || null;
    var fourth = document.getElementById('fourth') || null;
    var fiveth = document.getElementById('fiveth') || null;

    function resetStyle () {
      let divs = [first, seconds, second, third, fourth, fiveth];
  
      function noneStyle (div) {
        if (typeof(div) === "object") {
          div.style.marginLeft = "initial";
          div.style.fontWeight = "normal";
        }
      }
  
      divs.forEach((div) => noneStyle(div))
    }
    
    tens++; 
    if (seconds < 46 && minutes === 0) {
      resetStyle()
      setStyle(first)
    };
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds === 45){
      resetStyle()
      setStyle(second)
    }

    if (seconds > 59) {
      minutes ++;
      seconds = 0;
      appendMinutes.innerHTML = "0" + minutes;
    }

    if (seconds === 30 && minutes === 1) {
      resetStyle()
      setStyle(third)
    }
    if (seconds === 15 && minutes === 2) {
      resetStyle()
      setStyle(fourth)
    }
    if (seconds === 45 && minutes === 2) {
      resetStyle()
      setStyle(fiveth)
    }
    if (seconds === 30 && minutes === 3) {
      resetStyle()
    }
  
  }
}