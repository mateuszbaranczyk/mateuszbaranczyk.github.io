function calculate() {
  let weight = document.getElementById("weight").value;
  let strength = document.querySelector('input[name="strength"]:checked').value;
  let sweetness = document.querySelector('input[name="sweetness"]:checked').value;

  clearDivs();
  getCoffeWeight(weight);
  createInitialPour(sweetness, weight);
  createPourOver(strength, weight);
}

function getCoffeWeight(weight) {
  let coffeWeight = Number(weight) / 15;
  document.getElementById("coffe-weight").innerHTML += "<h3>You'll need " +
    Math.round(coffeWeight) + " grams of coffee.</h3>";

}

function createInitialPour(sweetness, weight) {
  let initialWeight = weight * 0.4;

  if (sweetness === "standard") {
    let stPour = Math.round(initialWeight * 0.5);
    let ndPour = Math.round(initialWeight * 0.5);
    insertInitPourHtml(stPour, ndPour);
  } else if (sweetness === "sweeter") {
    let stPour = Math.round(initialWeight * 0.4);
    let ndPour = Math.round(initialWeight * 0.6);
    insertInitPourHtml(stPour, ndPour);
  } else {
    let stPour = Math.round(initialWeight * 0.6);
    let ndPour = Math.round(initialWeight * 0.4);
    insertInitPourHtml(stPour, ndPour);
  }
}

function insertInitPourHtml(stPour, ndPour) {
  document.getElementById("init").innerHTML += "<li id='firstPour'>At the beggining pour " +
    Math.round(stPour) + " grams of water</li>";
  document.getElementById("init").innerHTML +=
    "<li id='secondPour'>" +
    Math.round(ndPour) + " grams of water - " + Math.round(stPour + ndPour) +
    " g total (0:45)</li>";
}

function createPourOver(strength, weight) {
  let restWater = Math.round(weight * 0.6);
  let initPour = Math.round(weight * 0.4);
  if (strength === "soft") {
    document.getElementById("pour-over").innerHTML +=
      "<li id='thirdPour'>" + Math.round(restWater) +
      " grams of water - " + Math.round(initPour + restWater) +
      " g total (1:30)</li>";
  } else if (strength === "medium") {
    document.getElementById("pour-over").innerHTML +=
      "<li id='thirdPour'>" + Math.round(restWater / 2) +
      " grams of water - " + Math.round(initPour + restWater / 2) +
      " g total (1:30)</li>";
    document.getElementById("pour-over").innerHTML +=
      "<li id='fourthPour'>" + Math.round(restWater / 2) +
      " grams of water - " + Math.round(initPour + restWater) +
      " g total (2:15)</li>";
  } else {
    document.getElementById("pour-over").innerHTML +=
      "<li id='thirdPour'>" + Math.round(restWater / 3) +
      " grams of water - " + Math.round(initPour + restWater / 3) +
      " g total (1:30)</li>";
    document.getElementById("pour-over").innerHTML +=
      "<li id='fourthPour'>" + Math.round(restWater / 3) +
      " grams of water - " + Math.round(initPour + restWater / 3 + restWater /
        3) + " g total (2:15)</li>";
    document.getElementById("pour-over").innerHTML +=
      "<li id='fifthPour'>" + Math.round(restWater / 3) +
      " grams of water - " + Math.round(initPour + restWater) +
      " g total (2:45)</li>";
  }
  document.getElementById("pour-over").innerHTML +=
    "<li id='ending'>Remove the coffee dripper after 3:30</li>";
  showTimer();
}

function clearDivs() {
  document.getElementById("coffe-weight").innerHTML = "";
  document.getElementById("init").innerHTML = "";
  document.getElementById("pour-over").innerHTML = "";
}

function showTimer() {
  let timer = document.getElementsByClassName("timer");
  let div = Object.entries(timer);
  div.forEach((element) => { element[1].style.visibility = "visible" });
}