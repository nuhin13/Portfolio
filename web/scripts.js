// Function to open project in a new tab
function openProject(url) {
    window.open(url, '_blank');
}

// Function to open blog post in a new tab
function openBlog(url) {
    window.open(url, '_blank');
}

// Contact form submission logic (frontend)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Message sent!');
    } else {
        alert('Please fill all fields.');
    }
});
