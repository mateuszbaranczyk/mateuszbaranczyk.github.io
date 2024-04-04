let weight
let strength
let sweetness

function calculate () {
  weight = document.getElementById("weight").value;
  strength = document.querySelector('input[name="strength"]:checked').value;
  sweetness = document.querySelector('input[name="sweetness"]:checked').value;
  
  getCoffeWeight(weight)
  createInitialPour(sweetness, weight)
  console.log(weight)
  console.log(strength)
  console.log(sweetness)
}

function getCoffeWeight (weight) {
  let coffeWeight = Number(weight) / 15;
  document.getElementById("coffe-weight").innerHTML += "You'll need " + Math.round(coffeWeight) + " grams of coffee.";
  
}

function createInitialPour (sweetness, weight) {
  let initialWeight = weight * 0.4;

  if (sweetness === "standard") {
    let stPoutr = Math.round(initialWeight * 0.5);
    let ndPour = Math.round(initialWeight * 0.5);
    insertInitPourHtml(stPoutr, ndPour);
  } else if (sweetness === "sweeter") {
    let stPoutr = Math.round(initialWeight * 0.4);
    let ndPour = Math.round(initialWeight * 0.6);
    insertInitPourHtml(stPoutr, ndPour);
  } else if (sweetness === "brighter") {
    let stPoutr = Math.round(initialWeight * 0.6);
    let ndPour = Math.round(initialWeight * 0.4);
    insertInitPourHtml(stPoutr, ndPour);
  }  
}

function insertInitPourHtml (stPoutr, ndPour) {
  document.getElementById("init").innerHTML += "<p> 1st pour "  + Math.round(stPoutr) + " grams of water.</p>";
  document.getElementById("init").innerHTML += "<p> 2nd pour " + Math.round(ndPour) + " grams of water.</p>";
}