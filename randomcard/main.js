let button = document.querySelector('button');
let cardDisplay = document.getElementById("cardDisplay");
let textDisplay = document.querySelector("#text");

let club = ['<img src="img/2_of_clubs.png" >',
'<img src="img/3_of_clubs.png" >',
'<img src="img/4_of_clubs.png" >',
'<img src="img/5_of_clubs.png" >',
'<img src="img/6_of_clubs.png" >',
'<img src="img/7_of_clubs.png" >',
'<img src="img/8_of_clubs.png" >',
'<img src="img/9_of_clubs.png" >',
'<img src="img/10_of_clubs.png" >',
'<img src="img/jack_of_clubs.png" >',
'<img src="img/queen_of_clubs.png" >',
'<img src="img/king_of_clubs.png" >',
'<img src="img/ace_of_clubs.png" >'];

let diamond = ['<img src="img/2_of_diamonds.png" >',
'<img src="img/3_of_diamonds.png" >',
'<img src="img/4_of_diamonds.png" >',
'<img src="img/5_of_diamonds.png" >',
'<img src="img/6_of_diamonds.png" >',
'<img src="img/7_of_diamonds.png" >',
'<img src="img/8_of_diamonds.png" >',
'<img src="img/9_of_diamonds.png" >',
'<img src="img/10_of_diamonds.png" >',
'<img src="img/jack_of_diamonds.png" >',
'<img src="img/queen_of_diamonds.png" >',
'<img src="img/king_of_diamonds.png" >',
'<img src="img/ace_of_diamonds.png" >'];

let spade = ['<img src="img/2_of_spades.png" >',
'<img src="img/3_of_spades.png" >',
'<img src="img/4_of_spades.png" >',
'<img src="img/5_of_spades.png" >',
'<img src="img/6_of_spades.png" >',
'<img src="img/7_of_spades.png" >',
'<img src="img/8_of_spades.png" >',
'<img src="img/9_of_spades.png" >',
'<img src="img/10_of_spades.png" >',
'<img src="img/jack_of_spades.png" >',
'<img src="img/queen_of_spades.png" >',
'<img src="img/king_of_spades.png" >',
'<img src="img/ace_of_spades.png" >'];

let heart = ['<img src="img/2_of_hearts.png" >',
'<img src="img/3_of_hearts.png" >',
'<img src="img/4_of_hearts.png" >',
'<img src="img/5_of_hearts.png" >',
'<img src="img/6_of_hearts.png" >',
'<img src="img/7_of_hearts.png" >',
'<img src="img/8_of_hearts.png" >',
'<img src="img/9_of_hearts.png" >',
'<img src="img/10_of_hearts.png" >',
'<img src="img/jack_of_hearts.png" >',
'<img src="img/queen_of_hearts.png" >',
'<img src="img/king_of_hearts.png" >',
'<img src="img/ace_of_hearts.png" >'];



button.addEventListener('click', function (){
    getCard();
});


function getCard() {
    const value = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace' ];
    const suit = [ 'Club', 'Diamond', 'Spade', 'Heart'];
    function randomValue() {
        return Math.floor( Math.random() * value.length);
    }

    function randomSuit() {
        return Math.floor( Math.random() * suit.length);
    }
    
    let b = randomValue();
    let a = value[b];
    

    let card = {
        actValue: a, 
        value: b,
        suit: suit[randomSuit()],
    }

    /* console.log(card.actValue + ' of ' + card.suit); */
     
        if( card.suit === 'Club') {
            cardDisplay.innerHTML = club[card.value];
        }

        if( card.suit === 'Diamond') {
            cardDisplay.innerHTML = diamond[card.value];
        }

        if( card.suit === 'Spade') {
            cardDisplay.innerHTML = spade[card.value];
        }

        if( card.suit === 'Heart') {
            cardDisplay.innerHTML = heart[card.value];
        }

    textDisplay.innerHTML = (card.actValue + ' of ' + card.suit);
};