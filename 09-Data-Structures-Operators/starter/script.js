'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
//
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Riso', 'Pasta', 'Pizza']);
// console.log(orderSet);
//
// const airline = 'TAP Air Portugal';
// console.log(airline.slice(4,9));
// console.log(airline.replaceAll('Portugal', 'TurkeyŞşĞğÜüÇç'));
//
// const greetArr = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };
//
// greetArr('SA')('Gardaş');
//
// const addTax =(rate, value) => value + value*rate;
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(30));

let f;

const g = function() {
  const a=23;
  f=function() {
    console.log(a*2);
  };
};

g();
f();
