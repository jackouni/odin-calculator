// SELECTORS

const display = document.getElementById('display') ;
const expressionDisplay = document.getElementById('top-display') ;

const clearBtn = document.getElementById('clear-btn') ;
const deleteBtn = document.getElementById('delete-btn') ;
const positiveNegativeBtn = document.getElementById('positive-negative') ;

const decimalBtn = document.getElementById('decimal-btn') ;
const equalsBtn = document.getElementById('equals-btn') ;

const numBtns = document.getElementsByClassName('num') ;
const operatorBtns = document.getElementsByClassName('operator') ;


// VARIABLES

let firstInput = null // Stores our first operand
let secondInput = null // Stores our second operand
let displayValue = ''; // Stores the user's number inputs as a string

    // Boolean Logic:
let activeOperator = null // Tells us what operator is currently active 
let displayToBeCleared = false // Tells us if the display needs to be cleared/reset on next user input
let canDelete = true // Tells us if we can use the delete/backspace function on our displays
let canOperate = true // Tells us if user can input another operator
let activeDecimal = false // Tells us if a decimal is being used


// OPERATOR FUNCTIONS

 function add(a, b){ 
    let answer = a + b
    firstInput = answer
    secondInput = null
    displayValue = ''
    activeOperator = null

    displayToBeCleared = true
    canDelete = false
    activeDecimal = false

    if (answer % 1 !== 0){ // If answer has a decimal point in it --> round to 4th decimal place
        answer = answer.toFixed(3)
    }  if (answer % 1 === 0) { // If no decimal point --> round to be a whole number
        answer = answer.toFixed(0) 
     }

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
    activeDecimal = false

    if (answer % 1 !== 0){ // If answer has a decimal point in it --> round to 4th decimal place
        answer = answer.toFixed(3)
    } if (answer % 1 === 0) { // If no decimal point --> round to be a whole number
       answer = answer.toFixed(0) 
    }

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
    activeDecimal = false

    if (answer % 1 !== 0){ // If answer has a decimal point in it --> round to 4th decimal place
        answer = answer.toFixed(3)
    }  if (answer % 1 === 0) { // If no decimal point --> round to be a whole number
        answer = answer.toFixed(0) 
     }

    display.innerText = answer.toString()
    expressionDisplay.innerText = answer.toString()
 }

 function division(a, b){ 
    if (b == 0){
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
        activeDecimal = false

        if (answer % 1 !== 0){ // If answer has a decimal point in it --> round to 4th decimal place
            answer = answer.toFixed(3)
        } if (answer % 1 === 0) { // If no decimal point --> round to be a whole number
            answer = answer.toFixed(0) 
         }

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


// DISPLAY & INPUT FUNCTIONS

function displayUserInput(e) { // Shows user's number input on calculator display & saves it to displayValue
    if (firstInput && !activeOperator) return alert('Please enter an operator')

    else if (displayToBeCleared === true) {
        clearDisplay()
        displayToBeCleared = false
        canDelete = true
    } 

    displayValue += e.target.innerText
    display.innerText += `${e.target.innerText}`

}

function clearDisplay() { // Clears saved user number input (displayValue) & the calculator's display
    displayValue = '';
    display.innerText = '' ;
}

function clearExpression() { // Clears the expression display
    expressionDisplay.innerText = ''
}

function removeLastDisplay(){ // Removes/deletes the last value entered by user (from the calculator display & from displayValue)
    display.innerText = display.innerText.substring(0, display.innerHTML.length-1) ;
    displayValue = displayValue.substring(0, displayValue.length-1) ;
}

function removeLastExpression() { // Removes/deletes last number currently in the expression display
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
    activeDecimal = false
    clearDisplay()
}

function displayExpression(e) { // Shows user's operator & number inputs as an expression in the expression display
    if (firstInput && !activeOperator) return 
    else expressionDisplay.innerText += `${e.target.innerText}`
}


// LOGIC FUNCTIONS

function evaluateOperator(e) { // Evaluates if & what operator is clicked/active & whether a calculation should be done 
    if (activeOperator === null) {

        if (display.innerText !== "0" && display.innerText === ''){ // Don't allow user to enter an operator & reset calculator
            setTimeout(clearExpression, 1)
            setTimeout(clear, 1)
            return alert('ERROR: You need to enter a number before you can enter an operator! Please input again.')

        } else { // Allow user to enter an operator, apply logic, & operate on it
            activeOperator = e.target.id 
            if (firstInput === null) firstInput = Number(displayValue)
            activeDecimal = false
            clearDisplay()
            canDelete = true
        }
    }

    else if (activeOperator !== null) {

        if ((!displayValue && !displayValue.length) ) { // Don't allow user to enter an operator & reset calculator
            setTimeout(clearExpression, 1)
            setTimeout(clear, 1)
            return alert('ERROR: Entered in an operator twice! Please input again.')

        } else { // Allow user to enter an operator, apply logic, & operate on it
            secondInput = Number(displayValue)
            canDelete = false
            clearDisplay()
            operate(activeOperator)
            activeOperator = e.target.id
        }
    }
}

function evaluateDecimal(e) { // Evaluates if our user has already entered a decimal

    if (!display.innerText) { // Allow user to input a decimal, display it & apply logic
        displayUserInput(e)
        displayExpression(e)
        activeDecimal = true
    } 
    else if (display.innerText) { 
        if (activeDecimal === false) {
            activeDecimal = true
            displayUserInput(e)
            displayExpression(e)
        }
        else if (activeDecimal === true) return // Don't allow a decimal to be inputted by user & do nothing
    }
}

function evaluateEquals() { // Evaluates if current input(s)/expression can be operated on when '=' is clicked

    if ( (firstInput || firstInput === 0) && displayValue) { // Allow user to input '=', apply logic, & operate on it.
        secondInput = Number(displayValue)
        canDelete = false
        clearDisplay()
        operate(activeOperator) 
    }
    else if ( (firstInput && !displayValue)
        || (!firstInput)
        || (!activeOperator) ) { // Don't allow user to input an '=' & reset calculator
            setTimeout(clearExpression, 1)
            setTimeout(clear, 1)
            return alert("ERROR: You can't enter an '=' sign without an operator and/or input. Please input again.")
    }
}


// CLICK EVENTS

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

equalsBtn.addEventListener('click', evaluateEquals)

decimalBtn.addEventListener('click', evaluateDecimal)


// KEYDOWN EVENTS

document.addEventListener('keydown', e => {
    if (e.key === 'Backspace'){
        removeLastExpression()
    }
    if (e.key === 'Backspace' && e.shiftKey === true) {
        clear()
    }
})
