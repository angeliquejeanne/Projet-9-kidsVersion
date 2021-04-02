const cards = document.querySelectorAll('.card');
// ici nous selectionnons toutes nos classes '.card'

let returnCard = false;
let firstCard, secondCard;
let locking = false;

cards.forEach(theCard => {
    theCard.addEventListener('click', revertCard)
})
// nous passons à notre variable 'cards' une methode qui va permettre d'executer une fonction pour chaque éléments, 
// à l'écoute de l'événement 'click' la fonction 'revertCard' s'applique.

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
// notre fonction va nous permettre de retourner deux cartes 

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
// cette fonction va permettre soit de bloquer les deux cartes retournées si elles sont identiques
// soit au bout d'un court laps de temps de les retournées si elles ne correspondent pas

function random(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}
random();
// cette dernière fonction va permettre de mélanger les cartes aléatoirement à chaque actualisation de la page