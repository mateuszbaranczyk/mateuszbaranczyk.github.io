let weight
let strength
let sweetness

function calculate () {
    weight = document.getElementById("weight").value;
    strength = document.querySelector('input[name="strength"]:checked').value;
    sweetness = document.querySelector('input[name="sweetness"]:checked').value;

    console.log(weight)
    console.log(strength)
    console.log(sweetness)
}