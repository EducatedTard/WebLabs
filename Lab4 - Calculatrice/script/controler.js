/**
 * Created by Daniel on 2/4/2016.
 */
var calcu = new calculator();
var onScreen = "0";
var number = 0;
var operator = "";


function updateScreen(){
    $("#screen").html(onScreen);
}

function enterNewNumber(num){
    number = number *10 + num;
    onScreen = number;
    updateScreen();

}
function enterOperator(op){
    calcu.result = number;
    number = 0;
    operator = op;
    onScreen = operator;
    updateScreen();
}

function getValue(){
    switch(operator){
        case "+":
            calcu.add(number);
            break;
        case "-":
            calcu.substract(number);
            break;
        case "*":
            calcu.multiply(number);
            break;
        case "/":
            calcu.divide(number);
            break;
        case "sin":
            calcu.sin();
            break;
        case "cos":
            calcu.cos();
            break;
        case "tan":
            calcu.tan();
            break;
        case "!":
            calcu.factorial();
            break;
        default:
            break;
    }
    number = calcu.result;
    onScreen = number;
    updateScreen();
}


$(document).ready(function(){

    $("#zero").click(function(){
        enterNewNumber(0);
    });

    $("#one").click(function(){
        enterNewNumber(1);
    });

    $("#two").click(function(){
        enterNewNumber(2);
    });

    $("#three").click(function(){
        enterNewNumber(3);
    });

    $("#four").click(function(){
        enterNewNumber(4);
    });

    $("#five").click(function(){
        enterNewNumber(5);
    });

    $("#six").click(function(){
        enterNewNumber(6);
    });

    $("#seven").click(function(){
        enterNewNumber(7);
    });

    $("#eight").click(function(){
        enterNewNumber(8);
    });

    $("#nine").click(function(){
        enterNewNumber(9);
    });

    $("#factorial").click(function(){
        enterOperator("!");
    });

    $("#sin").click(function(){
        enterOperator("sin");
    });

    $("#cos").click(function(){
        enterOperator("cos");
    });

    $("#tan").click(function(){
        enterOperator("tan");
    });

    $("#add").click(function(){
        enterOperator("+");
    });

    $("#substract").click(function(){
        enterOperator("-");
    });

    $("#mutiply").click(function(){
        enterOperator("*");
    });

    $("#divide").click(function(){
        enterOperator("/");
    });

    $("#memory").click(function(){
        calcu.memorize();
    });

    $("#clear").click(function(){
        onScreen = "0";
        number = 0;
        operator = "";
        calcu.clear();
        updateScreen();
    });

    $("#geo").click(function(){

    });

    $("#equals").click(function(){
        getValue();
    });
});
