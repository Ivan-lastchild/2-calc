let main = function(takeAction, firstNum, secondNum) {
    takeAction = prompt('Выберите действие');
    firstNum = +prompt('Введите первое число');
    secondNum = +prompt('Введите второе число');

    if(takeAction == "+") {
        showResult(sum(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else if (takeAction == "-") {
        showResult(sub(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else if (takeAction == "*") {
        showResult(mult(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else if(takeAction == "/"){
        showResult(div(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else {
        console.log("выберите действие среди +,-,*,/");
    }
};

main();

function showResult(fun, a, b, c){
    console.log(`${a} ${c} ${b} = ${fun}`);
}

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

