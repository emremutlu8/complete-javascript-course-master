'use strict';

// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }
//
// const emre = new Person('Emre', 1993);
// // console.log(emre);
//
// Person.prototype.calcAge = function(){
//   console.log(2020 - this.birthYear);
// };
//
// Person.prototype.species = 'Homo Sapiens';
// // console.log(emre.hasOwnProperty('calcAge'));
// console.log(emre.__proto__.__proto__);
// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);
//
// const arr = [3, 5, 6, 2];
// console.log(arr.__proto__);
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// const Car = function(make, speed){
//   this.make = make;
//   this.speed = speed;
// };
//
// // const BMW = new Car('BMW', 120);
// // const Mercedes = new Car('Mercedes', 95);
// Car.prototype.accelerate = function(){
//   this.speed +=10;
//   console.log(`${this.make} is going at ${this.speed}`);
// }
// Car.prototype.breke = function(){
//   this.speed -=5;
//   console.log(`${this.make} is going at ${this.speed}`);
// }
// BMW.accelerate();
// BMW.accelerate();
// Mercedes.accelerate();
// Mercedes.accelerate();
// Mercedes.accelerate();
// BMW.breke();
// Mercedes.breke();
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }
//
// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);
//
// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
// };
//
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//
//   accelerate(){
//     this.speed +=10;
//     console.log(`${this.make} is going at ${this.speed} km / h`);
//   }
//
//   brake(){
//     this.speed -=5;
//     console.log(`${this.make} is going at ${this.speed} km / h`);
//   }
//
//   get speedUS(){
//     return this.speed / 1.6;
//   }
//
//   set speedUS(speed){
//     this.speed = speed * 1.6;
//   }
//
// }
//
// const ford = new CarCL('Ford', 120);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// ford.accelerate();
// ford.accelerate();
// ford.brake();
////////////////////////////////////////////////////////////////////////////////

class acc {
  #movements = [];
}

const acc1 = new acc('Emre');

console.log(acc1.#movements);

