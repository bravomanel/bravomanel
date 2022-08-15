let textDigit = document.getElementById("text");
let mainDisplay = document.getElementById("mainDisplay");
let subTextDigit = document.getElementById("subText");

let displayValue = document.createElement("p");
text.appendChild(displayValue);
let subDisplayValue = document.createElement("p");
subTextDigit.appendChild(subDisplayValue);

let number1, number2, operatorHolder, r;

let = resultOnDisplay = false;

function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function clear() {
  number1 = 0;
  number2 = 0;
  mainDisplay.textContent = "";
  subDisplayValue.textContent = "";
  operatorHolder = null;
}

function remove(x) {
  let newNum = Number(x.toString().slice(0, -1));
  mainDisplay.textContent = newNum;
}

function isResultOnDisplay(test) {
  if (test == true) {
    clear();
    resultOnDisplay = false;
  }
}

function middle(num1, operator) {
  number1 = Number(num1);
  operatorHolder = operator;
  mainDisplay.textContent = "";
  subDisplayValue.textContent = `${operatorHolder} ${number1}`;
}

function result(num2) {
  number2 = Number(num2);
  if (operatorHolder === "+") {
    r = sum(number1, number2);
  } else if (operatorHolder === "-") {
    r = subtract(number1, number2);
  } else if (operatorHolder === "*") {
    r = multiply(number1, number2);
  } else if (operatorHolder === "/") {
    r = divide(number1, number2);
  }
  mainDisplay.textContent = Math.round(r * 100) / 100;
  subDisplayValue.textContent = `${number1} ${operatorHolder} ${number2}`;
  resultOnDisplay = true;
}

document.querySelectorAll(".digitsStyle").forEach((item) =>
  item.addEventListener("click", function (e) {
    isResultOnDisplay(resultOnDisplay);
    clickNumber(item.id);
  })
);

document.addEventListener("keypress", function (event) {
  isResultOnDisplay(resultOnDisplay);
  digitNumber(event.key);
});

function clickNumber(a) {
  switch (a) {
    case (a = "zero"):
      mainDisplay.textContent += "0";
      break;
    case (a = "one"):
      mainDisplay.textContent += "1";
      break;
    case (a = "two"):
      mainDisplay.textContent += "2";
      break;
    case (a = "three"):
      mainDisplay.textContent += "3";
      break;
    case (a = "four"):
      mainDisplay.textContent += "4";
      break;
    case (a = "five"):
      mainDisplay.textContent += "5";
      break;
    case (a = "six"):
      mainDisplay.textContent += "6";
      break;
    case (a = "seven"):
      mainDisplay.textContent += "7";
      break;
    case (a = "eight"):
      mainDisplay.textContent += "8";
      break;
    case (a = "nine"):
      mainDisplay.textContent += "9";
      break;
    case (a = "dot"):
      mainDisplay.textContent += ".";
      break;
    case (a = "sum"):
      middle(mainDisplay.textContent, "+");
      break;
    case (a = "subtract"):
      middle(mainDisplay.textContent, "-");
      break;
    case (a = "multiply"):
      middle(mainDisplay.textContent, "*");
      break;
    case (a = "divide"):
      middle(mainDisplay.textContent, "/");
      break;
    case (a = "backSpace"):
      remove(mainDisplay.textContent);
      break;
    case (a = "equal"):
      result(mainDisplay.textContent);
      break;
    case (a = "clear"):
      clear();
      break;
  }
}

function digitNumber(a) {
  switch (a) {
    case (a = "0"):
      mainDisplay.textContent += "0";
      break;
    case (a = "1"):
      mainDisplay.textContent += "1";
      break;
    case (a = "2"):
      mainDisplay.textContent += "2";
      break;
    case (a = "3"):
      mainDisplay.textContent += "3";
      break;
    case (a = "4"):
      mainDisplay.textContent += "4";
      break;
    case (a = "5"):
      mainDisplay.textContent += "5";
      break;
    case (a = "6"):
      mainDisplay.textContent += "6";
      break;
    case (a = "7"):
      mainDisplay.textContent += "7";
      break;
    case (a = "8"):
      mainDisplay.textContent += "8";
      break;
    case (a = "9"):
      mainDisplay.textContent += "9";
      break;
    case (a = "."):
      mainDisplay.textContent += ".";
      break;
    case (a = ","):
      mainDisplay.textContent += ".";
      break;
    case (a = "+"):
      middle(mainDisplay.textContent, "+");
      break;
    case (a = "-"):
      middle(mainDisplay.textContent, "-");
      break;
    case (a = "*"):
      middle(mainDisplay.textContent, "*");
      break;
    case (a = "/"):
      middle(mainDisplay.textContent, "/");
      break;
    case (a = "Backspace"):
      remove(mainDisplay.textContent);
      break;
    case (a = "c"):
      clear();
      break;
    case (a = "Enter"):
      result(mainDisplay.textContent);
      break;
  }
}
