// Read number1, operator and number1 from HTML page
function getValuesFromCalculator1(){
    // Read values
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    //alert("Read values: " + number1 + operator + number2);
    // Write result to HTML page
    let returnValue = calculate(number1, operator, number2);

    document.getElementById("result").innerHTML = returnValue;

    
}

// This function make calculation
function calculate(numberX, operator, numberY){
    let returnValue = 0;
    switch (operator){
        case "+":
            returnValue = numberX + numberY;
            break;
        case "-":
            returnValue = numberX - numberY;
            break;
        case "*":
            returnValue = numberX * numberY;
            break;
        case "/":
            returnValue = numberX / numberY;
            break;
    }
    return returnValue;
}