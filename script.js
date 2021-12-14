let main = function(takeAction, firstNum, secondNum) {
    takeAction = prompt('Выберите действие');
    firstNum = +prompt('Введите первое число');
    secondNum = +prompt('Введите второе число');

    if(takeAction == "+") {
        console.log(`${firstNum} ${takeAction} ${secondNum} = ${sum(firstNum, secondNum)}`);
    } else if (takeAction == "-") {
        console.log(`${firstNum} ${takeAction} ${secondNum} = ${sub(firstNum, secondNum)}`);
    } else if (takeAction == "*") {
        console.log(`${firstNum} ${takeAction} ${secondNum} = ${mult(firstNum, secondNum)}`);
    } else if(takeAction == "/"){
        console.log(`${firstNum} ${takeAction} ${secondNum} = ${div(firstNum, secondNum)}`);
    } else {
        console.log("выберите действие среди +,-,*,/");
    }
};

main();

function sum (a, b){
    return a + b;
}

function sub (a, b){
    return a - b ;
}

function mult (a, b){
    return a * b;
}

function div (a, b){
    return a / b;
}

