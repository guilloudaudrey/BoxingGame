// personnages 

let perso1 = {
    name: "A",
    energie: 10,
    vies: 5
}

let perso2 = {
    name: "B",
    energie: 10,
    vies: 5
}



//Attaque

function Attaque(degats, cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - degats;
    } else {
        cible.vies = cible.vies - degats;
        cible.energie = 10;
    }
}


function Bonus() {
    perso1.energie += 10;
}

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

function GameOver() {
    if ((perso1.vies < 0) || (perso2.vies < 0)) {
        alert("gameover");
    }
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



afficherPointsJ1();
afficherPointsJ2();

//event joueur 1

let bouton4 = document.querySelector(".bouton4");
bouton4.addEventListener("click", function() {
    Attaque(1, perso1);
    tremblement1();
    eclair2();
    afficherPointsJ1();
    GameOver();
})

let bouton5 = document.querySelector(".bouton5");
bouton5.addEventListener("click", function() {
    Attaque(2, perso1);
    tremblement1();
    eclair2();
    afficherPointsJ1();
    GameOver();
})

let bouton6 = document.querySelector(".bouton6");
bouton6.addEventListener("click", function() {
    Attaque(4, perso1);
    tremblement1();
    eclair2();
    afficherPointsJ1();
    GameOver();
})

//event joueur 2

let bouton1 = document.querySelector(".bouton1");
bouton1.addEventListener("click", function() {
    Attaque(1, perso2);
    tremblement2();
    eclair();
    afficherPointsJ2();
    GameOver();
})

let bouton2 = document.querySelector(".bouton2");
bouton2.addEventListener("click", function() {
    Attaque(2, perso2);
    tremblement2();
    eclair();
    afficherPointsJ2();
    GameOver();
})

let bouton3 = document.querySelector(".bouton3");
bouton3.addEventListener("click", function() {
    Attaque(4, perso2);
    tremblement2();
    eclair();
    afficherPointsJ2();
    GameOver();
})

let bonus = document.querySelector(".bonus");
bonus.addEventListener("click", function() {
    disparaitre();
    Bonus();
    afficherPointsJ1();
    GameOver();
})