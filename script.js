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
    reset();
    computed = false;
  }

  let num = btn.getAttribute('id');
  currentOperand += num;
  displayValue += num;
  inputScreen.textContent = displayValue;
}))

operatorButtons.forEach(btn => btn.addEventListener('click', () => {
  computed = false;

  if (!firstOperand) {
    firstOperand = currentOperand;
  } else if (currentOperand) {
    let result = operate(+firstOperand, +currentOperand, operator);
    firstOperand = result;
    operator = '';
    displayValue = result;
    resultScreen.textContent = displayValue;
  }

  if (!operator) {
    operator = btn.getAttribute('id');
    displayValue += operator;
    inputScreen.textContent = displayValue;
    currentOperand = '';
  }
}))

equalsButton.addEventListener('click', () => {
  if (currentOperand){
    let result = operate(+firstOperand, +currentOperand, operator);
    resultScreen.textContent = result;
    computed = true;
  }
})

clearButton.addEventListener('click', reset);

function reset(){
  displayValue = '';
  currentOperand = '';
  firstOperand = '';
  operator = '';
  inputScreen.textContent = '0';
  resultScreen.textContent = '';
  computed = false;
}

function operate(a, b, operator) {
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
  if (b == 0) return "Zero division error";
  return a / b;
}

