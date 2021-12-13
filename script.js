let takeAction,
    firstNum,
    secondNum;

let data = function() {
    takeAction = prompt('Выберите действие');
    firstNum = +prompt('Введите первое число');
    secondNum = +prompt('Введите второе число');

    if(takeAction == "+") {
        sum (firstNum, secondNum);
    } else if (takeAction == "-") {
        sub (firstNum, secondNum);
    } else if (takeAction == "*") {
        mult (firstNum, secondNum);
    } else if(takeAction == "/"){
        div (firstNum, secondNum);
    } else {
        console.log("выберите действие среди +,-,*,/");
    }
};

data();


function sum (){
    console.log(`${firstNum} ${takeAction} ${secondNum} = ${firstNum + secondNum}`);
}

function sub (){
    console.log(`${firstNum} ${takeAction} ${secondNum} = ${firstNum - secondNum}`);
}

function mult (){
    console.log(`${firstNum} ${takeAction} ${secondNum} = ${firstNum * secondNum}`);
}

function div (){
    console.log(`${firstNum} ${takeAction} ${secondNum} = ${firstNum / secondNum}`);
}