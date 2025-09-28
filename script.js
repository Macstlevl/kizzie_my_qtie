document.addEventListener('DOMContentLoaded', function() {
    const messageOverlay = document.querySelector('.message-overlay');
    const text = "Hi dotie, A letter for you to let you know that… I like you, no lies, no scripts, just pure emotions."; // Your message here
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            messageOverlay.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed (milliseconds)
        } else {
            // Optional: Remove the cursor after typing is complete
            messageOverlay.style.borderRight = "none";
        }
    }

    typeWriter(); // Start the animation
});
