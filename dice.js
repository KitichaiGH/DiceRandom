let images =["./content/dice-1.svg",
"./content/dice-2.svg",
"./content/dice-3.svg",
"./content/dice-4.svg",
"./content/dice-5.svg",
"./content/dice-6.svg"]
let dice = document.querySelectorAll("img")

function rolldice(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*5);
        let dieTwoValue = Math.floor(Math.random()*6);
        let dieThreeValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue,dieThreeValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
    },
    1000
    );
}