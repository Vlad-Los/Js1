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

const showProfileInfo = function( {
    name,
    tag,
    location,
    avatar,
    stats: {followers, views, likes},
}){
    console.log(name,tag,location,avatar,followers,views,likes);
};

const profile = {
    name:'Jacques Gluke',
    tag: 'khgkfg',
    location:'kafjgkjfhgkagh',
    avatar: 'dkksfhkdshfkd',
    stats:{
        followers: 5603,
        views: 4827,
        likes:454,
    },

};

showProfileInfo(profile);