(function() {
    emailjs.init("wXmGQZsT9Adsg7N1P");
})();

const sleep = ms => new Promise(r => setTimeout(r, ms));

document.querySelector('.contact-container').addEventListener('submit', async function(event) {
    event.preventDefault();

    const btn = document.querySelector('.send');
    btn.innerHTML = 'Sending...';

    const messageValue = document.querySelector('.message').value.trim();

    if (messageValue === "") {
        btn.innerHTML = "No message found";
        await sleep(2000);
        btn.innerHTML = "Send";
        return; 
    }

    const templateParams = {
        from_name: document.querySelector('.name').value,
        reply_to: document.querySelector('.email').value,
        subject: document.querySelector('.subject').value,
        message: messageValue
    };

    try {
        await emailjs.send('service_sfqqykj', 'template_smf3lk2', templateParams);

        btn.innerHTML = 'Sent';
        await sleep(2000);

        document.querySelector('.contact-container').reset();
        btn.innerHTML = 'Send';

    } catch (error) {
        btn.innerHTML = 'Message Not Sent';
        console.log(error);
    }
});