// const btnAdd = document.querySelector('button[data-add]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');
// const resetBtn = document.querySelector ('button[data-reset]');

// let total = 0;


// btnAdd.addEventListener('click', function() {
//     console.log('click hhhhh');

//     const value =  Number(valueInput.value);

// total += value


// outputEl.textContent = total;

// valueInput.value = '';

// }
// );

// resetBtn.addEventListener('click' ,function () {
//     total = 0;
//     outputEl.textContent = total;
// });

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { 
//       case "starter":
//         price = 0;
//         break;
  
//       case "professional":
//         price = 20;
//         break;
  
//       case "organization":
//         price = 50;
//         break;
//     }
//     return price;
//   }
  
//   getSubscriptionPrice("professional");
//   getSubscriptionPrice("organization");
//   getSubscriptionPrice("starter");

function checkStorage(available, ordered) {
    
    if (ordered === 0) {
    return "Your order is empty!";
    }
    if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
    }
    return "The order is accepted, our manager will contact you";
  }
  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(70, 0);
  checkStorage(200, 20);
  checkStorage(200, 250);
  checkStorage(150, 0);



  const fruits = ["apple", "plum", "pear", "orange"];

  // Change code below this line
  firstElement[0];
  secondElement[1];
  lastElement[3];


  function getExtremeElements(array) {
    // Change code below this line
  array = (array[0,array.length - 1]);
    // Change code above this line
  }
  getExtremeElements([1, 2, 3, 4, 5]);
  getExtremeElements(["Earth", "Mars", "Venus"]);
  getExtremeElements(["apple", "peach", "pear", "banana"]);

