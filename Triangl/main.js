let a = parseFloat(prompt('Input the first side'))
let b = parseFloat(prompt('Input second side'))
let c = parseFloat(prompt ('Input the third'))

function triangleDef(){
if (a+b>c && b+c>a && a+c>b){ //проверяет правильность треугольник 
    if (a == b && b == c){ 
        alert('Triangle is equilateral')
    }

    else if (a == b || b == c || a == c ){
        alert('Triangle is isosceles')
    }

    else {
        alert('Triangle is scalene')
    }
}
else{
    alert(' Triangle can not exist')
}
}

triangleDef()

