const formobj = document.querySelector("form");
const resultobj = document.querySelector(".result")
let resweightstr;

formobj.addEventListener("submit", function (event){
event.preventDefault();

//getting height and weight values

let height = document.querySelector("#height").value;
let weight = document.querySelector("#weight").value;

height = parseInt(height)
weight = parseInt(weight)

const res = (weight / ((height * height)/10000)).toFixed(2);
if(res < 18.6){
    resweightstr = "under weight"
}
else if( res >= 18.6 && res <= 24.9){
    resweightstr = "Normal"

}
else{
    resweightstr = "Over Weight"
}
resultobj.innerHTML = `result is ${res} you are ${resweightstr}`



})