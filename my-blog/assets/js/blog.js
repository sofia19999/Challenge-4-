document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];




    // Function to render posts
    function renderPosts() {
        postsContainer.innerHTML = '';
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
               
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>Posted by ${post.username}</em></p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Render the posts on page load
    renderPosts();

    // Dark mode/light mode toggle
    const sunButton = document.getElementById('sun_button');
    sunButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Back button functionality
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
