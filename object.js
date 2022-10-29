// const playlist = {
//     rating: 5,
//     tracks: ['трек1', 'трек2','трек3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log ('this внтури changeName:', this);
//         this.name = newName;
//     },
// addTrack(track){
//     this.tracks.push(track);
    
// },
// getTrackCount(){
//     return this.tracks.length;
// },
// updateRating(newRating){
//     this.rating = newRating;
// },
// };


// playlist.changeName('Новое имя');
// console.log(playlist);
// playlist.addTrack('new track');
// playlist.updateRating(1);
// console.log(playlist);

// вычисляемые свойства

// const inputName ='color';
// const inputValue = 'tomato';

// const colorPickerData = {

//     [inputName]: inputValue,
// };

// console.log(colorPickerData);


// перебор обьекта

// const feedback = {
//     good:5,
//     neutral: 10,
//     bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys){

//     console.log (key);
//     console.log(feedback[key]);
// totalFeedback += feedback[key];
// }

// console.log('totalFeedback:', totalFeedback);

// Если Object.keys возвращает массив ключей то Object.values возвращет массив значений
// const feedback = {
//     good:5,
//     neutral: 10,
//     bad: 3,
// };

// const values = Object.values(feedback);

// console.log(values);
// for (const value of values){
//     console.log(value);

//     totalFeedback += value;
// }
// console.log ('totalFeedback:',totalFeedback);

// Работа с коллеккцией (массив Обьектов)

// const friends = [
// {name: 'Mango', online: false},
// {name: 'Kivi', online: true},
// {name: 'Poly', online: true},
// {name: 'Ajax', online: false},

// ];

// console.table(friends);

// for(const friend of friends){
//     console.log(friend.online);
//     friend.newprop = 555;
// }


// // ищем друга по имени

// const findFriendByName = function(allFriends,name) {
//     for(const friend of allFriends){
//         console.log(friend);
//         console.log(friend.name);

//         if(friend.name === name){
//             return 'нашли!!!!';
//         }
//     }
//     return 'не нашли!!!';
// };

// console.log (findFriendByName(friends,'Poly'));
// console.log (findFriendByName(friends,'Chelsy'));

// ------------------------------------------
// Задача получить имена всех друзей

//     const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kivi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},

//     ];

//     console.table(friends);

// const findFriendByName = function(allFriends,friendName){};


// const getAllNames = function (allFriends) {
// const names = [];
// for (const friend of allFriends){
//     console.log(friend.name);
//     names.push(friend.name);
// }
// return names;  
// };

// _____________________________________

// Получить всех друзей которые онлайн

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kivi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},

//     ];

//     console.table(friends);

// const findFriendByName = function(allFriends,friendName){};

// const getOnlineFriends = function(allFriends){
//     const onlineFriends = [];
//     for(const friend of allFriends){
//         console.log (friend);
//         console.log (friend.online);

//         if(friend.online){
//             onlineFriends.push(friend);
//         }
//     }

// return onlineFriends;
// }

// __________________________________


// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kivi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},

//     ];

//     console.table(friends);

// const findFriendByName = function(allFriends,friendName){};

// const getOfflineFriends = function(allFriends){
//     const offlineFriends = [];
//     for(const friend of allFriends){
        
//         console.log (friend.online);

//         if(!friend.online){
//             offlineFriends.push(friend);
//         }
//     }

// return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

// __________________________________________
// раскладываем отдельно кто онлайн кто офлайн

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kivi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},

//     ];

//     console.table(friends);

// const findFriendByName = function(allFriends,friendName){};

// const getFriendsByOnlineStatus = function(allFriends){
//     const friendsByStatus  = {
//         online: [],
//         offline: [],
//     };
//     for(const friend of allFriends){
        
//         if(!friend.online){
//             friendsByStatus.online.push(friend);
//             continue;
//         }
//             friendsByStatus.offline.push(friend);
        
//     }

// return friendsByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends));
// _____________________________________________
// считаем количество свойств в обьектеь р


// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// };

// console.log (Object.keys(x).length);

// __________________________________________________
// Операция spread (распыление)

// const numbers = [...[1,2,3],4,5];
// console.log(numbers);

// __________________________________________________
// пример поиск самой большой или маленькой температуры
// const temps =[18,24,12,29,31,40];

// console.log(Math.max(1,4,7,10,6));
// console.log(Math.min(...temps));

// const a = [{a:1}, {b:2}, {c:3}];

// const b = [...a];

// console.log('a:',a);
// console.log('b:',b);

// console.log(a[0] === b[0]);
// console.log(a === b);
// ----------------------------------------
// Сливаем несколько массивов в дин через concat и spread

// const lastWeekTemps = [1,2,3];
// const currentTemps = [4,5,6];
// const nextWeekTemps = [7,8,9];

// const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);

// const allTEmps = [ ...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTEmps);
// -----------------------------------------------
// Распыление обьектов assign - старый варинат spread - новый

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// const z = Object.assign({}, a, b);

// console.log(z);

// const c = {
//     ...a,
//     ...b,
// };

// console.log(c);

// ------------------------------------
// Пример применения
// const defaultSetting = {
//     theme: 'Light',
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSetting = {
//     showNotifications: false,
//     hideSidebar: true,
// };

// const finalSetting = {
//     ...defaultSetting,
//     ...userSetting,
// };

// console.log(finalSetting);

// -----------------------------------
// Деструктуризация обьектов
// const playlist = {
//         rating: 5,
//         tracks: ['трек1', 'трек2','трек3'],
//         trackCount: 3,
//         };
    
// const {
//     rating,
//     tracks,
//     trackCount : numberOffTracks = 0,
// } = playlist;

// console.log(
// numberOffTracks
// );

// console.log(rating);
// console.log(tracks);
// console.log(trackCount);
// ________________________________________
// Глубокая дестректуризация
// const profile = {
//     name:'Jacques Gluke',
//     tag: 'khgkfg',
//     location:'kafjgkjfhgkagh',
//     avatar: 'dkksfhkdshfkd',
//     stats:{
//         followers: 5603,
//         views: 4827,
//         likes:454,
//     },

// };
// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: {followers, views, likes},
// } = profile;



// console.log(name, tag, location, avatar,followers, views,likes);

// -----------------------------------------------
// Деструктуризация массива
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;

// console.log(red, green, blue);
// __________________________________
// Пример
// const authors = {
//     kikwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// for (const [name,rating] of entries){
// console.log(name, rating);

// }

// -------------------------------------
// Операция  rest (сбор)
// const profile = {
//     name:'Jacques Gluke',
//     tag: 'khgkfg',
//     location:'kafjgkjfhgkagh',
//     avatar: 'dkksfhkdshfkd',
//     stats:{
//         followers: 5603,
//         views: 4827,
//         likes:454,
//     },

// };

// const{ name, tag, location, ...restProps} = profile;
// console.log(name, tag, location);
// console.log(restProps);

// ___________________________________________________
// Паттерн Обьект настроек 
// деструктуризация параметра обьекта в подписи функции
// rest при деструкторизации в подписи

// const showProfileInfo = function( {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: {followers, views, likes},
// }){
//     console.log(name,tag,location,avatar,followers,views,likes);
// };

// const profile = {
//     name:'Jacques Gluke',
//     tag: 'khgkfg',
//     location:'kafjgkjfhgkagh',
//     avatar: 'dkksfhkdshfkd',
//     stats:{
//         followers: 5603,
//         views: 4827,
//         likes:454,
//     },

// };

// showProfileInfo(profile);


// ____________________________________________
// Работа с корзиной товаров

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items){
//             console.log(item);
//             if (item.name === product.name){
//                 item.quantity += 1;
//                 return;
//             }
//         }

    

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;
//         for(let i = 0; i < items.length; i += 1){
//             const { name} = items[i];

//             if(productName === name){
//                 console.log('Нашли такой продукт' ,productName);
//                 console.log('индекс: ',i);

//                 items.splice(i,1);
//             }
//         }
//     },
//     clear() {},
//     countTotalPrice() {
//         const{ items } = this;

//         let total = 0;

//         for (const { price, quantity } of items){
//             total += price * quantity;
//         }

//         return total;
//     },
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({name: 'apple', price: 50});
// cart.add({name: 'limone', price: 50});
// cart.add({name: 'limone', price: 50});
// cart.add({name: 'pear', price: 50});
// cart.add({name: 'pear', price: 50});
// cart.add({name: 'pear', price: 50});



// console.table(cart.getItems());

// cart.remove('apple');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// const getProductTotalPrice = function({price, quantity}){
//     return price * quantity;
// };

// console.log(getProductTotalPrice(cart.items[2]));
// -----------------------------------------
// добавление свойства в обьект

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
  
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country:"Jamaica", city: "Kingston" };

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);}
//   keys.push(key);
//   values.push(apartment[key]);
//   [keys] : "descr", "rating", "price",
//   [values]:"Spacious apartment in the city center", 4, 2153

//   // Change code above this line
// }

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);  
//   }
// }
// console.log("own properies="+keys);
// console.log(values);

// ----------------------------------
// Перебери объект apartment используя метод Object.keys()
//  и цикл for...of. Запиши в переменную keys массив ключей
//   собственных свойств объекта apartment,
//  и добавь в массив values все значения его свойств.



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
//   // Change code below this line
//     const keys = Object.keys(apartment);
//     for (const key of keys) {
//     values.push(apartment[key]);
// }
// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     for (const key of keys)
//         if (object.hasOwnProperty(key))
//             propCount += 1;
//     return propCount;
// }

// console.log(countProps({}));
//   countProps({ name: "Mango", age: 2 });
//   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// ________________________________________________________________________

// Напиши функцию getProductPrice(productName) которая принимает один параметр 
// productName - название продукта. Функция ищет объект продукта с таким именем (свойство name)
// в массиве products и возвращает его цену (свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line

//     for (const item of products) {
//       if (item.name === productName)
//         return item.price;
//     }
//     return null;
//     // Change code above this lin 
//   }

//   getProductPrice("Radar");
//   getProductPrice("Grip");
//   getProductPrice("Scanner");
//   getProductPrice("Droid");
//   getProductPrice("Engine");


// ---------------------------------------------------------
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
//  Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 }
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     let vals=[]; // итоговый массив значений
//     for (const product of products) { // берем по очереди каждый объект из массива
//       const keys = Object.keys(product); // берем ключи взятого объекта
//       for (const key of keys) { // проходим по его ключам
//         if (propName === key) { // если переданное имя ключа совпало с текущим
//           vals.push(product[key]); // то добавили его значение в итоговый массив
//           break;
//         }
//       }
//     }
//     return vals; // вернули из функции массив
//     // Change code above this line
//   }
//   console.log(getAllPropValues("name"));
//   getAllPropValues("quantity");
//   getAllPropValues("price");
//   getAllPropValues("category");

// _____________________________________________

// Напиши функцию calculateTotalPrice(productName)
//  которая принимает один параметр productName - название товара. 
//  Функция должна вернуть общую стоимость (цена * количество)
//   товара с таким именем из массива products.
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
  
//   for (const product of products){
//   let totalPrice = product.price * product.quantity;
//     if (productName === product.name){
//       return totalPrice; 
//     }
//   }
//   return 0;
//   }
  

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//   const {hex, rgb} = colors; 
//     hexColors.push(colors.hex);
//     rgbColors.push(colors.rgb);
//   }
  

  // const forecast = {
  //   today: {
  //     low: 28,
  //     high: 32,
  //     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  //   },
  //   tomorrow: {
  //     low: 27,
  //     high: 31,
  //   },
  // };
  // // Change code below this line
  
  
  // const {
  //   today: {low, high, icon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
  //   tomorrow: {low, high},
  // } = forecast;

  
  // function calculateMeanTemperature(forecast) {
  
  //   const {
  //     today: {low: todayLow, high: todayHigh},
  //     tomorrow: {low: tomorrowLow, high: tomorrowHigh} = forecast;
      
  //     }
      
  //     // Change code above this line
  //     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  //   }


  //   calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });
  //   calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} });

  // function add(...args) {
  //   let total = 0;
  //   for (const arg of args){
  //     total += args;
  //   }
    
  //   return total;
  //   // Change code above this line
  // }
  // add(15, 27);
  // add(12, 4, 11, 48);
  // add(32, 6, 13, 19, 8);
  // add(74, 11, 62, 46, 12, 36);

  // const bookShelf = {
  //   books: ["The last kingdom", "Haze", "The guardian of dreams"],
  //   updateBook(oldName, newName) {
  //     // Change code below this line
  //     const bookIndex = this.books.indexOf(oldName);
  //     this.books.splice(bookIndex, 1, newName);
  //     // Change code above this line
  //   },
  // };
  // bookShelf.updateBook("Haze", "Dungeon chronicles");
  // bookShelf.updateBook("Dungeon chronicles", "Haze");
  // bookShelf.updateBook("The last kingdom", "Dune");
  

 
// const aaa=
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) =>
// {
//   return users.filter(user=> user.eyeColor == color)
// };
// const arr=getUsersWithEyeColor(aaa, 'blue');
// console.log(arr);

//   const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
   
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (const item of this.potions)
//         if (item.name==newPotion.name)    
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
  
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       for (let i=0; i<this.potions.length; ++i)
//         if (this.potions[i].name==potionName) {
//           this.potions.splice(i, 1);
//           return;
//         }
//        return `Potion ${potionName} is not in inventory!`;
//     },
    
//     updatePotionName(oldName, newName) {
//       for (let i=0; i<this.potions.length; ++i)
//         if (this.potions[i].name==oldName) {
//           this.potions[i].name=newName;
//           return;
//         }
//       return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//   };
  
//   atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
//   atTheOldToad.removePotion("Dragon breath");
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");

// const calculateTotalBalance = users.reduce(
//   (totalBalance, user) => 
//    return totalBalance + user.balance,
//   0;
//    );


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localCompare(secondAuthor.author));

const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localCompare(firstAuthor.author));

const sortedByAscendingRating = [...books].sort((firstRating, secondRaiting) => firstRating.score - secondRaiting.score);

const sortedByDescentingRating = [...books].sort((firstRating, secondRaiting) => secondRaiting.score - firstRating.score );
