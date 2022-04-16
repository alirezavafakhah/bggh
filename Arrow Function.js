'use strict'


let sum = (a, b) => {
    return a + b;
}

// یا سادتر

let sum1 = (a, b) => a + b;

let f1 = (a, b) => ({a: a, b: b});


let arr = [5, 8, 7, 9];


// به سه روش و ساده ترین روش ، روش سوم

//روش اول
// let arr_power = arr.map(function (index) {
//     return index * 2
// })


// روش دوم
// let arr_power = arr.map((index) => index * 2); // درصورتیکه index یک پارامتر باشد میتوان () را برداشت

//روش سوم
let arr_power = arr.map(index => index * 2); // استفاده از arrow function


console.log(sum(5, 8));
console.log(sum1(8, 9));

console.log(f1(8, 7));

console.log(arr_power);


// عملکرد معکوس arrow فانشن ها در آبجکت ها و توابع
let myObj = {
    a: 10,
    b: function () {
        return this.a + 10;
    },
    c: () => {
        return this.a + 10
    }
}

console.log(myObj.b());
console.log(myObj.c());


//در توابع arrow فانشن ها مشکل دسترسی به مقادیر را حل میکنند
function p() {
    this.r = 0;
    // setInterval(() => {
    //     this.r++;
    //     console.log(this.r)
    // }, 1000)

    // setInterval(function () {
    //     this.r++
    //     console.log(this.r)
    // }, 1000)
}


let person = new p();


// به دو شکل توابع با پارامتر پیش فرض

//شکل یک که رایج نیست
function default_val(a, b) {
    let x = a || 5;
    let y = b || 10;
    return x + y
}

// شکل درست
function correct_def_value(a = 5, b = 15) {
    return a + b;
}

console.log(default_val());
console.log(correct_def_value());


// در صورتیکه از فانشن بجای arrow فانشن استفاده کنیم ،داخل فانشن متغیری از توع لیست خواهیم داشت بانم arguments که تمام پارامترهای ورود را برمیگرداند
// نمونه کد

function sums(a, n) {
    // چنانچه arrow فانشن باشد چنین قابلینی نخواهد بود
    console.log(arguments); //print all arguments
    return a + n;

}

console.log(sums(87, 13, 87, 97, 10))


//استفاده از Rest در جاوااسکریپت
// ارسال به صورت یک لیست
function sums2(...args) {
    return args.reduce((PrevisouVal, CurrentVal) => {
        return PrevisouVal + CurrentVal;
    })
}

console.log(sums2(5, 5, 5, 20, 20));


//نحوه استفاده از spread در جاوااسکریپت
// ، در جاوا spread باعث میشه آیتم های لیست جدا جدا شوند، بلعکس Rest

function t(a, b, r) {
    return a + b + r;
}

let arr2 = [8, 9, 3];
let arr3 = [6, 5, 21];

console.log(t(...arr2));
console.log(arr3)// به صورت یک آرایه
console.log(...arr3) //  جدا شدند ، هرکدام به صورت یک عدد


// ترکیب Rest و Spread
function t2(a, b, c, ...args) {
    console.log(args);
    console.log(a + b + c);
}

let arr4 = [9, 1, 6];
t2(...arr4, 8);



const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1,100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1


