// // Factory function 

// function factor() {
//     return{
//         radius,
//         draw(){
//         console.log("doira");
//         }
//     }
// }

// // Constructor function

// function Constructor(radius) {
//     this.raduis = radius,
//     this.draw = draw() {
//         console.log("doira");
//     }
// }
// const circle_1 =  factor(2);
// const circle_2 = new Constructor(3);


// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log("doira");
//     }
// }
// console.log(Circle.name, Circle.length, Circle.arguments, Circle.caller, Circle.prototype);
// console.log(Circle.apply, Circle.bind, Circle.call, Circle.toString);


// Circle.prototype.displayInfo = function(){
//     console.log(`This is a ${this.radius}.`);
// }

// let createName = new Circle("radius");
// createName.displayInfo();

//  apply, call, bind ==> Bu metodlar function ni chaqirishda ishlatiladi.

//  apply function ning ishlatilishi:

// function greet(message) {
//     console.log(message + ' ' + this.name);
// }

// let person = { name: 'John' };

// greet.apply(person, ['Hello']); //  Hello John

//  bind metodining ishlatilishi:

// function greet(massage) {    
//     console.log(massage + " " + this.name);
// }
// let person = {name: 'John'};
// let greetPerson = greet.bind(person);
// greetPerson("Hello");

//  call metodining ishlatilishi :

// function greet(message) {
//     console.log(message + ' ' + this.name);
// }

// let person = { name: 'John' };

// greet.call(person, 'Hello'); // Output: Hello John


// // // // // // // // // // // // // // // // // // // / / / //  //  //

// function Constructor(radius) {
//         this.raduis = radius,
//         console.log(Constructor.toString());
//     }
//     const circle_2 = new Constructor(3);


// // // // // // // // // // // // // // // // // // // // // // // // // 


//  value(primitive) va reference(objects) type lar
// primitive ==> Number, String, Boolean, Undefined, Null, Symbol
// objects ==> Objact, Function, Array 

//  primitive lardan nusxa olinganda , ularni aynan qiymatidan nusxa olinadi. Bu narsa (MyValue) deyiladi.
// let a = 5;
// let b = 6;     
// a=10;
// console.log(a,b);
// objects dan nusxa olinganda esa , ularni Ko'rsatkichidan nusxa olinadi. Bu narsa (MyReference) deyiladi.
// let x = {value: 10};
// let y = x;
// y.value = 20;
// console.log(x, y);

// //  primitive 
// let number = 3;
// function increase(number) {
//     number++;
//     console.log('inside: ', number);    
// }
// increase(number);
// console.log('outside: ', number);

// // objects
// let obj = {value: 1};
// function increase(obj) {
//     obj.value++;
//     console.log('inside: ',obj);
// }
// increase(obj);
// console.log('outside: ', obj);


// MAVZU: OBJECT ni xossalari bo'ylab yurib chiqish 
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('doira');
//     }
// };

// // for (let key in circle)
// //    console.log(key, circle[key]);

// for (let key of Object.keys(circle))    
//    console.log(key);
// // Object.keys ==> Obyektni xossalarini chiqarib beradi
//    for (let entry of Object.entries(circle))    
//    console.log(entry);
// // Object.entries ==> massivdan tashkil topgan massivni qaytarib beradi


// // Objectda biror xossani mavjudligini tekshirish uchun in operatoridan foydalaniladi.

// if ('radius' in circle) console.log("bor");



// MAVZU: OBJECT DAN KLON OLISHni o'rganamiz

// 1-usul: (Eskicha usul)
const circle = {
    radius: 1,
    draw() {
        console.log('doira');
    }
};
// const clone = {};

// for(let key in circle)
// clone[key] = circle[key];
// console.log(clone)
 
// 2-usul(yangi usul)

// const clone = Object.assign({}, circle);
// console.log(clone);

// 3-usul(nisbatan yangiroq usul)
// sprite operatorini ishlatish
// const clone = { ...circle};
// console.log(clone);


// MAVZU: XOTIRANI BOSHQARISH(yozilayotgan kodning ishlashi va sifatini yaxshilash, 
//                            yozilayotgann kodning xotiradan kamroq joy egallashini ta'minlash)


// AMALIY MASHG'ULOT 

function Laptop() {
    this.cpu = cpu,
    this.ram = ram,
    this.storage = storage,
    this.screenSize = screenSize,
    this.brand = brand,
    this.powerOn = function(){   }  
}
Laptop('RYZEN 5','8GB','2TB','16','HP');





