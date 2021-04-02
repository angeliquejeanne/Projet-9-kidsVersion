const cards = document.querySelectorAll('.card');

let returnCard = false;
let firstCard, secondCard;
let locking = false;

cards.forEach(theCard => {
    theCard.addEventListener('click', revertCard)
})

function revertCard(){
    if(locking) return;
    this.childNodes[1].classList.toggle('active');
    if(!returnCard){
        returnCard = true;
        firstCard = this;
        return;
    }
    returnCard = false;
    secondCard = this;
    // console.log(firstCard, secondCard);
    correspondence();
}

function correspondence(){
    if(firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')) {
        firstCard.removeEventListener('click', revertCard);
        secondCard.removeEventListener('click', revertCard);
    } else {
        locking = true;
        setTimeout(() => {
            firstCard.childNodes[1].classList.remove('active');
            secondCard.childNodes[1].classList.remove('active');
            locking = false;
        }, 1500)
    }
}

function random(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}
random();