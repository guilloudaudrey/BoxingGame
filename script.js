        let ring = document.querySelector(".ring");

        ring.addEventListener("mousemove", function(event) {
                    let positionx = event.clientX;
                    let positiony = event.clientY;
                    console.log(positionx, positiony);
                    let perso = document.querySelector(".perso");
                    perso.style.left = positionx + "px";
                    perso.style.top = positiony + "px";