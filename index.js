let weight
let strength
let sweetness

function calculate () {
  weight = document.getElementById("weight").value;
  strength = document.querySelector('input[name="strength"]:checked').value;
  sweetness = document.querySelector('input[name="sweetness"]:checked').value;
  
  clearDivs()
  getCoffeWeight(weight)
  createInitialPour(sweetness, weight)
  createPourOver(strength, weight)
}

function getCoffeWeight (weight) {
  let coffeWeight = Number(weight) / 15;
  document.getElementById("coffe-weight").innerHTML += "<h3>You'll need " + Math.round(coffeWeight) + " grams of coffee.</h3>";
  
}

function createInitialPour (sweetness, weight) {
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

function insertInitPourHtml (stPour, ndPour) {
  document.getElementById("init").innerHTML += "<li> 1st pour "  + Math.round(stPour) + " grams of water.</li>";
  document.getElementById("init").innerHTML += "<li> 2nd pour " + Math.round(ndPour) + " grams of water.</li>";
}

function createPourOver (strength, weight) {
  let restWater = Math.round(weight * 0.6)
  if (strength === "soft") {
    document.getElementById("pour-over").innerHTML += "<li> 3st pour "  + Math.round(restWater) + " grams of water.</li>";
  } else if (strength === "medium"){
    document.getElementById("pour-over").innerHTML += "<li> 3st pour "  + Math.round(restWater / 2) + " grams of water.</li>";
    document.getElementById("pour-over").innerHTML += "<li> 4st pour "  + Math.round(restWater / 2) + " grams of water.</li>";
  } else {
    document.getElementById("pour-over").innerHTML += "<li> 3st pour "  + Math.round(restWater / 3) + " grams of water.</li>";
    document.getElementById("pour-over").innerHTML += "<li> 4st pour "  + Math.round(restWater / 3) + " grams of water.</li>";
    document.getElementById("pour-over").innerHTML += "<li> 5st pour "  + Math.round(restWater / 3) + " grams of water.</li>";
  }
  showTimer()
}

function clearDivs () {
  document.getElementById("coffe-weight").innerHTML = ""
  document.getElementById("init").innerHTML = ""
  document.getElementById("pour-over").innerHTML = ""
}

function showTimer () {
  let timer = document.getElementsByClassName("timer")
  let div = Object.entries(timer)
  div.forEach((element) => {element[1].style.visibility = "visible"});
}