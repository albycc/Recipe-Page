let skagenRecipe = document.getElementById("skagen-toast");
let salmonTeriyaki = document.getElementById("salmon-teriyaki");
let chocolateMousse = document.getElementById("chocolate-mousse");

let imageBackground = document.getElementsByClassName("foodBackground")[0];
let recipePageElem = document.getElementsByClassName("recipePage")[0]; 
const scrollOffset = 700;
let currentRecipe = "skagen";

window.addEventListener("scroll", ()=>{
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //console.log("window scroll pos: ", scrollTop);

    //found recipe of chocolate mousse
    if(scrollTop > chocolateMousse.offsetTop - scrollOffset && currentRecipe !== "mousse"){
        recipePageElem.style.backgroundColor = "rgb(223, 238, 252)";
        imageBackground.setAttribute("style", "background-image:url('img/mousse.jpg')");
        console.log("window scroll pos: ", scrollTop);
        console.log("Chocolate Mousse pos: ", chocolateMousse.offsetTop);
        currentRecipe = "mousse";
    }

    //found recipe of salmon teriyaki
    else if(scrollTop > salmonTeriyaki.offsetTop - scrollOffset 
        && scrollTop < chocolateMousse.offsetTop - scrollOffset
        && currentRecipe !== "salmon"){

        recipePageElem.style.backgroundColor = "rgb(253, 245, 234)";
        imageBackground.setAttribute("style", "background-image:url('img/teriyaki.jpg')");
        console.log("window scroll pos: ", scrollTop);
        console.log("Salmon Teriyaki pos: ", salmonTeriyaki.offsetTop);
        currentRecipe = "salmon";
    }

    //found recipe of skagen toast
    else if(scrollTop > skagenRecipe.offsetTop - scrollOffset 
        && scrollTop < salmonTeriyaki.offsetTop - scrollOffset
        && currentRecipe !== "skagen"){
            
        recipePageElem.style.backgroundColor = "rgb(231, 245, 214)";
        imageBackground.setAttribute("style", "background-image:url('img/skagen.jpg')");
        console.log("window scroll pos: ", scrollTop);
        console.log("Skagen pos:", skagenRecipe.offsetTop);
        currentRecipe = "skagen";
    }
    //console.log(scrollTop);
});