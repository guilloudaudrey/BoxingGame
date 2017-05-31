let a;
let b;
let c = a + b;

let submit = document.querySelector(".inputsubmit");
let submit1 = document.querySelector(".inputsubmit1");
let submit2 = document.querySelector(".inputsubmit2");
let submit3 = document.querySelector(".inputsubmit3");

let bouton1 = document.querySelector(".bouton1");
let bouton2 = document.querySelector(".bouton2");
let bouton3 = document.querySelector(".bouton3");
let bouton4 = document.querySelector(".bouton4");
let bouton5 = document.querySelector(".bouton5");
let bouton6 = document.querySelector(".bouton6");

let jauge1 = document.querySelector("#avancement");
let jauge2 = document.querySelector("#avancement1");

let buttonbox = document.querySelector(".buttonbox");
let buttonbox2 = document.querySelector(".buttonbox2");
let buttonbox1 = document.querySelector(".buttonbox1");

let gameover = document.querySelector(".gameover");
let gameoverp = document.querySelector(".gameoverp");

let pointsener1 = document.querySelector(".compteurener1");
let pointsvies1 = document.querySelector(".compteurvies1");
let pointsener2 = document.querySelector(".compteurener2");
let pointsvies2 = document.querySelector(".compteurvies2");

let ener1 = document.querySelector(".energie1");
let ener2 = document.querySelector(".energie2");
let vies1 = document.querySelector(".vies1");
let vies2 = document.querySelector(".vies2");

let pointJ1 = document.querySelector(".compteurJ1");
let pointJ2 = document.querySelector(".compteurJ2");

let boxpointsJ1 = document.querySelector(".pointsJ1");
let boxpointsJ2 = document.querySelector(".pointsJ2");

let trophee1 = document.querySelector("#trophee1");
let trophee2 = document.querySelector("#trophee2");

let punch = new Audio('sounds/punch.mp3');
let punch2 = new Audio('sounds/punch2.mp3');
let punch3 = new Audio('sounds/punch3.mp3');
let bell = new Audio('sounds/bell.mp3');
let cheering = new Audio('sounds/cheering.mp3');
let stadium = new Audio('sounds/stadium.mp3');
let boo = new Audio('sounds/boo.mp3');
let swoosh = new Audio('sounds/swoosh.mp3');
stadium.volume = 0.3;
stadium.loop = Infinity;

// ----------------------------objets
"use strict";

let jeu = {
    turn: 0
};

let perso1 = {
    name: "A",
    energie: 10,
    vies: 0,
    points: 0,
}

let perso2 = {
    name: "B",
    energie: 10,
    vies: 0,
    points: 0,
}

//----------------------changer de joueur

function changeJoueur() {

    if (jeu.turn % 2 === 0) {
        buttonbox2.style.display = "none";
        buttonbox1.style.display = "flex";
    } else {
        buttonbox2.style.display = "none";
        buttonbox1.style.display = "none";
    }
}
//---------------------------ajouter tour

function addTurn() {
    jeu.turn = jeu.turn + 1;
}

//---------------------------actions ordi

function computerTurn() {
    let i = Math.floor(Math.random() * 3) + 1;

    if (perso1.points < 2) {
        if (i === 1) {
            addTurn();
            uppercut(perso1);
            punch.play();
            animUppercutPerso2();
            animCoupPerso1();
            jauge(jauge1, 1);
            afficherEV();
            afficherPoints();
            changeJoueur();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }

        if (i === 2) {
            addTurn();
            crochet(perso1);
            punch2.play();
            animCrochetPerso2();
            animCoupPerso1();
            jauge(jauge1, 2);
            afficherEV();
            afficherPoints();
            changeJoueur();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);

        }

        if (i === 3) {
            addTurn();
            direct(perso1);
            punch.play();
            animDirectPerso2();
            animCoupPerso1();
            jauge(jauge1, 4);
            afficherEV();
            afficherPoints();
            changeJoueur();
            gameOver();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);

        }
    }
}


//-----------------------------attaques

function uppercut(cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - 1;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 5;
    }
}

function direct(cible) {
    if (cible.energie >= 4) {
        cible.energie = cible.energie - 4;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 5;
    }
}

function crochet(cible) {
    if (cible.energie >= 2) {
        cible.energie = cible.energie - 2;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 5;
    }
}

//----------------------------afficher énergie et vies 

function afficherEV() {

    pointsener1.innerHTML = perso1.energie;
    pointsvies1.innerHTML = perso1.vies;
    pointsener2.innerHTML = perso2.energie;
    pointsvies2.innerHTML = perso2.vies;
}

//--------------------------Progression de la jauge
function jauge(elem, score) {
    if (elem.value >= score) {
        elem.value = elem.value - score;
    }
}


//----------------------------Réinitialisation de la jauge
function jaugeReinitial(elem, elem1) {
    elem.value = 20;
    elem1.value = 20;
}

// -----------------------------ajouter points

function points(personnage) {
    personnage.points = personnage.points + 1;
}

//------------------ afficher points des joueurs

function afficherPoints() {
    pointJ1.innerHTML = perso1.points;
    pointJ2.innerHTML = perso2.points;
}
//-----------------réinitialiser l'énergie et les vies

function reinitialiser() {
    perso1.energie = 10;
    perso1.vies = 0;
    perso2.energie = 10;
    perso2.vies = 0;
}

//------------------------- Fin de Manche

function finDeManche(personnage, cible) {
    if (cible.vies < 0) {
        points(personnage);
        afficherPoints();
        jaugeReinitial(jauge1, jauge2);
        reinitialiser();
        afficherEV();
        changeJoueur();
        gameOver();


    }
}

//------------------------Gameover

function gameOver() {
    let joueur1 = document.querySelector(".perso1");
    let joueur2 = document.querySelector(".perso2");
    let joueur1battu = document.querySelector(".perso1_battu");
    let joueur2battu = document.querySelector(".perso2_battu");

    if (perso1.points === 2) {
        animFaintPerso2();
        setTimeout(function() {
            joueur2battu.style.display = "block";
            joueur2.style.display = "none";
        }, 500);

        setTimeout(function() {
            ener1.style.display = "none";
            ener2.style.display = "none";
            vies1.style.display = "none";
            vies2.style.display = "none";
            jauge1.style.display = "none";
            jauge2.style.display = "none";
            trophee1.style.display = "inline-block";
            let ring = document.querySelector(".ring");
            ring.style.display = "none";
            buttonbox.style.display = "none";
            gameover.style.display = "block";
            gameoverp.innerHTML = "Bravo !"
        }, 2500);
    }
    if (perso2.points === 2) {
        animFaintPerso1();
        setTimeout(function() {
            joueur1battu.style.display = "block";
            joueur1.style.display = "none";
        }, 500);

        setTimeout(function() {
            ener1.style.display = "none";
            ener2.style.display = "none";
            vies1.style.display = "none";
            vies2.style.display = "none";
            jauge1.style.display = "none";
            jauge2.style.display = "none";
            trophee2.style.display = "inline-block";
            let ring = document.querySelector(".ring");
            ring.style.display = "none";
            buttonbox.style.display = "none";
            gameover.style.display = "block";
            gameoverp.innerHTML = "Perdu !"
        }, 2500);
    }
}

//------------------------ Réinitialise la question et le champs de saisie


function reinitialiserQuestion() {
    let question = document.querySelector(".question1");
    question.innerHTML = "";
    let reponse = document.querySelector(".inputtext");
    reponse.value = "";
}

//-----------------------------animation du compteur de points

function flash(box) {
    let classe = box.className;
    box.classList.add("flash");
    box.addEventListener("animationend", function() {
        box.className = classe;
    })
}

//--------------------------------- animations perso 1

function animUppercutPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1upper");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animCrochetPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1crochet");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animDirectPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1direct");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animFeintePerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1feinte");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animCoupPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1coup");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animFaintPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("boxerfaint");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

//---------------------------animations perso 2

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

function animFaintPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2faint");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}



//----------------------------------- événements
bell.play();
stadium.play();
afficherEV();
afficherEV();
changeJoueur();

//-------------------------------event bouton submit1

submit1.addEventListener("click", function() {
    compareQuestion1();
    reinitialiserQuestion();
    afficherEV();
    afficherPoints();
    addTurn();
    changeJoueur();
    gameOver();
    submit1.style.display = "none";
    submit.style.display = "block";
    setTimeout(function() {
        computerTurn();
    }, 1500);


})

//--------------------------------event bouton submit2

submit2.addEventListener("click", function() {
    compareQuestion2();
    reinitialiserQuestion();
    afficherEV();
    afficherPoints();
    addTurn();
    changeJoueur();
    gameOver();
    submit2.style.display = "none";
    submit.style.display = "block";
    setTimeout(function() {
        computerTurn();
    }, 1500);

})

//---------------------------------event bouton submit3

submit3.addEventListener("click", function() {
    comparerQuestion3();
    reinitialiserQuestion();
    afficherEV();
    afficherPoints();
    addTurn();
    changeJoueur();
    gameOver();
    submit3.style.display = "none";
    submit.style.display = "block";
    setTimeout(function() {
        computerTurn();
    }, 1500);



})

// -----------------------------event boutons attaques joueur 1

bouton1.addEventListener("click", function() {
    affichQuestion1();
    submit.style.display = "none"
    submit1.style.display = "block";
    submit2.style.display = "none";
    submit3.style.display = "none";


})

bouton2.addEventListener("click", function() {
    affichQuestion2();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "block";
    submit3.style.display = "none";

})

bouton3.addEventListener("click", function() {
    afficherQuestion3();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "none";
    submit3.style.display = "block";
})

//---------------------------------event boutons attaques joueur 2


bouton4.addEventListener("click", function() {
    affichQuestion1();
    submit.style.display = "none";
    submit1.style.display = "block";
    submit2.style.display = "none";
    submit3.style.display = "none";

})

bouton5.addEventListener("click", function(e) {
    affichQuestion2();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "block";
    submit3.style.display = "none";
})

bouton6.addEventListener("click", function() {
    afficherQuestion3();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "none";
    submit3.style.display = "block";
})


//-------------------------Afficher question 1

function affichQuestion1() {
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    let question = document.querySelector(".question1");
    question.innerHTML = a + " + " + b;
}

//-------------------------Afficher question 2

function affichQuestion2() {
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    let question = document.querySelector(".question1");
    question.innerHTML = a + " x " + b;
}

//--------------------------Afficher question 3

function afficherQuestion3() {
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    let question = document.querySelector(".question1");
    question.innerHTML = "(" + a + " x " + b + ")" + " + " + "(" + a + " x " + b + ")";
}

//-------------------------Comparer réponse et solution question 1

function compareQuestion1() {
    let c = a + b;
    let reponse = document.querySelector(".inputtext").value;
    if (Number(reponse) === c) {
        uppercut(perso2);
        punch.play();
        cheering.play();
        animUppercutPerso1();
        animCoupPerso2();
        jauge(jauge2, 1);
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    } else {
        animUppercutPerso1();
        animFeintePerso2();
        swoosh.play();
        setTimeout(function() {
            boo.play();
        }, 500);
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);

    }
}


//-------------------------Comparer réponse et solution question 2

function compareQuestion2() {
    let c = a * b;
    let reponse = document.querySelector(".inputtext").value;

    if (Number(reponse) === c) {
        crochet(perso2);
        punch2.play();
        cheering.play();
        animCrochetPerso1();
        animCoupPerso2();
        jauge(jauge2, 2);
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    } else {
        animCrochetPerso1();
        animFeintePerso2();
        swoosh.play();
        setTimeout(function() {
            boo.play();
        }, 500);
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    }
}


//---------------------------- Comparer réponse et solution question 3

function comparerQuestion3() {
    let c = (a * b) + (a * b);

    let reponse = document.querySelector(".inputtext").value;
    if (Number(reponse) === c) {
        direct(perso2);
        punch3.play();
        cheering.play();
        animDirectPerso1();
        animCoupPerso2();
        jauge(jauge2, 4);
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    } else {
        animDirectPerso1();
        animFeintePerso2();
        swoosh.play();
        setTimeout(function() {
            boo.play();
        }, 500);
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    }
}