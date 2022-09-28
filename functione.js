
// Основы функции
// _Функциональные выражения
// -Аргументы и параметры
// - Возврат значений 

// const add = function (a, b) {

// console.log(a);
// console.log(b);

// const result = a + b;


// console.log('Выполняет функция add');
// return a + b;

// };

// const r1 = add(5,3);
// console.log('r1:', r1);

// const r2 = add(15,13);
// console.log('r2:', r2);

// const r3 = add(25,32);
// console.log('r3:', r3);

// const fn = function(){
//     console.log(1);

//     console.log(2);

// return

//     console.log(3);
// }

// console.log(fn());


// ------------------------------
// Напиши функцию calculateTotalPrice(items)
// которая принимает масиив цен (чисел) т возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart){
// total += value;
    
// }

// console.log('Total: ',total);

// const calculateTotalPrice = function (items){
//     console.log('items внутри функции:', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     };

//     return total;

// };

// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`Общая сумма покупок ${r1}`);

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// --------------------------------------
// Напиши функцию  logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//     for (const item of items){
//         console.log(item);
//     }
// };

// logItems(['dffddfd','sdfkgdlfkfdl','lsdkfldf', 'kldfhdl']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['dffdd','sdfkglfkfdl','lkfldf', 'kfhdl']);

// ---------------------------------------------
// Напиши функцию findLogin(allLogins, login) для поиска логина
// - Если логина нет, вывести сообщение 'Пользователь [логин] не найден'
// - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// const logins = ['sssds', 'kfdfh', 'poly1scute' , 'jhg'];


// const findLogin = function (allLogins, loginToFind) {
// for(const login of allLogins){
//     if(login === loginToFind) {
        
//         return 'Пользователь ${loginToFind} найден.';

//     }
// }
// return 'Пользователь ${loginToFind} не найден.';
// };
// console.log(findLogin(logins, 'ssddfsds'));
// console.log(findLogin(logins, 'kfjjkhgdfh'));
// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'jhgjh'));

// ------------------------------------------
// решение через тернавник



// const logins = ['sssds', 'kfdfh', 'poly1scute' , 'jhg'];

// const findLogin = function (allLogins, loginToFind) {

// return allLogins.includes(loginToFind)
// ?'Пользователь ${loginToFind} найден.'
// :'Пользователь ${loginToFind} не найден.';
// };

// console.log(findLogin(logins, 'ssddfsds'));
// console.log(findLogin(logins, 'kfjjkhgdfh'));
// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'jhgjh'));

// ---------------------------------------------

// напиши функцию findSmalesNumber(numbers) для поиска самого малого числа в масииве
// при условии что числа уникальные не повоторяються

// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//         }
// return smallestNumber;
// };

// console.log(findSmallesNumber([3, 5, 23,25,22]));
// console.log(findSmallesNumber([5, 15, 213,215,122]));
// console.log(findSmallesNumber([13, 15, 213,215,221]));

// --------------------------------------------------

// Напиши функцию ChangeCase(string) которая заменяет регистр
// каждого символа в строке на противоположный 
// Напримерб если строка JavaScript, то на выходе должноа быть 
// строка JAVAsCRIPT



// const changeCase = function(string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for(const letter of letters){
//         const isInLowerCase = letter === letter.toLowerCase();
//         invertedString += isEqual ? letter.toUpperCase(); letter.toLowerCase();
//     }

//     return invertedString;
// };

// console.log (changeCase('dfgdfGGG'));
// console.log (changeCase('DKJFHDkkkkhs'));
// console.log (changeCase('dKDJFSADKllllddd'));

// --------------------------------------------------
// Напиши функцию slugify (string) которая получает строку и возвращает URL - slug
// Cтрока сосотит только из букв и пробелов

// const title = 'Top 10 benefits of React framework';

// const words = normalizedTitle.split(' ');
// const slug = words.join ('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log (slug1);


// const slugify = function (string) {

//     return string.toLowerCase().split(' ').join('-');

// };

// console.log(slugify('Top 10 benefits of react'));
// console.log(slugify('Best 10 benefits of react'));
// console.log(slugify('10 benefits of react'));

// ----------------------------------------------
// Псевдомассив arguments и Array.from и ......
// Олдскульный метод

// const fn = function(){

//     console.log(arguments);

//     const args = Array.from(arguments)

//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);
// fn(1, 2, 3, 4, 5, 6, 7, );

// -----------------------------
// Прогрессивный метод

// const fn = function(...args){

//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);
// fn(1, 2, 3, 4, 5, 6, 7, );


// -------------------------------
// віделение аргументов до массива

// const fn = function(...args){
//     console.log('${a} ${b} ${c}');
//     console.log(args);
// };





// fn('sdsd',1, 2, 3);
// fn('sdsdsd',1, 2, 3, 4, 5, 6);
// fn('ccvbvbc',1, 2, 3, 4, 5, 6, 7, );

// -------------------------------------
// Напиши функцию add для сложения определенного количества аргументов 
//  -- Операция ... (rest)

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for(const arg of args){
//         total+=arg;
//     }
//     return total;
// };

// console.log (add(1, 2, 3));
// console.log (add(1, 2, 3, 5, 6));

// -----------------------------------
// Напиши функцию filterNumbers [, number1, ...] которая;
// - первый аргумент принимает масиив чисел
// - после первого аргумента может быть произвольное количество других аругментов
// которые будут числами
// -функция должна вернуть новы массив в которм бубудт только аргументы начиная с второго
// для которых есть аналог в оригинальном масииве

// const filterNumbers = function (array,...args) {
// console.log('array:', array);
// console.log('args', args);
// const uniqueElements = [];

// for (const element of array){

//     if (args.includes(element)){
//         uniqueElements.push(element);
//         console.log(`$(element) есть везде!!`)
//     }



    
// }

// console.log(uniqueElements);
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 20, 30, 40, 50], 110, 30, 21, 31, 50));
// console.log(filterNumbers([100, 200, 300, 400, 500], 10, 15, 200, 3, 8));



// let message;

//   if (password === ADMIN_PASSWORD) {
//   console.log("Welcome!");
//     return;

//     message = "Access denied, wrong password!";
// if (password !== ADMIN_PASSWORD) {
//   console.log("Access denied, wrong password!");
//     return;
    
//   }

//   return message;
//   // Change code above this line
// }
// if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }


//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//  return `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
//   }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//    if (available >= ordered) { // Change this line
//     message = "Order is processed, our manager will contact you.";
//     } else {
//     message = "Not enough goods in stock!";
//     }

//     return message;
// }
//     // Change code above this line
//     return message;
// }
  
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150); 
//   checkStorage(150, 180);


//   function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType = pro || subType = vip ; // Change this line
  
//     return canAccessContent;
//   }
  
//   checkIfCanAccessContent("pro");
//   checkIfCanAccessContent("starter");
//   checkIfCanAccessContent("vip");
//   checkIfCanAccessContent("free");


// _________________________________________________________

// Определение самого длинного слова в строке

// function findLongestWord(string) {
//     // Change code below this line

// var strSplit = string.split(' ');

//     console.log (strSplit);

// var longestWord="";

//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord.length) { // If strSplit[i].length больше, чем сравнимое слово...
//       longestWord = strSplit[i]; // ...затем longestWord принимает новое значение
//     }
//     }

//     // Change code above this line
//     return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


function getCommonElements(array1, array2) {
    // Change code below this line
const newArray = [];
    for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array1.length; j++){
if (array1[i].includes(array2[j])){
        }
      }
    }
  
    return newArray.push(i);
   // Change code above this line
  }
  getCommonElements([1, 2, 3], [2, 4]);
  getCommonElements([1, 2, 3], [2, 1, 17, 19]);
  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
  getCommonElements([1, 2, 3], [10, 20, 30]);



  function getCommonElements(array1, array2) {
    // Change code below this line
  const newArray = [];
  
  for (let i = 0; i < array1.length; i += 1)
    { for (let j = 0; j < array2.length; j += 1) {
      if (array1[i].includes (array2[j])){ 
        
        return newArray.push(i); } } } }
  
    
  
  getCommonElements([1, 2, 3], [2, 4]);
  getCommonElements([1, 2, 3], [2, 1, 17, 19]);
  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
  getCommonElements([1, 2, 3], [10, 20, 30]);