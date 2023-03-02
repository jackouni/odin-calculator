 // OPERATOR FUNCTIONS

 function add(a, ...numbers){ // ADD
    let sum = a ;
    for (const number of numbers){
        sum += number
    }
    return sum
 }

 function subtract(a, ...numbers){ // SUBTRACT
    let sub = a;
    for(const number of numbers){
        sub -= number
    }
    return sub
 }

 function multiply(a, ...numbers){ // MULTIPLY
    let multi = a;
    for(const number of numbers){
        multi *= number
    }
    return multi
 }

 function divide(a, ...numbers){ // DIVIDE
    let divi = a;
    for(const number of numbers){
        divi /= number
    }
    return divi
 }

function operate(operator, a, ...numbers){ // The OPERATE
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





