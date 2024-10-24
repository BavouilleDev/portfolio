(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "process.env.API_KEY_PLACEHOLDER",
    });
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        handleButtonClick()
        event.preventDefault();
        emailjs.sendForm('portfolio', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}
