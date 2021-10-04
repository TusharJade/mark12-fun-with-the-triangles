var sides = document.querySelectorAll(".sides");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function calculating(a, b){
    var thesum = a*a + b*b;
    return thesum;
}

function squares (){
 var thesum = calculating(Number(sides[0].value), Number(sides[1].value));
 var length = Math.sqrt(thesum).toFixed(2);

output.innerText="The length of hypotenuse is " + length + "unites"
}

btn.addEventListener("click", squares);