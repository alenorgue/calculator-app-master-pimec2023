const theme = document.querySelector('.input');
theme.addEventListener('click', changeTheme);

function changeTheme(e) {
    if (e.target.value === '0') {
        document.getElementById("theme1").href = "css/styles.css";
        console.log('Test 0')
    }
    if (e.target.value === '1') {
        document.getElementById("theme1").href = "css/theme1.css";
        console.log('Test 1')
    }
    if (e.target.value === '2') {
        document.getElementById("theme1").href = "css/theme2.css";
        console.log('Test 2')
    }

}

const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const calcBtn = document.querySelector('.grid-container');

let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let shouldReset = false;

calcBtn.addEventListener('click', calculate);

function calculate(e) {
    const num = e.target.dataset.num;
    const operator = e.target.dataset.operator;
    const del = e.target.dataset.delete;
    const reset = e.target.dataset.reset;
    const output = e.target.dataset.output;

    if (num) {
        if (shouldReset) {
            currentOperand.textContent = '';
            shouldReset = false;
        }
        currentOperand.textContent += num;
        return;
    }


    if (operator) {

        if (currentOperator && currentOperand.textContent !== '') {
            secondOperand = currentOperand.textContent;
            const result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
            firstOperand = result;
            currentOperand.textContent = '';
            previousOperand.textContent = `${result} ${operator}`;
            currentOperator = operator;
            shouldReset = false;
        } else {
            currentOperator = operator;
            firstOperand = currentOperand.textContent;
            previousOperand.textContent = `${firstOperand} ${operator}`;
            currentOperand.textContent = '';
        }
        return;
    }

    if (output) {
        if (!firstOperand || !currentOperator || currentOperand.textContent === '') return;

        secondOperand = currentOperand.textContent;
        const result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
        currentOperand.textContent = result;
        previousOperand.textContent = '';
        firstOperand = result;
        currentOperator = '';
        shouldReset = true;
        return;
    }

    if (reset) {
        currentOperand.textContent = '';
        previousOperand.textContent = '';
        firstOperand = '';
        secondOperand = '';
        currentOperator = '';
        return;
    }

    if (del) {
        currentOperand.textContent = currentOperand.textContent.slice(0, -1);
        // if (previousOperand.innerHTML.length) {
        //     currentOperand.textContent = previousOperand.textContent.slice(0, -2)
        //     previousOperand.hidden = true;

        // }

    }
}



function operate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': if (b !== 0) {
            return a / b
        } else {
            return 'Error';
        }
        default: return '';
    }
}
