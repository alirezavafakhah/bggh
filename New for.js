'use strict'

// نوع جدید حلقه در ES6
let lst = [9, 1, 3, 4];

for (let item of lst) {
    console.log(item);
}


//قابلیت پییمایش در رشته
let name = 'hesam';

for (let item of name) {
    console.log(item);
}


// موضوع جلسه بعد
//آشنایی با Destructuring آرایه‌ها و آبجکت‌ها

let arr = ['alireza', true, 5, 8.7, false];
let [item1, item2, , , item5] = arr;
console.log(item1, item2, item5);


function foo() {
    return [1, 5, 9, 8, 71]
}

let [a, b, ...c] = foo(); // تعریف متغییر و دریافت از تابع
console.log(a, b, c);


// نحوه کار Destructuring در آبجکت ها

// مثال اول
let MyObj = {
    name_1: 'alireza',
    age_1: 32,
    d_1: () => {
        return 'Rocket'
    }
};

let {name_1, age_1, d_1: arrow_name} = MyObj; // باید متغییرها با متغییرهای MyObj یک نام باشند

console.log(name_1, age_1, arrow_name());


// مثال دوم
let MyObj2 = {
    name_2: 'HamidReza'
};

let {
    name_2, age_2 = 39, f_arrow: f_arrow_name = () => {
        return 'Hoseini'
    }
} = MyObj2; // باید متغییرها با متغییرهای MyObj یک نام باشند

console.log(name_2, age_2, f_arrow_name());

