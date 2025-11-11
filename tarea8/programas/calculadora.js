
const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');


let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

function clearDisplay() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand = currentOperand.toString() + number.toString();
    }
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    
    
    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break; 
        case '*': computation = prev * current; break; 
        case '/': computation = prev / current; break; 
        default: return;
    }
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
}

function updateDisplay() {
    display.textContent = currentOperand;
}


numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        appendNumber(btn.dataset.number || btn.textContent); 
        updateDisplay();
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chooseOperation(btn.dataset.operator);
        updateDisplay();
    });
});

equalsBtn.addEventListener('click', () => {
    calculate();
    updateDisplay();
});

clearBtn.addEventListener('click', () => {
    clearDisplay();
    updateDisplay();
});


clearDisplay();
updateDisplay();