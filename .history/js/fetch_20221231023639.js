fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
            <h2>${post.id}</h2>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })