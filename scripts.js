// scripts.js

// Smooth Scrolling
const scrollToElement = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};

// Form Handling
const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    // Handle the form data (e.g., send to server)
    console.log('Form submitted:', Object.fromEntries(formData));
};

// Event Listeners for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToElement(this.getAttribute('href'));
    });
});

// Event Listener for Form Handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleSubmit);
}