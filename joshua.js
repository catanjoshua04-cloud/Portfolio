(function() {
    emailjs.init("wXmGQZsT9Adsg7N1P");
})();

document.querySelector('.contact-container').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.querySelector('.send');
    btn.innerHTML = 'Sending...';

    const templateParams = {
        from_name: document.querySelector('.name').value,
        reply_to: document.querySelector('.email').value,
        subject: document.querySelector('.subject').value,
        message: document.querySelector('.message').value
    };

    emailjs.send('service_sfqqykj', 'template_smf3lk2', templateParams)
        .then(function() {
            alert('Success! Message sent to Joshua.');
            btn.innerHTML = 'Sent';
            document.querySelector('.contact-container').reset();
        }, function(error) {
            alert('FAILED... ' + JSON.stringify(error));
            btn.innerHTML = 'Send';
        });
});
