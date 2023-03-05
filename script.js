 // SELECTORS
const display = document.getElementById('display') ;
const topDisplay = document.getElementById('top-display') ;
const clearBtn = document.getElementById('clear-btn') ;
const deleteBtn = document.getElementById('delete-btn') ;

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


// VARIABLES

let firstInput = null // Will store our first operand
let secondInput = null // Will store our second operand
let activeOperator = null // Tells us what operator is currently active 

let displayToBeCleared = false // Tells us if the screen needs to be cleared on next user input
let topDisplayToBeCleared = false // Tells us if the top screen needs to be cleared on next user input

let displayValue = ''; // Stores/saves the user's number inputs as a string
let topDisplayValue = ''; // Stores/saves the user's operator & number inputs as an expression


// OPERATOR FUNCTIONS

 function add(a, b){ 
    let answer = a + b
    firstInput = answer
    secondInput = null
    display.innerText = answer
    displayToBeCleared = true
    activeOperator = null
    displayValue = ''
 }

 function subtract(a, b){ 
    let answer = a - b
    firstInput = answer
    secondInput = null
    display.innerText = answer
    displayToBeCleared = true
    activeOperator = null
    displayValue = ''
 }

 function multiply(a, b){ 
    let answer = a * b
    firstInput = answer
    secondInput = null
    display.innerText = answer
    displayToBeCleared = true
    activeOperator = null
    displayValue = ''
 }

 function division(a, b){ 
    let answer = a / b
    firstInput = answer
    secondInput = null
    display.innerText = answer
    displayValue = ''
    displayToBeCleared = true
    activeOperator = null
 }



function operate(){ // Calculator's Logic to determine what operator function to apply
    if (activeOperator === 'plus-btn') { 
        return add(firstInput, secondInput)
    }
    if (activeOperator === 'minus-btn') { 
    return subtract(firstInput, secondInput)
    }
    if (activeOperator === 'times-btn') { 
        return multiply(firstInput, secondInput)
    }
    if (activeOperator === 'divide-btn') { 
    return division(firstInput, secondInput)
    }
}


// BUTTON FUNCTIONS

function displayUserInput(e) { // Shows user input on calculator display & saves it to displayValue
    if (displayToBeCleared === true){
        clearDisplay()
        displayToBeCleared = false
        displayValue += e.target.innerText
        display.innerText += `${e.target.innerText}`

    } else {
        displayValue += e.target.innerText
        display.innerText += `${e.target.innerText}`
    }
}

function clearDisplay() { // Clears saved user input (displayValue) & the calculator's displays
    displayValue = '';
    display.innerText = '' ;
    topDisplay.innerText = '';
}

function clear() { // Clears all information stored and resets the caluclator to it's original state
    firstInput = null
    secondInput = null
    activeOperator = null
    displayToBeCleared = false
    topDisplayToBeCleared = false
    clearDisplay()
}

function removeLast() { // Removes the last value entered by user (from the claculator display & from displayValue)
    display.innerText = display.innerText.substring(0, display.innerHTML.length-1)
    displayValue = displayValue.substring(0, displayValue.length-1)

}

function evaluate(e) { // Evaluates if & what operator is clicked/active & whether a calculation needs to be done 
    if (activeOperator === null) {
        activeOperator = e.target.id 
        firstInput = Number(displayValue)
        clearDisplay()
    } else if (activeOperator !== null) {
        secondInput = Number(displayValue)
        clearDisplay()
        operate(activeOperator)
        activeOperator = e.target.id
        
    }
}


// EVENT LISTENERS & HANDLINGS

for (const buttons of numBtns) { 
    buttons.addEventListener('click', displayUserInput )
}

for (const buttons of operatorBtns) { 
    buttons.addEventListener('click', evaluate)
}

clearBtn.addEventListener('click', clear)

deleteBtn.addEventListener('click', removeLast)

equalsBtn.addEventListener('click', evaluate)

