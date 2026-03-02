document.addEventListener('DOMContentLoaded', () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
    .then(res => res.json())
    .then(data => loadComments(data));

    const loadComments = (comments) => {
        const commentsContainer = document.getElementById('comments-container');
        comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.innerHTML = `
                <div class="card bg-neutral text-neutral-content w-96 mx-auto">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${comment.name}</h2>
                        <p class="text-sm text-gray-700">${comment.email}</p>
                        <p>${comment.body}</p>
                    </div>
                </div>
            `;

            commentsContainer.appendChild(commentCard);
        });
    }
})
