const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.queryCommandValue(".prev-btn");
const navigationDots =document.querySelector(".navigation-dots");


let numberOfImages = slideImage.length;
let slidewidth = slideImage[0].clientWidth;
//  Set up the slider

function init() {
    /*
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");
}

init();

// Create Navigation dots

function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);
    }

    navigationDots.children[0].classList.add("active");
}


//  Next Button

nextBtn.addEventListener("click", () => {
    slidesContainer.style.transform = "translateX(-"

})