var proximaimg = document.getElementById("proximaimg")
var voltarimg = document.getElementById("voltarimg")
var img = document.getElementById("img")
var controle = 0

proximaimg.addEventListener("click", () => {

    if(controle == 4) {
        controle = 4
    } else {
        controle++
        img.style.opacity = 0
        setTimeout(() => {
            switch (controle) {
                case 0:
                    img.src = "img/hotel1.jpg"
                    img.style.opacity = 1
                    break;
                case 1:
                    img.src = "img/hotel2.jpeg"
                    img.style.opacity = 1
                break;
                case 2:
                    img.src = "img/hotel3.jpeg"
                    img.style.opacity = 1
                    break;
                case 3:
                    img.src = "img/hotel4.jpeg"
                    img.style.opacity = 1
                    break; 
                case 4:
                    img.src = "img/hotel5.jpeg"
                    img.style.opacity = 1
                    break; 
            }
        }, 700);
    }
})

voltarimg.addEventListener("click", () => {
    if(controle == 0) {
        controle = 0
    } else {
        controle--
        img.style.opacity = 0
        setTimeout(() => {
            switch (controle) {
                case 0:
                    img.src = "img/hotel1.jpg"
                    img.style.opacity = 1
                    break;
                case 1:
                    img.src = "img/hotel2.jpeg"
                    img.style.opacity = 1
                break;
                case 2:
                    img.src = "img/hotel3.jpeg"
                    img.style.opacity = 1
                    break;
                case 3:
                    img.src = "img/hotel4.jpeg"
                    img.style.opacity = 1
                    break; 
                case 4:
                    img.src = "img/hotel5.jpeg"
                    img.style.opacity = 1
                    break; 
            }
        }, 700);
    }
})