
const submitBtn = document.getElementById("submit-btn");
const cardContainer = document.getElementById("card-container");

submitBtn.addEventListener('click', function(){
    const cardTitle = document.getElementById("card-title");
    const cardSubtitle = document.getElementById("card-subtitle");
    const cardDetails = document.getElementById("card-details");

    const h1 = document.createElement('h1');
    h1.innerText = cardTitle.value;
    cardContainer.appendChild(h1);

    const h5 = document.createElement('h5');
    h5.innerText = cardSubtitle.value;
    cardContainer.appendChild(h5);

    const p = document.createElement('p');
    p.innerText = cardDetails.value;
    cardContainer.appendChild(p);

    cardTitle.value = '';
    cardSubtitle.value = '';
    cardDetails.value = '';
})
