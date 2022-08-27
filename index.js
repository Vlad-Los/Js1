//задачи

//Тернарный оператор

const balance = 1000;

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log (message);


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
// console.log(typeof quantity);
