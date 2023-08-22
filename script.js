
const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultDisplay = document.getElementById('equals');

addButton.addEventListener('click', performAddition);
subtractButton.addEventListener('click', performSubtraction);
multiplyButton.addEventListener('click', performMultiplication);
divideButton.addEventListener('click', performDivision);


function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function performAddition() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);

  if (isValidNumber(value1) && isValidNumber(value2)) {
    resultDisplay.textContent = `Equals: ${value1 + value2}`;
  }
}

function performSubtraction() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);

  if (isValidNumber(value1) && isValidNumber(value2)) {
    resultDisplay.textContent = `Equals: ${value1 - value2}`;
  }
}

function performMultiplication() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);

  if (isValidNumber(value1) && isValidNumber(value2)) {
    resultDisplay.textContent = `Equals: ${value1 * value2}`;
  }
}

function performDivision() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);

  if (isValidNumber(value1) && isValidNumber(value2) && value2 !== 0) {
    resultDisplay.textContent = `Equals: ${value1 / value2}`;
  } else {
    resultDisplay.textContent = 'Equals: Cannot divide by zero';
  }
}
