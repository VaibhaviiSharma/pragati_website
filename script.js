document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > hero.clientHeight - 100) {
            nav.style.backgroundColor = '#2c3e50';
        } else {
            nav.style.backgroundColor = '#2c3e50';
        }
    });

    // Smooth Scroll for Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > hero.clientHeight - 100) {
            nav.style.backgroundColor = '#ccc';
        } else {
            nav.style.backgroundColor = '#fff'; // Default color
        }
    });

    // Smooth Scroll for Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Handle Comment Form Submission
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting in the traditional way

        // Get the comment text
        const commentMessage = document.getElementById('comment-message').value;

        // Create a new comment element
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentMessage;

        // Append the new comment to the comments container
        commentsContainer.appendChild(commentDiv);

        // Clear the form fields
        commentForm.reset();

        alert('Thank you for your comment!');
    });
});

