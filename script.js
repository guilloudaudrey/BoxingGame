// Modèle

let perso1 = {
    name: "A",
    energie: 10,
    vies: 2
}

let perso2 = {
    name: "B",
    energie: 10,
    vies: 2
}

function Attaquer(cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - 1;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

function Bonus() {
    perso1.energie += 10;
}

//affichage
function afficherPointsJ1() {
    let points = document.querySelector(".compteurener1");
    points.innerHTML = perso1.energie;
    let pointsvies = document.querySelector(".compteurvies1");
    pointsvies.innerHTML = perso1.vies;
}

function afficherPointsJ2() {
    let points = document.querySelector(".compteurener2");
    points.innerHTML = perso2.energie;
    let pointsvies = document.querySelector(".compteurvies2");
    pointsvies.innerHTML = perso2.vies;
}

function tremblement1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("tremble");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function tremblement2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage1.className;
    personnage2.classList.add("tremble");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function disparaitre() {
    let bonus = document.querySelector(".bonus");
    bonus.remove(bonus);

}

//event 

let bouton = document.querySelector(".bouton4");
bouton.addEventListener("click", function() {
    Attaquer(perso1);
    tremblement1();
    afficherPointsJ1();
})

let bonus = document.querySelector(".bonus");
bonus.addEventListener("click", function() {
    disparaitre();
    Bonus();
    afficherPointsJ1();
})