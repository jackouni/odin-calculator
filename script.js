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
let displayValue = ''; // Stores the user's number inputs as a string

let activeOperator = null // Tells us what operator is currently active 
let displayToBeCleared = false // Tells us if the display needs to be cleared/reset on next user input
let canDelete = true // Tells us if we can use the delete/backspace function on our displays
let canOperate = true // Tells us if user can input another operator
let expressionToBeCleared = false

// OPERATOR FUNCTIONS

 function add(a, b){ 
    let answer = a + b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    displayToBeCleared = true
    canDelete = false

    display.innerText = answer.toString()
    expressionDisplay.innerText = answer.toString()
 }

 function subtract(a, b){ 
    let answer = a - b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    displayToBeCleared = true
    canDelete = false

    display.innerText = answer.toString()
    expressionDisplay.innerText = answer.toString()
 }

 function multiply(a, b){ 
    let answer = a * b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    displayToBeCleared = true
    canDelete = false

    display.innerText = answer.toString()
    expressionDisplay.innerText = answer.toString()
 }

 function division(a, b){ 
    if (a == 0 || b == 0){
        setTimeout(clearExpression, 1)
        setTimeout(clear, 1)
        alert("Nice try, you can't divide by zero! How about you try that again?")
        clear()
    }
    else {
        let answer = a / b
        firstInput = answer
        secondInput = null
        activeOperator = null

        displayValue = ''
        displayToBeCleared = true
        canDelete = false

        display.innerText = answer.toString()
        expressionDisplay.innerText = answer.toString()
    }
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
        canDelete = true
    } 

    displayValue += e.target.innerText
    display.innerText += `${e.target.innerText}`
}

function clearDisplay() { // Clears saved user number input (displayValue) & the calculator's displays
    displayValue = '';
    display.innerText = '' ;
}

function clearExpression() { // Clears the expression display
    expressionDisplay.innerText = ''
}

function removeLastDisplay(){ // Removes the last value entered by user (from the calculator display & from displayValue)
    display.innerText = display.innerText.substring(0, display.innerHTML.length-1) ;
    displayValue = displayValue.substring(0, displayValue.length-1) ;
}

function removeLastExpression() { // Removes last number currently in the expression display
    if (canDelete === true && display.innerText !== "" ) { 
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
    canDelete = true
    expressionDisplay.innerText = ''
    clearDisplay()
}

function displayExpression(e) { // Shows user's operator & number inputs as an expression on the top display
    expressionDisplay.innerText += `${e.target.innerText}`
}


// LOGIC FUNCTIONS

function evaluateOperator(e) { // Evaluates if & what operator is clicked/active & whether a calculation should be done 
    if (e.target.id === "equals-btn" && firstInput === null){
        setTimeout(clearExpression, 1)
        setTimeout(clear, 1)
        return alert("ERROR: You can't enter an '=' sign without an operator. Please input again.")
    }

    if (activeOperator === null) {
        if (display.innerText !== "0" && displayValue == ''){
            setTimeout(clearExpression, 1)
            setTimeout(clear, 1)
            return alert('ERROR: You need to enter a number before you can enter an operator! Please input again.')
        } else {
            activeOperator = e.target.id 
            firstInput = Number(displayValue)
            clearDisplay()
            canDelete = true
        }

    } else if (activeOperator !== null) {
        if (display.innerText == '' || ( (firstInput !== null && displayValue === '') && firstInput !== 0 ) ) {
            setTimeout(clearExpression, 1)
            setTimeout(clear, 1)
            return alert('ERROR: You need to enter a number to operate on! Please input again.')
        } else {
            secondInput = Number(displayValue)
            clearDisplay()
            canDelete = false
            operate(activeOperator)
            activeOperator = e.target.id
        }
    }
}


// EVENT LISTENERS & HANDLINGS

for (const buttons of numBtns) { 
    buttons.addEventListener('click', displayUserInput )
}

for (const buttons of operatorBtns) { 
    buttons.addEventListener('click', evaluateOperator)
}

for (const buttons of numBtns) { 
    buttons.addEventListener('click', displayExpression)
}

for (const buttons of operatorBtns) { 
    buttons.addEventListener('click', displayExpression)
} 

clearBtn.addEventListener('click', clear)

deleteBtn.addEventListener('click', removeLastExpression)

equalsBtn.addEventListener('click', evaluateOperator)