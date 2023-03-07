// SELECTORS

const display = document.getElementById('display') ;
const expressionDisplay = document.getElementById('top-display') ;
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

let displayToBeCleared = false // Tells us if the display needs to be cleared/reset on next user input
let expressionToBeCleared = false // Tells us if the top display needs to be cleared/reset on next user input
let canDelete = true // Tells us if we can use the delete/backspace function on our displays

let displayValue = ''; // Stores/saves the user's number inputs as a string


// OPERATOR FUNCTIONS

 function add(a, b){ 
    let answer = a + b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    display.innerText = answer
    displayToBeCleared = true
    canDelete = false

    expressionDisplay.innerText = answer.toString()
 }

 function subtract(a, b){ 
    let answer = a - b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    display.innerText = answer
    displayToBeCleared = true
    canDelete = false

    expressionDisplay.innerText = answer.toString()
 }

 function multiply(a, b){ 
    let answer = a * b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    display.innerText = answer
    displayToBeCleared = true
    canDelete = false

    expressionDisplay.innerText = answer.toString()
 }

 function division(a, b){ 
    let answer = a / b
    firstInput = answer
    secondInput = null
    activeOperator = null

    displayValue = ''
    display.innerText = answer
    displayToBeCleared = true
    canDelete = false

    expressionDisplay.innerText = answer.toString()
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


// DISPLAY FUNCTIONS

function displayUserInput(e) { // Shows user's number input on calculator display & saves it to displayValue
    if (displayToBeCleared === true) {
        clearDisplay()
        displayToBeCleared = false
    } 

    displayValue += e.target.innerText
    display.innerText += `${e.target.innerText}`
}

function clearDisplay() { // Clears saved user number input (displayValue) & the calculator's displays
    displayValue = '';
    display.innerText = '' ;
}

function removeLastDisplay(){ // Removes the last value entered by user (from the calculator display & from displayValue)
    display.innerText = display.innerText.substring(0, display.innerHTML.length-1) ;
    displayValue = displayValue.substring(0, displayValue.length-1) ;
}

function removeLastExpression() { // Removes last number currently in the expression display
    if (canDelete === true && display.innerText !== "") { 
        expressionDisplay.innerText = expressionDisplay.innerText.substring(0, expressionDisplay.innerText.length-1)
        removeLastDisplay()
    } else {
        return
    }
}

function clear() { // Clears all information stored & resets the caluclator to it's original state
    firstInput = null
    secondInput = null
    activeOperator = null
    displayToBeCleared = false
    expressionToBeCleared = false
    expressionDisplay.innerText = ''
    clearDisplay()
}

function displayExpression(e) { // Shows user's operator & number inputs as an expression on the top display
    if (expressionToBeCleared === true) {
        clearDisplay()
        expressionToBeCleared = false
    }
    expressionDisplay.innerText += `${e.target.innerText}`
}


// LOGIC FUNCTIONS

function evaluate(e) { // Evaluates if & what operator is clicked/active & whether a calculation needs to be done 
    if (activeOperator === null) {
        activeOperator = e.target.id 
        firstInput = Number(displayValue)
        canDelete = true
        clearDisplay()
    } else if (activeOperator !== null) {
        secondInput = Number(displayValue)
        clearDisplay()
        canDelete = true
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

for (const buttons of numBtns) { 
    buttons.addEventListener('click', displayExpression)
}

for (const buttons of operatorBtns) { 
    buttons.addEventListener('click', displayExpression)
}

clearBtn.addEventListener('click', clear)

deleteBtn.addEventListener('click', removeLastExpression)

equalsBtn.addEventListener('click', evaluate)