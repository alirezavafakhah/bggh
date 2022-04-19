'use strict'

//توابع جنریک
function* getName(){
    yield 'return 1';
    yield 'return 2';
    yield 'return 3';
    yield 'return 4';
}


 let namesIt= getName();


// console.log(namesIt.next());



for(let get_Return of namesIt){
    console.log(get_Return);
}

console.log();

console.log(...getName()); // استفاده از sperad

