const btn = document.getElementById('btn');
const navItems = document.getElementsByClassName('nav-item');
const navContainer = document.getElementById('nav-container');

function hideNav(){
    navContainer.classList.toggle('hidden');
}

btn.onclick = hideNav;

for(const navItem of navItems){
    navItem.onclick = hideNav;
}


const cardBtns = document.getElementsByClassName('card-btn');
const cardTexts = document.getElementsByClassName('card-text');
for(let i = 0; i < cardBtns.length; i++){
    cardBtns[i].onclick = function(){
        cardTexts[i].style.display = 'none';
    };
}