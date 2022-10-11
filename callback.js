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

const onGetPositioneSuccess = function(position){
    console.log(`Это вызов onGetPositionSuccess`);
    console.log (position);
};

const onGetPositioneError = function(error){
    console.log(`Это вызов onGetPositioneError`);
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositioneSuccess,
    onGetPositioneError,
);