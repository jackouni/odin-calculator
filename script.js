 // SELECTORS
 const display = document.getElementById('display') ;
 const clearBtn = document.getElementById('clear-btn') ;
 const deleteBtn = document.getElementById('delete-btn') ;

 /* 'Operation' Buttons */
    const sevenBtn = document.getElementById('seven-btn') ;
    const eightBtn = document.getElementById('eight-btn') ;
    const nineBtn = document.getElementById('nine-btn') ;
    const divideBtn = document.getElementById('divide-btn') ;
    const fourBtn = document.getElementById('four-btn') ;
    const fiveBtn = document.getElementById('five-btn') ;
    const sixBtn = document.getElementById('six-btn') ;
    const timesBtn = document.getElementById('times-btn') ;
    const oneBtn = document.getElementById('one-btn') ;
    const twoBtn = document.getElementById('two-btn') ;
    const threeBtn = document.getElementById('three-btn') ;
    const minusBtn = document.getElementById('minus-btn') ;
    const decimalBtn = document.getElementById('decimal-btn') ;
    const zeroBtn = document.getElementById('zero-btn') ;
    const equalsBtn = document.getElementById('equals-btn') ;
    const plusBtn = document.getElementById('plus-btn') ;
 
 
 // OPERATOR FUNCTIONS

 function add(a, ...numbers){ 
    let sum = a ;
    for (const number of numbers){
        sum += number
    }
    return sum
 }

 function subtract(a, ...numbers){ 
    let sub = a;
    for(const number of numbers){
        sub -= number
    }
    return sub
 }

 function multiply(a, ...numbers){ 
    let multi = a;
    for(const number of numbers){
        multi *= number
    }
    return multi
 }

 function division(a, ...numbers){ 
    let divi = a;
    for(const number of numbers){
        divi /= number
    }
    return divi
 }

function operate(operator, a, ...numbers){ 
    if (operator === '+') { 
        return add(a,...numbers)
    }
    if (operator === '-') { 
       return subtract(a, ...numbers)
    }
    if (operator === '*') { 
        return multiply(a, ...numbers)
    }
    if (operator === '/') { 
       return divide(a, ...numbers)
    }
}





