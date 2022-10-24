/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/




const eleSquares = document.querySelector('.squares');
const eleTitle = document.querySelector('h1');

eleTitle.addEventListener('click', function () {
    for (let i=1; i<=100; i++){
        console.log(i); 
        if(i%15==0 && i % 3 == 0){
            eleSquares.innerHTML += (`<div class="sq-fbuzz">${i} ${'FizzBuzz'}</div>`); 
            console.log('FizzBuzz');                     
        }else if (i % 3 == 0){
            eleSquares.innerHTML += (`<div class="sq-fizz">${i} ${'Fizz'}</div>`); 
            console.log('Fizz'); 
        }else if (i%5 ==0){
            eleSquares.innerHTML += (`<div class="sq-buzz">${i} ${'Buzz'}</div>`);  
            console.log('Buzz') 
        }else{
            eleSquares.innerHTML += (`<div class="sq">${i}</div>`);
        }
    }
});