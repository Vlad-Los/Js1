// const friends = ['Mango' , 'Kivi' , 'Poly' , 'Ajax']
// console.log(friends);
// console.table(friends);



// console.log(friends[2]);

// friends[1] = 'shgdhfhg';

// const lastIndex = friends.length -1;
// console.log(lastIndex);1

// передача по ссылке и по значению

// передача по значению примитив

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a=20;

// console.log(a);
// console.log(b);

// передача по ссылке

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// console.log (a === b);

// console.log ([1, 2, 3] === [1, 2, 3]);

// --- Перебор (итерация ) массива

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length -1

for (let i=0; i < friends.length; i += 1 ){
console.log( friends[i]);
}