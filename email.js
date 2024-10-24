(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "RI2BpBFfXpTfSCDmY",
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
