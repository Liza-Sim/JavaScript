// Написать функцию, которая принимает 1 параметр.При первом вызове, она его запоминает,
// при втором — суммирует переданный параметр с тем, что передали первый раз и тд.
// Всё это с замыканиями

function sum() {
   let value = 0;

   return function(a) {
       return value += a ;
   };
}

let sumResult = sum();


console.log ( sumResult(3) );
console.log ( sumResult(5) );
console.log ( sumResult(20) );


