'use strict'


//به جای var باید از let استفاده کرد ، زیرا let محدوده بلاک ها رعایت میکند

function t() {
    let x = 10;
    if (true) {
        let x = 'ali'
        console.log(x)
    }
    console.log(x)
}


function t2() {
    var x = 10;
    if (true) {
        var x = 'ali'
        console.log(x)
    }
    console.log(x)
}

t();
t2();


//هنگام استفاده از ثابت برای آرایه، میتوان با push عنصری به آرایه اضافه کرد


const arr = [878, 97, 54];

arr.push(56);

console.log(arr);


// کدهای زیر به سه روش ایندکسی را در رشته تغییر می دهند، فقط یک کاراکتر
// کد اول
String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf(); //در صورتیکه ایندکس بزرگتر از کل طول رشته باشد، رشته را در خروجی میفرستد
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
var str = "Hello World";
str = str.replaceAt(11, '_');
console.log(str);


// کد دوم
let y = "White Dog";
let arr2 = y.split(""); // ["W", "h", "i", "t", "e", " ", "D", "o", "g"]
arr2.splice(6, 1, 'F'); // or use ==> arr2[6] = 'f';
let result = arr2.join(""); // "White Fog"
console.log(result)


//کد سوم

let s = "Hello world";
let index = 3;
s = s.substring(0, index) + 'x' + s.substring(index + 1);
console.log(s);