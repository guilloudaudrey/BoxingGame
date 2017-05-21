// ----------------------------personnages 
"use strict";

let jeu = {
    turn: 0
};

let perso1 = {
    name: "A",
    energie: 10,
    vies: 5,
    points: 0,
}

let perso2 = {
    name: "B",
    energie: 10,
    vies: 5,
    points: 0,
}

//----------------------changer de joueur

function changeJoueur() {
    let bonusbox2 = document.querySelector(".bonusbox2");
    let bonusbox1 = document.querySelector(".bonusbox1");
    if (jeu.turn % 2 === 0) {
        bonusbox2.style.display = "none";
        bonusbox1.style.display = "flex";
    } else {
        bonusbox2.style.display = "flex";
        bonusbox1.style.display = "none";

    }
}

//---------------------------ajouter tour

function addTurn() {
    jeu.turn = jeu.turn + 1;
}

//-----------------------------attaques

function uppercut(cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - 1;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

function direct(cible) {
    if (cible.energie >= 4) {
        cible.energie = cible.energie - 4;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

function crochet(cible) {
    if (cible.energie >= 2) {
        cible.energie = cible.energie - 2;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

//----------------------------afficher énergie et vies 

function afficherEV() {
    let pointsener1 = document.querySelector(".compteurener1");
    pointsener1.innerHTML = perso1.energie;
    let pointsvies1 = document.querySelector(".compteurvies1");
    pointsvies1.innerHTML = perso1.vies;
    let pointsener2 = document.querySelector(".compteurener2");
    pointsener2.innerHTML = perso2.energie;
    let pointsvies2 = document.querySelector(".compteurvies2");
    pointsvies2.innerHTML = perso2.vies;
}

// -----------------------------ajouter points

function points(personnage) {
    personnage.points = personnage.points + 1;
}

//-----------------réinitialiser l'énergie et les vies

function reinitialiser() {
    perso1.energie = 10;
    perso1.vies = 5;
    perso2.energie = 10;
    perso2.vies = 5;
}

//------------------------- Fin de Manche

function finDeManche(personnage, cible) {
    if (cible.vies < 0) {
        points(personnage);
        reinitialiser();
        afficherEV();
        addTurn();
        changeJoueur();
    }
}

//------------------ afficher le score des joueurs

function afficherPoints() {
    let pointJ1 = document.querySelector(".compteurJ1");
    pointJ1.innerHTML = perso1.points;
    let pointJ2 = document.querySelector(".compteurJ2");
    pointJ2.innerHTML = perso2.points;
}

//----------------------------------animations

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
    let classes = personnage2.className;
    personnage2.classList.add("tremble");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function eclair() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("eclair");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function eclair2() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("eclair");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

// animations perso 1

function uppercutPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1upper");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function crochetPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1crochet");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function directPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1direct");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}


function coupPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1coup");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function etourdPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1etourd");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function evanPerso() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("boxerevan");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

//animations perso 2

function animUppercutPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2upper");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })

}

function animCrochetPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2crochet");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })

}

function animDirectPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2direct");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function animFeintePerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2feinte");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function animCoupPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2coup");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

//----------------------------------- événements

afficherEV();
afficherEV();
changeJoueur();

//---------------------------------event joueur 2

let bouton4 = document.querySelector(".bouton4");
bouton4.addEventListener("click", function() {
    uppercut(perso1);
    animUppercutPerso2();
    etourdPerso1();
    afficherEV();
    afficherPoints();
    finDeManche(perso1, perso2);
    finDeManche(perso2, perso1);
})

let bouton5 = document.querySelector(".bouton5");
bouton5.addEventListener("click", function(e) {
    crochet(perso1);
    animCrochetPerso2();
    coupPerso1();
    afficherEV();
    afficherPoints();
    finDeManche(perso1, perso2);
    finDeManche(perso2, perso1);
})

let bouton6 = document.querySelector(".bouton6");
bouton6.addEventListener("click", function() {
    direct(perso1);
    animDirectPerso2();
    coupPerso1();
    afficherEV();
    afficherPoints();
    finDeManche(perso1, perso2);
    finDeManche(perso2, perso1);
})

// -----------------------------event joueur 1

let bouton1 = document.querySelector(".bouton1");
bouton1.addEventListener("click", function() {
    uppercut(perso2);
    uppercutPerso1();
    animCoupPerso2();
    afficherEV();
    afficherPoints();
    finDeManche(perso1, perso2);
    finDeManche(perso2, perso1);
})

let bouton2 = document.querySelector(".bouton2");
bouton2.addEventListener("click", function() {
    crochet(perso2);
    crochetPerso1();
    animCoupPerso2();
    afficherEV();
    afficherPoints();
    finDeManche(perso1, perso2);
    finDeManche(perso2, perso1);
})

let bouton3 = document.querySelector(".bouton3");
bouton3.addEventListener("click", function() {
    direct(perso2);
    directPerso1();
    animCoupPerso2();
    afficherEV();
    afficherPoints();
    finDeManche(perso1, perso2);
    finDeManche(perso2, perso1);
})

/*let bonus = document.querySelector(".bonus");
bonus.addEventListener("click", function() {
    disparaitre();
    Bonus();
    afficherPointsJ1();
    GameOver();
})*/