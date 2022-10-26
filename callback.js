// const fNa = function( message, callback){
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function(number) {
//     console.log(`Это лог при вызове fnB`, number);
// };

// fNa(`kfdghkfdghk`, fnB)

// отложеный вызов регистрации события

// const buttonRef = document.querySelector(`.js-butto`);

// const handLeBtnClick = function (){
// console.log(`Клик по кнопке` + Date.now());

// };

// buttonRef.addEventListener(`click,handLeBtnClick`);

// function addEventListener(eventType, callback){

//     if(eventType == event){
//         callback()
//     }
// }

// Отложенный вызов геолокации

// const onGetPositioneSuccess = function(position){
//     console.log(`Это вызов onGetPositionSuccess`);
//     console.log (position);
// };

// const onGetPositioneError = function(error){
//     console.log(`Это вызов onGetPositioneError`);
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositioneSuccess,
//     onGetPositioneError,
// );

// Отложенный вызов: интервалы

// const callback = function() {
//     console.log('Через 2 секунды внтутри колбека в таймауте');

// };
// console.log ('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

// ----------------------------------------------
// фильтр

// const filter = function(array, test){
//     const filteredArray = [];

//     for (const el of array){
//         console.log(el);
//         const passed = test(el);
//         if (passed){
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;  
// };

// const callback1 = function(value){
//     return value >= 3;
// };

// const r1 = filter([1,2,3,4,5], callback1);

// console.log(r1);

// const callback2 = function(value){
//     return value <= 4;
// };

// const r2 = filter([1,2,3,4,5,6,7,8,9], callback2);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true},
//     { name: 'grapes', quantity: 150, isFresh: false},
//     { name: 'bananas', quantity: 100, isFresh: true},
// ];

// const getFruitsWithQuantity = function(fruit){
//     return fruit.quantity >= 120;
// };


// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// --------------------------------------------------------
// Замыкание

// const fnA = function(parametr){
//     const innerVariable = 'значение внтуренней переменной функции fnA';

//     const  innerFunction = function(){
//         console.log (parametr);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };
//     return innerFunction;
// }
// const fnB = fnA();

// fnB();

// console.log(fnB);

// console.log(fnB);

// ----------------------------------------------
// Поваренок
// const makeDish = function(sheffName,dish){
//     console.log (`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлета');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function(name) {
//     const makeDish = function(dish){
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// poly('чай');
// poly('кофе');

// ---------------------------------------------
// Округлятор



// const rounder = function(places){
// return function(number){
//     return Number (number.toFixed(places));
// };
    
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);


// console.log (rounder2(3.45878, 3));
// console.log (rounder3(3.45878, 2));
// console.log (rounder3(5.45878, 3));
// console.log (rounder3(3.45878, 3));


// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       if (!this.pizzas.includes(pizzaName))
//         return onError(pizzaName);
//       return onSuccess(pizzaName);
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(pizzaName) {
//     return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
//   }

//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
// orderedItems.forEach(function(value, index) {
//     totalPrice += +value;
// });
    
//     }

//     // Change code above this line
//     return totalPrice;


// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

    
//     filterArray.forEach(function (numbers) {
    
//     if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//     }
//     }

//     // Change code above this line
//     return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// Change code above this line