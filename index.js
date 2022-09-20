//задачи
//Напиши скрипт выбора отеля по количеству звезд
//1 - 20$, 2-30$, 3-50$, 4-70$, 5-120$
//задачи
// const stars = 1;
// let price;
// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50; 
// }  else if (stars === 4) {
//     price = 70;
// }  else if (stars === 5) {
//   price = 120;
// } else {
//   console.log (`Такого количества звезд нет`);
// }
// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//       price = 30;
//       break;
//   case 3:
//       price = 500;
//       break;
//   case 4:
//       price = 70;
//       break;
//   case 5:
//       price = 120;
//       break;
// }

// console.log(price);
  
// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
  
//   case 3:
//   case 4:
//       price = 50;
//       break;
  
//   case 5:
//       price = 120;
//       break;
//   default:
//     console.log (`Такого количества звезд нет`)
// }

// console.log(price);

//задача на использование switch
//в переменную message записать сообщение в зависимости от опции 
//-Вы сможете забрать товар завтра с 12.00 в нашем офоисе
//- Курьер доставит заказ завтра с 9.00 до 18.00
//-Посылка будет отправлена сегодня
//-Вам перезвонит менеджер

// делаем переменные

// const option = 123;
// let message = '';

// // делаем свитч 1 2 3

// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12.00 в нашем офисе';
//     break;

//   case 2:
//       message = 'Курьер доставит заказ завтра с 9.00 до 18.00';
//       break;  

//   case 3:
//         message = 'Посылка будет отпралена сегодня';
//         break; 
//   default:
//     message = 'Вам перезвонит менеджер';

// }

// // делаем log message
// console.log (message);


// цикл for;

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// console.log ('dssdfd')

// задача с циклом
// скрипт подсчитвает зажачу работников
// количество работников в переменнй employees
// Зарплата каждого работника это случайное число от 500 до 5000
// // записать сумму в переменную totalSalary и вывести в консоль

// сделать вары

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;


// // перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // сгенерить случайную зп
//   const salary = Math.round(Math.random()  * (maxSalary - minSalary) + minSalary,
//   );
//   console.log (`ЗП работника номер ${i} - $(salary)`);
// // прибавить к Тоталу

// totalSalary += salary;
// // лог
// console.log ('totalSalary: ', totalSalary);

// }

// написать скрипт который подсчитывает сумму всех четных чисел 
// которые входят в диапазон переменных от min до max 
// например если min=0 max = 5 і нем два четных числа 2 и 4 сумма 6

// const min = 6;
// const max = 13;

// let total = 0;

// фор от мин до макс с шагом один проверяем остаток от деления

// for (let i = min; i<= max; i += 1) {
//   console.log (i)

//   if (i % 2 === 0) {
//     console.log ('четное; ', i);

//     total += i;
//   }
// }
// console.log ('total: ', total);

// варинат от обратного типа если не четное

// for (let i = min; i<= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log ('нечетное; ', i);
//     continue;  
//   }
//   console.log ('четное: ', i);
//   total += i;

// }
// console.log ('total: ', total);



// Напиши скрипт подсчета суммы покупки со скидкой в зависимости
// от потраченной суммы за все время (партнерская программа)


// -Общая сумма потраченного храниться в переменной totalSpent
// -Сумма текущего платежа храниться в переменной Payment 
// -Скидка храниться в переменной discount

// - Если потрачено от (100 до 1000) - бронзовый партнер, скидка 2%
// - Если потрачено от (1000 до 5000) - серебрянный партнер, скидка 5%
// - Если потрачено больше (5000 - золотой партнер, скидка 10%)
// - Если потрачено меньше 100 - не партнерб скидка 0%

// В результате вывести сообщение 
// "Оформляем заказ на сумму [сумма] со скидкой [ скидка ] %"

// let totalSpent = 200000;
// let paymant = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000){
//   console.log ('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000){
//   console.log ('Серебрянный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000 ){
//   console.log ('Золотой партнер, скидка 10%');
//   discount = 0.1;

// } else {
//   console.log ('Не партнер, скидка 0%');
// }

// paymant -= paymant * discount;

// // paymant = paymant - paymant * discount;

// console.log(
//   `Оформляем заказ на сумму ${paymant} со скидкой ${discount * 100}% `,
// );


// totalSpent += paymant;

// console.log( `Общая сумма потраченного в магазине: ${totalSpent}`);






// Задача скрипт обработки покупки в магазине
// баланс пользователь в переменной ballance
// сумма покупки в переменной Payment 

// Пеерд проверкой вывести сообщение 
// общая стоимость заказа число кредитов Проверяем к-во доступных средств на счету

// Если сумма покупки не привышает баланс
// вывести из баланса сумму покупкм
// вывести на счету осталось число кредитов
// Если сумма покупки превышает балланс
// вывести сщщющение на на счету недостаточно средств для проведения операции
// в конце массива вывести сообщение Операция завершена

// 1.вары

// let balance = 10000;
// const payment = 2000;

// // первое условие сумма <= баланс

// console.log(
//   'Общая стоимость заказа $(paymant) кредитов. Проверяем ко-во доступных средств на счету',

// );

// if (payment <= balance) {
//   console.log ('ok');

// balance -= payment;

// console.log ('Все хорошо, снимаем деньги...Спасибо за покупку');

// console.log('На счету осталось ${balance} кредитов ');
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');

// }

// console.log('Операция завершена');





//Тернарный оператор для простых записей или и или или

// const balance = 1000;

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log (message);

// function add(a, b, c) {
//     // Change code below this line
// console.log`(a + b + c) return;`
  
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));
// const salary = 1500
// if (salary <= 500){

//     console.log ('Уровень1');

// } else if (salary > 500 && salary <= 1500) {
//     console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Уровень 2');
// } else {
//     console.log('Уровень 4')
// }

//возможность открыть чат с пользователем
//друг
//онлайн
//без режима не беспокоит

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log ('Можно открыть чат?', canOpenChat);


// const x1 = 10;
// const x2 = 30;
// const Number = 15;

// console.log(`число ${Number} попадает в отрезок до ${x1}? `, Number < x1);


// console.log(`число ${Number} попадает в отрезок до ${x2}? `, Number > x2);

// const res1 = Number > x1 && Number < x2;

// console.log(`число ${Number} попадает в отрезок от ${x1}? до ${x2}? `,res1 );

// const res2 = Number < x1 || Number > x2;

// console.log(`число ${Number} попадает в отрезок от ${x1}? до ${x2}? `,res2 );


//логическое и запинаеться на лжи либо полседний операнд
// console.log(false && 10);

//логическое или запинаеться на правде либо полседний операнд
// console.log(5 || 10);

//логическое не делаеи инверсию правда ложь ложь правда
// console.log(!true);



// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'лаллалал сс  спам'
// const string2 = 'лаллалал сс  РАСПРОДАЖА'
// const string3 = 'лаллалал сс  рекламная кампания'

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase(). includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));


// сейчас по людски пишеться так

// const quantity = 15;
// const orderMsq = 'Вы заказываете $ {quantity} холодильников.';

// console.log (orderMsq)


//Напиши скрипт которій выведет строку в формате
//Гость x поселяется в z номер q
//Подставив вместо x y z q значения переменны

// Нормализация методом tolowerCase

// const brand = 'Samsung';
// const normalizedBrand = brand.toLocaleUpperCase();
// console.log(normalizedBrand);






// //конкатинация строк

// const firstName = 'Chelsy';
// const lastName = 'Emersld';
// // const fullName = firstName + ' ' + lastName;

// // console.log(fullName);

// const room = 716;
// const type = 'VIP';

// const welcomeMsg = `Гость ${firstName}  ${lastName} поселяеться в ${type} номер ${room}`;
// console.log(welcomeMsg);


// const welcomeMsg = 'Гость ' + 
// firstName + 
// ' ' + 
// lastName + 
// ' поселяеться в ' + 
// type + 
// ' номер ' + 
// room;

// console.log(welcomeMsg)




//Длина строки свойстов Lenght

// const message = 'В этой строке 111126 символов';
// console.log(message.length);



// 1.генерация рандомніх чисел

// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max-min) + min);

// console.log(result)




// // 1.попросить ввести число
// let base = prompt('Давай число');
// base = Number (base);

// console.log (base);

// // 2.Попросить Ввести степень и сохранить в переменную

// let power = prompt('Давай степень');
// power = Number (power);
// console.log(power);


// // 3.Возвести введенные данные и вывести

// const result = base ** power;
// console.log(result);







// let salary = 1300.1647;
// salary = Number (salary.toFixed(2));
// console.log(salary);




// const age = 10;
// const totalPrice = 200.74
// const userName = "Chelsy" ;
// const message = "Добро пожаловать" ;
// const isOpen = true ;
// const shouldConfirm = false;



// const type = typeof true;

// console.log (type);

// console.log ('до');
// alert( 'dlshvsldfh')
// console.log ('после');

// const shouldRenew = confirm('Продлить подписку')
// console.log (shouldRenew);

// let quantity = prompt ( "Введите количество товаров");
// quantity = Number(quantity);
// console.log(quantity);
// // console.log(typeof quantity);

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
//     switch(password)
//     {
//     case null:
//       return 'Canceled by user!'; 
   
//     case ADMIN_PASSWORD:
//         return 'Welcome!';
        
//     default:
//       return "Access denied, wrong password!"; 
//     }
//   }
  
//   checkPassword("mangohackzor");
//   checkPassword(null);
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch(country){

//   case China:
//   price = 100;
//   return message;

//   case Chile:
//   price = 250;
//   return message;

//   case Australia:
//   price = 100;
//   return message;

//   case Jamaica:
//   price = 100;
//   return message;
    
  
//   default:
//     return "Sorry, there is no delivery to your country";


    
    
// }
//   // Change code above this line
//   return message = `Shipping to ${country} will cost ${price} credits";
// }

// getShippingCost("Australia")
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");




function formatMessage(message, maxLength) {
  let result=""+message;
  if(result.length >= maxLength) result = result.slice (0, maxLength)+"...";  
  
    console.log(result + ' = '+result.length);
    console.log(maxLength);
  return result;
}

formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);
formatMessage("Vestibulum facilisis purus nec", 20);
formatMessage("Vestibulum facilisis purus nec", 30);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);