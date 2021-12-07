const inputScreen = document.getElementById('input');
const resultScreen = document.getElementById('result');
const clearButton = document.getElementById('clear-button');
const inputButtons = document.querySelectorAll('.input');
const operatorButtons = document.querySelectorAll('.op');
const equalsButton = document.getElementById('equals-button');
let displayValue = '';
let firstOperand = '';
let currentOperand = '';
let operator = '';
let computed = false;

inputButtons.forEach(btn => btn.addEventListener('click', () => {
  if (computed) {
    clearDisplay();
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
    operate(+firstOperand, +currentOperand, operator);
    computed = false;
  }
  operator = btn.getAttribute('id');
  currentOperand = '';
  displayValue += operator;
  inputScreen.textContent = displayValue;
}))

equalsButton.addEventListener('click', () => {
  if (!computed && currentOperand) {
    operate(+firstOperand, +currentOperand, operator);
  }
})

clearButton.addEventListener('click', clearDisplay);

function clearDisplay(){
  displayValue = '';
  currentOperand = '';
  firstOperand = '';
  operator = '';
  inputScreen.textContent = '0';
  resultScreen.textContent = '';
  computed = false;
}

function operate(a, b, operator) {
  console.log(`operation: ${a} ${operator} ${b}`);
  let result = null;
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

  resultScreen.textContent = result;
  // inputScreen.textContent = result;
  firstOperand = result;
  // currentOperand = operator = '';
  operator = '';
  computed = true;
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

