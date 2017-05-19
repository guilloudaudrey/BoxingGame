// ----------------------------personnages 

let perso1 = {
    name: "A",
    energie: 10,
    vies: 5,
    points: 0,
    turn: 0
}

let perso2 = {
    name: "B",
    energie: 10,
    vies: 5,
    points: 0,
    turn: 0
}

//----------------------changer de jouer

function ChangeJoueur() {
    if (perso1.turn % 2 === 0) {
        alert("tour du joueur 1");
    } else {
        alert("tour du joueur 2");
    }
}

//---------------------------ajouter tour

function addTurn(perso) {
    perso.turn = perso.turn + 1;
}

//-----------------------------attaques

function Uppercut(cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - 1;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

function Direct(cible) {
    if (cible.energie >= 4) {
        cible.energie = cible.energie - 4;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

function Crochet(cible) {
    if (cible.energie >= 2) {
        cible.energie = cible.energie - 2;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 10;
    }
}

//----------------------------afficher énergie et vies 

function afficherEVJ1() {
    let pointsener = document.querySelector(".compteurener1");
    pointsener.innerHTML = perso1.energie;
    let pointsvies = document.querySelector(".compteurvies1");
    pointsvies.innerHTML = perso1.vies;
}

function afficherEVJ2() {
    let pointsener = document.querySelector(".compteurener2");
    pointsener.innerHTML = perso2.energie;
    let pointsvies = document.querySelector(".compteurvies2");
    pointsvies.innerHTML = perso2.vies;
}

// -----------------------------ajouter points

function Points(personnage) {
    personnage.points = personnage.points + 1;
}

//-----------------réinitialiser l'énergie et les vies

function ReinitialiserJ1() {
    perso1.energie = 10;
    perso1.vies = 5;
}

function ReinitialiserJ2() {
    perso2.energie = 10;
    perso2.vies = 5;
}

//------------------------- game over

function GameOver(personnage, cible) {
    if (cible.vies < 0) {
        Points(personnage);
        alert("gameover");
        ReinitialiserJ1();
        afficherEVJ1();
        ReinitialiserJ2();
        afficherEVJ2();
        addTurn(perso1);
        addTurn(perso2);
        ChangeJoueur();
    }
}

//------------------ afficher le score du joueur 1

function AfficherPoints1() {
    let pointJ1 = document.querySelector(".compteurJ1");
    pointJ1.innerHTML = perso1.points;
}

// afficher le score du joueur 2
function AfficherPoints2() {
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

function disparaitre() {
    let bonus = document.querySelector(".bonus");
    bonus.remove(bonus);

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


//----------------------------------- événements

afficherEVJ1();
afficherEVJ2();
ChangeJoueur();

//---------------------------------event joueur 2

let bouton4 = document.querySelector(".bouton4");
bouton4.addEventListener("click", function() {
    Uppercut(perso1);
    tremblement1();
    eclair2();
    afficherEVJ1();
    GameOver(perso1, perso2);
    GameOver(perso2, perso1);
    AfficherPoints1();
    AfficherPoints2();
})

let bouton5 = document.querySelector(".bouton5");
bouton5.addEventListener("click", function() {
    Crochet(perso1);
    tremblement1();
    eclair2();
    afficherEVJ1();
    GameOver(perso1, perso2);
    GameOver(perso2, perso1);;
    AfficherPoints1();
    AfficherPoints2();
})

let bouton6 = document.querySelector(".bouton6");
bouton6.addEventListener("click", function() {
    Direct(perso1);
    tremblement1();
    eclair2();
    afficherEVJ1();
    GameOver(perso1, perso2);
    GameOver(perso2, perso1);
    AfficherPoints1();
    AfficherPoints2();
})

// -----------------------------event joueur 1

let bouton1 = document.querySelector(".bouton1");
bouton1.addEventListener("click", function() {
    Uppercut(perso2);;
    tremblement2();
    eclair();
    afficherEVJ2();
    GameOver(perso1, perso2);
    GameOver(perso2, perso1);
    AfficherPoints2();
    AfficherPoints1();
})

let bouton2 = document.querySelector(".bouton2");
bouton2.addEventListener("click", function() {
    Crochet(perso2);
    tremblement2();
    eclair();
    afficherEVJ2();
    GameOver(perso1, perso2);
    GameOver(perso2, perso1);
    AfficherPoints2();
    AfficherPoints1();
})

let bouton3 = document.querySelector(".bouton3");
bouton3.addEventListener("click", function() {
    Direct(perso2);;
    tremblement2();
    eclair();
    afficherEVJ2();
    GameOver(perso1, perso2);
    GameOver(perso2, perso1);
    AfficherPoints2();
    AfficherPoints1();
})

/*let bonus = document.querySelector(".bonus");
bonus.addEventListener("click", function() {
    disparaitre();
    Bonus();
    afficherPointsJ1();
    GameOver();
})*/