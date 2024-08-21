document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit_button').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("hello");

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (!username || !title || !content) {
            alert("All fields must be filled out!");
            return;
        }

        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({ username, title, content });
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        console.log("Saved posts to localStorage: ", JSON.stringify(blogPosts)); // Debug log

        window.location.href = './blog.html';
    });
});