//Creo carosello

const carousel = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//console.log(carousel.length);

// Seleziono l'elemento della DOM dove inserire le immagini
const carouselEl = document.querySelector(".col-10");
const rowEl = document.querySelector(".row");

//creo variabile per dare active alle immagini
let activeGame = 0;

//ciclo foreach per selezionare le immagini negli oggetti dell'array

carousel.forEach((game,i)=> {
    // console.log(thisImage.image);
    
    const gameMarkup = cardMarkup(game.image,game.title,game.text);
    // console.log(gameMarkup);
    carouselEl.insertAdjacentHTML("beforeend",gameMarkup);
    //aggiungo thumbanils
    const thumbanils = thumbnailsMarkup(game.image);
    rowEl.insertAdjacentHTML("beforeend", thumbanils);
    
    
    if(i === activeGame){
        const gameEl = document.querySelectorAll(".game");
        gameEl[0].classList.add("active");
        const thumbsEl = document.querySelectorAll(".col > img");
        thumbsEl[0].classList.add("active");
        //console.log(gameEl);
    }
    
});


//prelevo dalla Dom i due button
const leftBtnEl = document.querySelector("button.left");
const rightBtnEl = document.querySelector("button.right");
//Aggiungo eventListener "click" ai button left e right
const carouselGamesElements = document.querySelectorAll(".game");
//right
rightBtnEl.addEventListener("click", function(){
    console.log(carouselGamesElements);
    //console.log("vai su");
    //selezione game con indice = 0 = activeGame perchè è la prima
    console.log(activeGame);
    const mainGame = carouselGamesElements[activeGame];
    //allora rimuovo classe active dal main game
    mainGame.classList.remove("active");
    //faccio lo stesso sulle thumbanails
    const thumbsEl = document.querySelectorAll(".col > img");
    const mainThumb = thumbsEl[activeGame];
    mainThumb.classList.remove("active");    
    //incremento activeGame
    activeGame++;
    //Milestone2: infiniteLoop
    if (activeGame > carousel.length - 1){
        activeGame = 0; 
    //console.log(activeGame);  
    };
    //quindi assegno classe active a nextGame
    const nextGame = carouselGamesElements[activeGame];
    nextGame.classList.add("active");
    //idem per thumbnails
    const nextThumb = thumbsEl[activeGame];
    nextThumb.classList.add("active");
})

//left
leftBtnEl.addEventListener("click", function(){
    //selezione game con indice = 0 = activeGame perchè è la prima
    const mainGame = carouselGamesElements[activeGame];
    //allora rimuovo classe active dal mainGame
    mainGame.classList.remove("active");
    //faccio lo stesso sulle thumbnails
    const thumbsEl = document.querySelectorAll(".col > img");
    const mainThumb = thumbsEl[activeGame];
    mainThumb.classList.remove("active"); 
    //decremento activeGame
    activeGame--;
    //quindi assegno classe active a nextGame
    //console.log(activeGame);
    //Milestone2: infiniteLoop
    if (activeGame < 0){
        activeGame = carousel.length - 1; 
    //console.log(activeGame);  
    };
    const nextGame = carouselGamesElements[activeGame];
    nextGame.classList.add("active");
     //idem per thumbnails
     const nextThumb = thumbsEl[activeGame];
     nextThumb.classList.add("active");

})




//selezione le col
const thumbsEl = document.querySelectorAll(".col > img");
for (let i = 0; i < thumbsEl.length; i++) {
    const singleThumb = thumbsEl[i];
    //console.log(activeGame);
    singleThumb.addEventListener("click", function() {
        const mainThumb = thumbsEl[activeGame];
        mainThumb.classList.remove("active");
        const nextThumb = thumbsEl[i++];
        nextThumb.classList.add("active");
    });
};



//autoslide
setInterval(function(){
    //console.log("vai su");
    const carouselGamesElements = document.querySelectorAll(".game");
    //selezione game con indice = 0 = activeGame perchè è la prima
    const mainGame = carouselGamesElements[activeGame];
    //allora rimuovo classe active dal main game
    mainGame.classList.remove("active");
    //faccio lo stesso sulle thumbanails
    const thumbsEl = document.querySelectorAll(".col > img");
    const mainThumb = thumbsEl[activeGame];
    mainThumb.classList.remove("active");    
    //incremento activeGame
    activeGame++;
    //Milestone2: infiniteLoop
    if (activeGame > carousel.length - 1){
        activeGame = 0; 
    //console.log(activeGame);  
    };
    //quindi assegno classe active a nextGame
    const nextGame = carouselGamesElements[activeGame];
    nextGame.classList.add("active");
    //idem per thumbnails
    const nextThumb = thumbsEl[activeGame];
    nextThumb.classList.add("active");
}, 3000);



//functions

function cardMarkup(name, title, text) {
    const markup = `
    <div class="game">
        <img src="./assets/${name}" alt="">
        <h3>${title}</h3>
        <p>${text}</p>
    </div>`
    return markup;
}

function thumbnailsMarkup(name) {
    const thumbMarkup = `
    <div class="col">
        <img src="./assets/${name}" alt="">
    </div>`
    return thumbMarkup;
}


