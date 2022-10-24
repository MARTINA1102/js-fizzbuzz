/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/




const eleSquares = document.querySelector('.squares');
const eleTitle = document.querySelector('h1');

eleTitle.addEventListener('click', function () {
    for (let i=1; i<=100; i++){
        eleSquares.innerHTML += (`<div class="sq">${i}</div>`);
        console.log(i);        
        if (i % 3 == 0){
            eleSquares.innerHTML += (`<div class="sq">${i} ${'Fizz'}</div>`); 
            console.log('Fizz');                   
        }
        if(i%15==0 && i % 3 == 0){
            eleSquares.innerHTML += (`<div class="sq">${i} ${'FizzBuzz'}</div>`); 
            console.log('FizzBuzz');                     
        }
    }
});