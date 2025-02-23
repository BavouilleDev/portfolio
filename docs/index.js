function handleButtonClick() {
    disableButton();
    localStorage.setItem('lastClickTime', Date.now());
}

function disableButton() {
    const button = document.getElementById('sendButton');
    button.disabled = true;
    button.textContent = "Message envoyé !";

    setTimeout(enableButton, 180000);
}

function enableButton() {
    const button = document.getElementById('sendButton');
    button.disabled = false;
    button.textContent = "Envoyer";
    localStorage.removeItem('lastClickTime');
}

document.addEventListener('DOMContentLoaded', function() {
    const lastClickTime = localStorage.getItem('lastClickTime');
    if (lastClickTime) {
        const timePassed = Date.now() - parseInt(lastClickTime, 10);

        if (timePassed < 180000) {
            disableButton();
            setTimeout(enableButton, 180000 - timePassed);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
const slideInElements = document.querySelectorAll('.slide-in');

function checkSlide() {
    const triggerBottom = window.innerHeight / 5 * 4;

    slideInElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkSlide);
checkSlide();
});
