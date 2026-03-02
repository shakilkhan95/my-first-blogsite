const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts#";
    fetch(url)
    .then(res => res.json())
    .then(data => showOnUi(data));
}

const showOnUi = (posts) =>{
    const container = document.getElementById('container');
    for(const post of posts){
        const li = document.createElement('li');
        li.innerHTML = `
            <h1 style ="padding: 20px 0">${post.id}: ${post.title}</h1>    
            <p style="color: #707070">${post.body}</p>
        `;
        container.appendChild(li);
    }
}