
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



const changeCase = function(string) {
    const letters = string.split('');
    let invertedString = '';

    for(const letter of letters){
        const isInLowerCase = letter === letter.toLowerCase();
        invertedString += isEqual ? letter.toUpperCase(); letter.toLowerCase();
    }

    return invertedString;
};

console.log (changeCase('dfgdfGGG'));
console.log (changeCase('DKJFHDkkkkhs'));
console.log (changeCase('dKDJFSADKllllddd'));
