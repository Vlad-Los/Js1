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

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
};

console.log (Object.keys(x).length);