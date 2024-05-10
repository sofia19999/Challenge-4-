window.onload = function() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const container = document.getElementById('postsContainer');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>By ${post.username}</small>`;
        container.appendChild(div);
    });

    document.getElementById('modeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
};

