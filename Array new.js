'use strict'

let numbers = new Array(100, 200, 300, 400);

let y = Array.of(5);
let x = Array(3);

numbers[3] = 3;
console.log(numbers);
y[0]= 10;
y[1]=15;
y[2]=20
y[3]=15;
y[4]=20

console.log(y);
console.log(x);
console.log(y.map(item => item*2));
console.log(y);

let m = Array.from(y, item => item * 3);
console.log(m);

console.log(m.find(item => item === 45)); // اولین نتیجه را برمیگرداند
console.log(m.filter(item=>item === 60));//تمام آیتم های جستجو را برمیگرداند

let b = m.entries();
b.next();
console.log(b.next());

console.log(m.fill(90)); // لیست را با پارامتر ورودی پر میکند


