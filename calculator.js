let statement;
let count = 0;
let addValue = 0;
let subValue = 0;
let multiValue = 0;
let divValue = 0;

//Assigned all buttons so I can call them from JS instead of from HTML
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btnDeci = document.querySelector('#btnDeci');
const btnSub = document.querySelector('#btnSub');
const btnAdd = document.querySelector('#btnAdd');
const btnMulti = document.querySelector('#btnMulti');
const btnDiv = document.querySelector('#btnDiv');
const btnEqual = document.querySelector('#btnEqual');
const btnReset = document.querySelector('#btnReset');
const btnDel = document.querySelector('#btnDel');
const calculatorScreen = document.querySelector('#calculatorScreen');
const history = document.querySelector('#historyScreen');

//Using physical keys. Might try adding a loop since code is repetitive.

window.addEventListener('keydown', (event) => {
    let digit = event.key;
    switch (digit) {
        case '0':
            if (count === 0) {
                return calculatorScreen.textContent = count += 0;
            }
            {
                return calculatorScreen.textContent = count += '0';
            }
        case '1':
            if (count === 0) {
                return calculatorScreen.textContent = count += 1;
            }
            {
                return calculatorScreen.textContent = count += '1';
            }
        case '2':
            if (count === 0) {
                return calculatorScreen.textContent = count += 2;
            }
            {
                return calculatorScreen.textContent = count += '2';
            };
        case '3':
            if (count === 0) {
                return calculatorScreen.textContent = count += 3;
            }
            {
                return calculatorScreen.textContent = count += '3';
            };
        case '4':
            if (count === 0) {
                return calculatorScreen.textContent = count += 4;
            }
            {
                return calculatorScreen.textContent = count += '4';
            };
        case '5':
            if (count === 0) {
                return calculatorScreen.textContent = count += 5;
            }
            {
                return calculatorScreen.textContent = count += '5';
            };
        case '6':
            if (count === 0) {
                return calculatorScreen.textContent = count += 6;
            }
            {
                return calculatorScreen.textContent = count += '6';
            };
        case '7':
            if (count === 0) {
                return calculatorScreen.textContent = count += 7;
            }
            {
                return calculatorScreen.textContent = count += '7';
            };
        case '8':
            if (count === 0) {
                return calculatorScreen.textContent = count += 8;
            }
            {
                return calculatorScreen.textContent = count += '8';
            };
        case '9':
            if (count === 0) {
                return calculatorScreen.textContent = count += 9;
            }
            {
                return calculatorScreen.textContent = count += '9';
            };
        case '+':
            calculatorScreen.textContent = '+'
            addValue = count;
            count = 0;
            statement = 'addition'
            break;
        case '-':
            calculatorScreen.textContent = '-'
            subValue = count;
            count = 0;
            statement = 'subtract'
            break;
        case '*':
            calculatorScreen.textContent = 'x'
            multiValue = count;
            count = 0;
            statement = 'multiply'
            break;
        case '/':
            calculatorScreen.textContent = '/'
            divValue = count;
            count = 0;
            statement = 'divide'
            break;
        case 'Escape':
            count = 0;
            calculatorScreen.textContent = count;
            history.textContent = ''
            break;
        case '.':
            calculatorScreen.textContent = count += '.';
            break;
        case 'Backspace':
            let removeDigit = count.substring(0, count.length - 1);
            calculatorScreen.textContent = removeDigit;
            count = removeDigit;
            break;
    }
});

//Could possibly merge with code above

window.addEventListener('keydown', (event) => {
    let equals = event.key;
    if (equals !== 'Enter') {
        return
    } switch (statement) {
        case 'subtract':
            calculatorScreen.textContent = parseFloat(subValue) - parseFloat(count);
            history.textContent = `${parseFloat(subValue)} - ${parseFloat(count)}`;
            break;
        case 'addition':
            calculatorScreen.textContent = parseFloat(addValue) + parseFloat(count);
            history.textContent = `${parseFloat(addValue)} + ${parseFloat(count)}`;
            break;
        case 'multiply':
            calculatorScreen.textContent = parseFloat(multiValue) * parseFloat(count);
            history.textContent = `${parseFloat(multiValue)} x ${parseFloat(count)}`;
            break;
        case 'divide':
            calculatorScreen.textContent = parseFloat(divValue) / parseFloat(count);
            history.textContent = `${parseFloat(divValue)} / ${parseFloat(count)}`;
            break;
    }
    console.log(count)
});

//Reset count value when equals key is released
window.addEventListener('keyup', (event) => {
    let resetCount = event.key;
    if (resetCount === "Enter") {
        addValue = 0;
        subValue = 0;
        multiValue = 0;
        divValue = 0;
        count = 0;
    }
    console.log2(count)
});

//Using the mouse

btn0.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 0;
    }
    {
        return calculatorScreen.textContent = count += '0';
    }
});
btn1.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 1;
    }
    {
        return calculatorScreen.textContent = count += '1';
    }
});
btn2.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 2;
    }
    {
        return calculatorScreen.textContent = count += '2';
    }
});
btn3.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 3;
    }
    {
        return calculatorScreen.textContent = count += '3';
    }
});
btn4.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 4;
    }
    {
        return calculatorScreen.textContent = count += '4';
    }
});
btn5.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 5;
    }
    {
        return calculatorScreen.textContent = count += '5';
    }
});
btn6.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 6;
    }
    {
        return calculatorScreen.textContent = count += '6';
    }
});
btn7.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 7;
    }
    {
        return calculatorScreen.textContent = count += '7';
    }
});
btn8.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 8;
    }
    {
        return calculatorScreen.textContent = count += '8';
    }
});
btn9.addEventListener('click', function () {
    if (count === 0) {
        return calculatorScreen.textContent = count += 9;
    }
    {
        return calculatorScreen.textContent = count += '9';
    }
});
//Issue with buttons. When pressed multiple times count resorts back to 0
btnAdd.addEventListener('click', function () {
    calculatorScreen.textContent = '+'
    addValue = count;
    count = 0;
    statement = 'addition'
})
btnSub.addEventListener('click', function () {
    calculatorScreen.textContent = '-'
    subValue = count;
    count = 0;
    statement = 'subtract'
})
btnMulti.addEventListener('click', function () {
    calculatorScreen.textContent = 'x'
    multiValue = count;
    count = 0;
    statement = 'multiply'
})
btnDiv.addEventListener('click', function () {
    calculatorScreen.textContent = '/'
    divValue = count;
    count = 0;
    statement = 'divide'
})
btnReset.addEventListener('click', function () {
    count = 0;
    calculatorScreen.textContent = count;
    history.textContent = ''
})
btnDeci.addEventListener('click', function () {
    calculatorScreen.textContent = count += '.';
})
btnDel.addEventListener('click', function () {
    //When all numbers are deleted the screen ends up blank
    let removeDigit = count.substring(0, count.length - 1);
    calculatorScreen.textContent = removeDigit;
    count = removeDigit;
})
btnEqual.addEventListener('click', function () {
    //Swapped over to switch case instead of If statements. 
    switch (statement) {
        case 'subtract':
            calculatorScreen.textContent = parseFloat(subValue) - parseFloat(count);
            history.textContent = `${parseFloat(subValue)} - ${parseFloat(count)}`;
            break;
        case 'addition':
            calculatorScreen.textContent = parseFloat(addValue) + parseFloat(count);
            history.textContent = `${parseFloat(addValue)} + ${parseFloat(count)}`;
            break;
        case 'multiply':
            calculatorScreen.textContent = parseFloat(multiValue) * parseFloat(count);
            history.textContent = `${parseFloat(multiValue)} x ${parseFloat(count)}`;
            break;
        case 'divide':
            calculatorScreen.textContent = parseFloat(divValue) / parseFloat(count);
            history.textContent = `${parseFloat(divValue)} / ${parseFloat(count)}`;
            break;
    }
    //Deleting values for buttons so when equals is pushed after the result. The screen goes back to 0.
    addValue = 0;
    subValue = 0;
    multiValue = 0;
    divValue = 0;
    count = 0;
});