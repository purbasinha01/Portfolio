const words = [
    "Web Developer",
    "Video Editor",
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;
            }

        }

    }

    const speed = isDeleting ? 60 : 120;

    setTimeout(typeEffect,speed);

}

typeEffect();

// Initialize EmailJS
emailjs.init("5Kn_Gz1xWUbONyWqU");

const contactForm = document.getElementById("contact-form");
const sendBtn = document.querySelector(".send-btn");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_a01dl9b",
        "template_rzbynvb",
        this
    )

    .then(() => {

        sendBtn.innerHTML = "✓ Message Sent";

        contactForm.reset();

        setTimeout(() => {

            sendBtn.innerHTML = `Send Message <i class="fa-solid fa-arrow-right"></i>`;

        }, 2500);

    })

    .catch((error) => {

        console.error(error);

        sendBtn.innerHTML = "Try Again";

    });

});