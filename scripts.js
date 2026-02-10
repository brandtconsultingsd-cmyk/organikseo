// Constants
const SUCCESS_MESSAGE_DURATION = 5000;

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Email Form Handling
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const successMessage = document.getElementById('success-message');

if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Browser validation handles email format via input type="email" and required attribute
        // Only submit if form passes HTML5 validation
        if (emailForm.checkValidity()) {
            const email = emailInput.value;
            
            // Hide form and show success message
            emailForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Log for development purposes
            console.log('Email submitted:', email);
            
            // Reset form after configured duration
            setTimeout(() => {
                emailForm.reset();
                emailForm.style.display = 'flex';
                successMessage.style.display = 'none';
            }, SUCCESS_MESSAGE_DURATION);
        }
    });
}