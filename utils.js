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

function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { 
      case "starter":
        price = 0;
        break;
  
      case "professional":
        price = 20;
        break;
  
      case "organization":
        price = 50;
        break;
    }
    return price;
  }
  
  getSubscriptionPrice("professional");
  getSubscriptionPrice("organization");
  getSubscriptionPrice("starter");