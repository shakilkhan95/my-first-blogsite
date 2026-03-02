document.addEventListener('DOMContentLoaded', () =>{
    const cardContainer = document.getElementById("card-container");
    
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => loadCard(data));

    function loadCard(cards){
        for(const card of cards){
            const div = document.createElement('div');
            
            div.innerHTML = `
                <div class="card bg-primary text-primary-content w-96 mx-auto my-3">
                    <div class="card-body">
                        <h2 class="card-title capitalize">${card.title}</h2>
                        <p>${card.body}</p>
                        <div class="card-actions">
                            <button class="btn">Click Here</button>
                        </div>
                    </div>
                </div>
            `;

            cardContainer.appendChild(div);
        }
    }
});