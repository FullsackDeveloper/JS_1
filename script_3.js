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

function Constructor(radius) {
        this.raduis = radius,
        console.log(Constructor.toString());
    }
    const circle_2 = new Constructor(3);
