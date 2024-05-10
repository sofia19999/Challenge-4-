document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username= document.getElementById('username').value;
    const title =document.getElementById('title').value;
    const content= document.getElementById('content').value;
    if (!username || ! title || !content).value;
        alert("All field must be filled out!");
        return;
    }
    const blogPosts= JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ username, title, content});
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    windown.location.href= 'blog.html';



});


