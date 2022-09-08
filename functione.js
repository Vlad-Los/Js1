
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

const calculateTotalPrice = function (items){
    console.log('items внутри функции:', items);

    let total = 0;

    for (const item of items) {
        total += item;
    };

    return total;

};

const r1 = calculateTotalPrice([1, 2, 3]);

console.log(`Общая сумма покупок ${r1}`);

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));

