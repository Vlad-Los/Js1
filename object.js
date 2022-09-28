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
const feedback = {
    good:5,
    neutral: 10,
    bad: 3,
};

const values = Object.values(feedback);

console.log(values);
for (const value of values){
    console.log(value);
    
    totalFeedback += value;
}
console.log ('totalFeedback:',totalFeedback);