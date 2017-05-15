// Modèle

let perso1 = {
    name: "A",
    energie: 100,
    vies: 5
}

let perso2 = {
    name: "B",
    energie: 100,
    vies: 5
}

function Attaquer(cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - 5;
    } else {
        cible.vies = cible.vies - 1;
    }
}

/*console.log(perso1);
console.log(Attaquer(perso2));
console.log(perso2);
console.log(Attaquer(perso2));
console.log(perso2);
console.log(Attaquer(perso2));
console.log(perso2);*/

//afficher
function afficherPointsJ1() {
    let energiej1 = document.createElement("p");
    energiej1.innerHTML = perso1.energie;
    document.querySelector(".energie1").appendChild(energiej1);
    let viesj1 = document.createElement("p");
    viesj1.innerHTML = perso1.vies;
    document.querySelector(".vies1").appendChild(viesj1);
}

function afficherPointsJ2() {
    let energiej2 = document.createElement("p");
    energiej2.innerHTML = perso2.energie;
    document.querySelector(".energie2").appendChild(energiej2);
    let viesj2 = document.createElement("p");
    viesj2.innerHTML = perso2.vies;
    document.querySelector(".vies2").appendChild(viesj2);
}

afficherPointsJ1();
afficherPointsJ2();

let bouton = document.querySelector(".bouton");
bouton.addEventListener("click", function() {
    Attaquer(perso2);
    afficherPointsJ2();
})