let inputA = prompt("Enter first number:");
let a = Number(inputA);
let valueA = inputA;
while (true) {
  if (isNaN(a) || a === 0) {
    inputA = prompt("Enter first number:", `${valueA}`);
    a = Number(inputA);
    valueA = inputA;
  } else {
    break;
  }
}

let isValidOperator = false;
let operator = prompt("Enter operator:");

while (!isValidOperator) {
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    isValidOperator = true;
  } else {
    operator = prompt("Enter operator:", `${operator}`);
  }
}

let inputB = prompt("Enter second number:");
let b = Number(inputB);
let valueB = inputB;
while (true) {
  if (isNaN(b) || b === 0) {
    inputB = prompt("Enter second number:", `${valueB}`);
    b = Number(inputB);
    valueB = inputB;
  } else {
    break;
  }
}

console.log(calc(a, b, operator));

function calc(a, b, opr) {
  switch (opr) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      return "";
  }
}
