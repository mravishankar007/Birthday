// =====================================
// Happy Birthday Vikash ❤️
// From Ravi
// =====================================

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 3000);

});

// ---------------- Typing Animation ----------------

const text = "VIKASH ❤️";

let index = 0;

function typeText() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 150);

    }

}

typeText();


// ---------------- Gift ----------------

const gift = document.getElementById("gift");

gift.onclick = () => {

    document.getElementById("giftMessage").style.display = "block";

    confetti({

        particleCount: 250,

        spread: 120,

        origin: {
            y: 0.6
        }

    });

}


// ---------------- Music ----------------

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';

        playing = false;

    }

}


// ---------------- Celebrate Button ----------------

document.getElementById("celebrateBtn").onclick = () => {

    launchFireworks();

}


// ---------------- Cake ----------------

document.querySelector(".cake").onclick = () => {

    confetti({

        particleCount: 400,

        spread: 180,

        origin: {
            y: 0.5
        }

    });

    launchFireworks();

}


// ---------------- Fireworks ----------------

function launchFireworks() {

    let duration = 5000;

    let end = Date.now() + duration;

    let interval = setInterval(() => {

        if (Date.now() > end) {

            clearInterval(interval);

            return;

        }

        confetti({

            particleCount: 80,

            startVelocity: 50,

            spread: 360,

            origin: {

                x: Math.random(),

                y: Math.random() - 0.2

            }

        });

    }, 250);

}


// ---------------- Floating Hearts ----------------

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition = "all 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = `translateY(-${window.innerHeight+200}px)`;

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 700);


// ---------------- Gallery Slider ----------------

const slider = document.querySelector(".slider");

const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

const dotsContainer = document.querySelector(".dots");

let current = 0;

const total = slides.length;

let autoSlide;

let isTransitioning = false;

function createDots() {

    dotsContainer.innerHTML = "";

    for (let i = 0; i < total; i++) {

        const dot = document.createElement("span");

        dot.addEventListener("click", () => goTo(i));

        dotsContainer.appendChild(dot);

    }

}

function updateDots() {

    const dots = dotsContainer.querySelectorAll("span");

    dots.forEach((dot, i) => {

        dot.classList.toggle("active", i === current);

    });

}

function goTo(index) {

    if (isTransitioning || index === current) return;

    isTransitioning = true;

    current = (index + total) % total;

    slider.style.transform = `translateX(-${current * 100}%)`;

    updateDots();

    setTimeout(() => {

        isTransitioning = false;

    }, 750);

}

function next() {

    goTo(current + 1);

}

function prev() {

    goTo(current - 1);

}

nextBtn.addEventListener("click", () => {

    next();

    resetAuto();

});

prevBtn.addEventListener("click", () => {

    prev();

    resetAuto();

});

function startAuto() {

    autoSlide = setInterval(next, 3000);

}

function resetAuto() {

    clearInterval(autoSlide);

    startAuto();

}

slider.addEventListener("mouseenter", () => clearInterval(autoSlide));

slider.addEventListener("mouseleave", startAuto);

createDots();

updateDots();

startAuto();


setTimeout(() => {

    alert("🎉 Happy Birthday Vikash! 🎂\n\nWishing you a wonderful year ahead.\n\n❤️ From R.. ❤️");

}, 4500);


// ---------------- Cursor Sparkles ----------------

document.addEventListener("mousemove", (e) => {

    const dot = document.createElement("div");

    dot.style.position = "fixed";

    dot.style.width = "6px";

    dot.style.height = "6px";

    dot.style.borderRadius = "50%";

    dot.style.background = "#FFD700";

    dot.style.left = e.clientX + "px";

    dot.style.top = e.clientY + "px";

    dot.style.pointerEvents = "none";

    dot.style.zIndex = "9999";

    dot.style.boxShadow = "0 0 10px yellow";

    document.body.appendChild(dot);

    setTimeout(() => {

        dot.style.opacity = "0";

        dot.style.transform = "scale(3)";

    }, 50);

    setTimeout(() => {

        dot.remove();

    }, 500);

});


// ---------------- Auto Fireworks Every 15 sec ----------------

setInterval(() => {

    launchFireworks();

}, 15000);


// ---------------- Welcome Console ----------------

console.log("🎂 Happy Birthday Vikash ❤️");
console.log("Website created by Ravi");