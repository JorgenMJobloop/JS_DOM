const toggleButton = document.getElementById("toggle-btn");
const calculatorButton = document.getElementById("calculator-btn");

//console.error("Hello JS!\nDEBUG: remember to delete all dev console logs before submitting code to production!");

/**
 * switch the background of our website
 * @returns void
 */
function themeSwitcher() {
    document.body.classList.toggle("dark-mode");
    //console.info("dev: the theme switch button was clicked.");
}
/*
function parseStringToNumber(str) {
    const numbersAsStrings = ["one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten"];
    for(let i = 0; i < numbersAsStrings.length; i++) {
        numbersAsStrings[i].toLowerCase()
    }
}
*/

calculatorButton.addEventListener("click", function calculateSum() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    let result;


    switch (operator) {
        case "+":
            result = number1 + number2;
            //console.log(result);
            break;
        case "-":
            result = number1 - number2;
            //console.log(result);
            break;
        case "*":
            result = number1 * number2;
            //console.log(result);
            break;
        case "/":
            if (number2 == 0) {
                //console.error("Cannot divide by 0!");
            }
            else {
                result = number1 / number2;
                //console.log(result);
            }
            break;
        case "^":
            result = Math.pow(number1, number2);
            break;
        case "PI":
            result = Math.PI;
            break;
        case "E":
            if (number1 <= 2 || number1 === null) {
                // console.log(result);
                // console.log(number1);
                result = Math.pow(Math.E, 1);
            }
            result = Math.pow(number1, Math.E);
            break;
        default:
            result = "Invalid operator!";
            break;
    }

    document.getElementById("result").textContent = result;

    //console.log("dev: ", number1, number2, operator);
});

toggleButton.addEventListener("click", themeSwitcher);
