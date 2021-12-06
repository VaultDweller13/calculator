const inputScreen = document.getElementById('input');
const resultScreen = document.getElementById('result');
const clearButton = document.getElementById('clear-button');
const inputButtons = document.querySelectorAll('.input');
const operatorButtons = document.querySelectorAll('.op');
const equalsButton = document.getElementById('equals-button');
let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';
let currentOperand = '';
let computed = false;

clearButton.addEventListener('click', clearDisplay);

inputButtons.forEach(btn => btn.addEventListener('click', () => {
  if (computed) {
    clearDisplay();
    computed = false;
  }

  let num = btn.getAttribute('id');
  displayValue += num;
  currentOperand += num;
  inputScreen.textContent = displayValue;
}))

operatorButtons.forEach(btn => btn.addEventListener('click', () => {
  if (!firstOperand) {
    firstOperand = currentOperand;
  } else {
    secondOperand = currentOperand; 
    displayValue = operate(+firstOperand, +secondOperand, operator);
    firstOperand = displayValue;
    resultScreen.textContent = displayValue;
    secondOperand = '';
  }
  operator = btn.getAttribute('id');
  currentOperand = ''

  displayValue += operator;
  inputScreen.textContent = displayValue;
}))

equalsButton.addEventListener('click', () => {
  if (!computed) {
    secondOperand = currentOperand;
    resultScreen.textContent = operate(+firstOperand, +secondOperand, operator);
    currentOperand = firstOperand = secondOperand = operator = '';
    computed = true;
  }
})

function clearDisplay(){
  displayValue = '';
  inputScreen.textContent = '0';
  resultScreen.textContent = ''
}

function operate(a, b, operator) {
  let result = '';
  switch (operator) {
    case '+': 
      result = add(a, b);
      break;
    case '-':
      result = substract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
  }

  // currentOperand = firstOperand = secondOperand = operator = '';
  // computed = true;
  return result;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

