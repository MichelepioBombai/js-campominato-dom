// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

/************************************
 *                                   *
 *              ON LOAD              *
 *                                   *
************************************/


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const startGame = document.getElementById("buttonStart")

let gridDimension;



/************************************
 *                                   *
 *            FUNCTIONS              *
 *                                   *
************************************/

startGame.addEventListener(
    "click",
    function() {
        
        const gridEl = document.getElementById("grid")        
        const gridGenerator = generateGrid(gridEl, gridDimension);
        const difficultyEl = document.getElementById("difficulty");
        const level = difficultyEl.value
        console.log(level);
        
        generateGrid(gridEl, level)
        
    }
    
) 
    
    
    
/************************************
*                                   *
*            FUNCTIONS              *
*                                   *
************************************/
   
function generateGrid(grid, difficoltà) {
       
    // svuoto la griglia
    grid.innerHTML = ""; 
       
       
    let gridDimension;
    // imposto i vari gradi di difficoltà
    if(difficoltà == 1){
        gridDimension = 100;
    } else if(difficoltà == 2){
        gridDimension = 81;
    } else{
        gridDimension = 49;
    }
        
        
    // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    for(let i = 1; i <= gridDimension; i++){
            
        // genero un div
        const squareEl = document.createElement("div");
            
        // aggiungo la classe .square
        squareEl.classList.add("square");
            
            
        // assegno un valore da 1-100 ad ogni cella
        squareEl.innerHTML = i;
            
        // modifico le dimensioni delle celle
        if(difficoltà == 2){
            squareEl.classList.add("medium-square");
        } else if(difficoltà == 3){
            squareEl.classList.add("big-square");
        } 
            
        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        squareEl.addEventListener(
            "click",
            function() {
                console.log(this.innerHTML);
                this.classList.toggle("active");
            }
        )
        // lo aggiungo alla griglia
        grid.append(squareEl);
                
                
        // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
                
                
                
                
    }
    const numeriDiversi = [];
    while (numeriDiversi.length < 16){
        randomNumber = Math.floor(Math.random() * 100) + 1;
    
        if(!numeriDiversi.includes(randomNumber)) {
            numeriDiversi.push(randomNumber);
        }
    }   console.log(numeriDiversi);
}
