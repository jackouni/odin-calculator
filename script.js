 // OPERATOR FUNCTIONS

 function add(...numbers){ // ADD
    let sum = 0 ;
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





