// const friends = ['Mango' , 'Kivi' , 'Poly' , 'Ajax']
// console.log(friends);
// console.table(friends);



// console.log(friends[2]);

// friends[1] = 'shgdhfhg';

// const lastIndex = friends.length -1;
// console.log(lastIndex);1

// передача по ссылке и по значению

// передача по значению примитив

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a=20;

// console.log(a);
// console.log(b);

// передача по ссылке

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// console.log (a === b);

// console.log ([1, 2, 3] === [1, 2, 3]);

// --- Перебор (итерация ) массива

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1

// for (let i = 0; i <= lastIndex; i += 1 ){
// console.log( friends[i]);
// }
// ------------
// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1';

//     console.table(friends);
// }
// ------------
// for (const friend of friends) {
//     console.log (friend);
// }


// --------------
// Задача посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];

// // 2 сделать переменную до цикла

// let total = 0;

// // 1 перебрать массив

// for (let i = 0; i < cart.length; i += 1){
// console.log(cart[i])

// // 3 каждый элемент приплюсовать к тоталу

// // total = total + cart [i];
// total += cart [i];

// }

// console.log('total:', total);


// -------------Вариант 2 через for

// const cart = [54, 28, 105, 70, 92, 17, 120];

// // 2 сделать переменную до цикла

// let total = 0;

// for (const value of cart) {
//     total =+ value;
// }

// console.log('total:', total);


// -----------Вариант 3 добавить 20 % налога

// const cart = [54, 28, 105, 70, 92, 17, 120];

// // 2 сделать переменную до цикла

// let total = 0;



// for (let i =0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);
// Если елемент массива не изменяеться то For of если менятеься то с счетчиком


// // Задача напиши скрипт подсчитывающий сумму всех чисел в масииве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// // 1 переменная тотал
// let total = 0;



// // 2 перебрать массив

// for(let i = 0; i < numbers.length; i += 1) {
// const number = numbers[i];
// console.log(number);



// // 3 на каждой иттерации проверить елемент на четность

// if (number % 2 === 0) {
//     console.log('Четное!!!!');

// // 4 если четный плюсуем к тотал

// total += number;

// }

// }
// console.log('total:',total);
// -------------------------------------

// ВАриант через for of


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// // 1 переменная тотал
// let total = 0;

// for (const number of numbers){
//     console.log(number);

// if (number % 2 === 0){
//     console.log('Четное!!!!');

//     total += number;
// }
// }
// console.log('total:', total);

// -------------------------------------------
// Вариант от обратного

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// // 1 переменная тотал
// let total = 0;

// for (const number of numbers){
//     console.log(number);

// if (number % 2 !== 0){
//     console.log('Эту итерацию нужно пропустить', number);
// continue;

// }
// console.log(`${number} - четное!!!!!` );
// total += number;

// }

// console.log('total:', total);

// ------------------------------------------

// Напиши скрипт поиска логина
// Если логина нет, вывести сообщение "Пользователь (логин) не найден"
// Если найден логинб вывести сообщение "Пользователь (логин)  найден"

// Сначала через For

// const logins = ['m4ngoDoge', 'kikwbab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for(let i=0; i < logins.length; i +=1){
//     const login = logins[i];

//     console.log('login:',login);

//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//     console.log('Ура, равны!!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//     }
    
// }
// console.log(message);

// -------------------------------for off
// const logins = ['m4ngoDoge', 'kikwbab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;


// for (const login of logins) {

// console.log('login:',login);

//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//     console.log('Ура, равны!!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//     }
    
// }
// console.log(message);

// --------------------------------------- 
// самый простоц способ узнать есть он в масиеве или нет через inclubes
// самое лушее решение

// const logins = ['m4ngoDoge', 'kikwbab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';


// const message = logins.includes(loginToFind)
// ?`Пользователь ${loginToFind} найден.`
// :`Пользователь ${loginToFind} найден.`;

// console.log(message);
    

// ----------------------------------------------
// Напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные  (не повторяються).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//     console.log(number);
// if(number < smallestNumber) {
//     smallestNumber = number;
// }
// }

// console.log('smallestNumber:',smallestNumber);

// ----------------------------------------------
// Написать скрипт который обьеденит все елементы массива в одно строковое значение.
// элементов произвольное количество
// пусть элементы будут разделены запятой.
// const friends = ['Mango','Poly','Kivi','Ajax',];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length -1);
// console.log(string);

// ---------------------------то  же самое через метод join


// const friends = ['Mango','Poly','Kivi','Ajax',];


// const string = friends.join(',');
// console.log(string);

// -------Для сшития используеться этот регистр делать через join


// Задача
// Напишите скрипт который заменяет регистр каждоого символа  строке на противоположный
// Напримерб если строка "JavaScript", то на віходе должна біть строка "JAVAsCript"/

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters)

// for (const letter of letters) {
//     console.log(letter);

// if (letter === letter.toLowerCase()){
//     console.log('Эта буква в нижнем регистре!!! - ', letter);

// invertedString += letter.toUpperCase();

// } else {
//     console.log('Эта буква в нижнем регистре!!! - ', letter);
//     invertedString += letter.toLowerCase();
// }

// }

// console.log(invertedString);

// Более кортокое решение через тернавник

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters)

for (const letter of letters) {
    console.log(letter);

    const isEqual = letter === letter.toLowerCase();

    invertedString += isEqual
    
    ? letter.toUpperCase()
    : letter.toLowerCase ();
}

    console.log('invertedString', invertedString);