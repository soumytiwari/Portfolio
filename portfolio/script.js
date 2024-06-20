// audio
var audio = new Audio('16113__steffcaffrey__cats/262307__steffcaffrey__cat-happy-purrtwitter2.wav');

function playMusic() {
    audio.play();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

// typewriter-effect
function typeWriter(element, text, delay = 100, callback, repeat = false, cycleDelay = 2000) {
    let i = 0;
    let direction = 'forward';

    function type() {
        if (direction === 'forward') {
            element.textContent = text.substring(0, i++);
            if (i > text.length) {
                direction = 'backward';
                setTimeout(type, 1000); // Pause after writing
            } else {
                setTimeout(type, delay);
            }
        } else {
            element.textContent = text.substring(0, i--);
            if (i < 0) {
                direction = 'forward';
                if (repeat) {
                    setTimeout(type, cycleDelay); // Delay before restarting
                } else if (callback) {
                    setTimeout(callback, 1000); // Delay before calling callback
                }
            } else {
                setTimeout(type, delay / 2); 
            }
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const typewriter1 = document.querySelector(".typewriter1");
    typeWriter(typewriter1, "Tiwari", 100, null, true, 2000); // Adjust cycleDelay as needed

    const typewriter2 = document.querySelector(".typewriter2");
    const words = ["web developer", "designer", "coder", "programmer", "tech enthusiast"];
    let wordIndex = 0;

    function loopWords() {
        typeWriter(typewriter2, words[wordIndex], 80, () => {
            wordIndex = (wordIndex + 1) % words.length;
            loopWords();
        }, false, 2000); // Adjust cycleDelay as needed
    }

    loopWords();
});

// Add ripple effect to links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const rect = link.getBoundingClientRect();
            const ripple = document.createElement('span');

            const diameter = Math.max(link.clientWidth, link.clientHeight);
            const radius = diameter / 2;

            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.clientX - rect.left - radius}px`;
            ripple.style.top = `${e.clientY - rect.top - radius}px`;
            ripple.classList.add('ripple');

            const rippleElement = link.querySelector('.ripple');

            if (rippleElement) {
                rippleElement.remove();
            }

            link.appendChild(ripple);
        });
    });
});


