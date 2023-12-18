let expression = "";

function appendDigit(digit) {
    expression += digit;
    update();
}

function appendOperator(operator) {
    console.log(operator);
    expression += operator;
    update();
}

function clearResult() {
    expression = "";
    update();
}

function deleteDigit() {
    expression = expression.slice(0, -1);
    update();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result;
        update();
    } catch (error) {
        expression = "";
        update("Error");
    }
}

function update(value) {
    value = expression
    document.getElementById("result").value = value;
}
