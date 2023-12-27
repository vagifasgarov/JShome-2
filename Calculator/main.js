let a = prompt('Input first number')
let b = prompt ('Input second number')
let c = prompt('Select option + , - , / , *')





function calculateNumbers(){
if (c == "+"){
result = a + b
}
else if (c == "-") {
    result = a - b
}
else if( c == "/") {
    if (b== 0 ){ // Деление на ноль
        alert('U CANT DEVIDE TO ZERO!')
    }
    else{
    result = a / b; 
    }
}
else if (c == "*"){
    result = a * b
}
else {
    alert('WRONG OPTION')
}
console.log(result)
}


function isNumber(){
    if(!isNaN(a) && !isNaN(b)){ // проверка если это не число
        calculateNumbers()
    }
    else{
        alert("a or b is Not a number!!!!!")
    }
}
isNumber()