 // SELECTORS
 const display = document.getElementById('display') ;
 const topDisplay = document.getElementById('top-display') ;
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

    const numBtns = document.getElementsByClassName('num') ;
    const operatorBtns = document.getElementsByClassName('operator') ;


// OPERATOR FUNCTIONS

 function add(a, b){ 
    return a + b
 }

 function subtract(a, b){ 
    return a - b
 }

 function multiply(a, b){ 
    return a * b
 }

 function division(a, b){ 
    return a / b
 }


 /* Calculator's Logic to determine what operator function to apply */
    function operate(){ 
        if (activeOperator === '+') { 
            return add(a, b)
        }
        if (activeOperator === '-') { 
        return subtract(a, b)
        }
        if (activeOperator === '*') { 
            return multiply(a, b)
        }
        if (activeOperator === '/') { 
        return divide(a, b)
        }
    }


// BUTTON FUNCTIONS
let firstInput = null
let secondInput = null
let activeOperator = null // Tells us what operator is currently active

let displayValue = ''; // Stores/saves the user's input

function displayUserInput(e) { // Shows user input on calculator display & saves it to displayValue
    displayValue += e.target.innerText
    display.innerText += `${e.target.innerText}`
}

function clear() { // Clears saved user input (displayValue) & the calculator's display
    displayValue = '' ;
    display.innerText = '' ;
}

function removeLast() { // Removes the last value entered by user (from the claculator display & from displayValue)
    display.innerText = display.innerText.substring(0, display.innerHTML.length-1)
    displayValue = displayValue.substring(0, displayValue.length-1)

}


// EVENT LISTENERS & HANDLINGS

for (const buttons of numBtns) { 
    buttons.addEventListener('click', displayUserInput )
}

clearBtn.addEventListener('click', clear)

deleteBtn.addEventListener('click', removeLast)