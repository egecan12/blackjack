let hand = [];
let API_KEY;

const deck = document.getElementById("deckWrapper");

function initialize() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            API_KEY = data.deck_id;
        });

}

function deal() {
    if(hand.length >= 3){
        
        if ((hand[0].value == "KING" || hand[0].value == "QUEEN" || hand[0].value == "JACK")) {

            hand[0].value = 10;
        
         
        }

        if((hand[1].value == "KING" || hand[1].value == "QUEEN" || hand[1].value == "JACK")) {


            hand[1].value = 10;
        

        }

        
        if((hand[0].value == "ACE" )) {


            hand[0].value = 11;
        

        }


          
        if((hand[1].value == "ACE" )) {


            hand[1].value = 11;
        

        }
    
        var result = parseInt(hand[0].value, 10) + parseInt(hand[1].value, 10)

        document.getElementById("score").innerHTML +=`<p>${result} </p>`

        console.log(result) // parse int to convert strings to integar

        console.log("it is working well");


      

    }

    else{
        fetch(`https://deckofcardsapi.com/api/deck/${API_KEY}/draw/?count=1`)
        .then(data => data.json())
        .then(data => (hand = [...hand, ...data.cards])); // this method cause array into array which is not good


   
    console.log(hand);

    const cards = hand.map(element => {

    console.log(element)

        return `<li><img src="${element.image}" alt="" id="img" /></li>`


        //question is how to get the ${card.image}" because it is into an array into an array
    });

    deck.innerHTML = cards.join();
    }

}


initialize();

const button = document.querySelector('button');

button.addEventListener('click', deal);