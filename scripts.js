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
        
        const email = emailInput.value;
        
        // Simple email validation
        if (email && email.includes('@')) {
            // Hide form and show success message
            emailForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Log for development purposes
            console.log('Email submitted:', email);
            
            // Optional: Reset form after 3 seconds
            setTimeout(() => {
                emailForm.reset();
                emailForm.style.display = 'flex';
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
}