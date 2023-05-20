fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(respon) {
        return respon.json();
    })
    .then(function(posts) {
        var html = posts.map(function() {
            return `<li>
                <h2>${title}</h2>
                <p>${body}</p>
            </li>`
        });
    })
    .catch(function(err) {
        console.log('error: ' + err.message);
    })