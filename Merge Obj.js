'use strict'

class obj1 {
    constructor(){
        this.name = 'alireza'
    }
}

class obj2 {
    constructor(){
        this.family = 'vafakhah'
    }
}

class obj3 {
    constructor(){
        this.age = '32'
    }
}

let o1 = new obj1();
let o2 = new obj2();
let o3 = new obj3();

let obj4 = Object.assign(o1, o2, o3); //هرسه شی را ادغام کرده و در obj4 میریزد ، توجه o1 نیز تغییر میکند
let obj5 = Object.assign({},o1, o2, o3); // هرسه شی را ادغام کرده و o1 تغییر نمیکند

console.log(obj4);
console.log(obj5);
console.log(o1);