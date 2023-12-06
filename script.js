var input = document.getElementById('enter');
function display(number) {
    input.value += number;
}

function clearscreen() {
    input.value = '';
}

function calculate() {
    try {
    var exp = input.value;
    if (exp.includes('×')) {
        exp = exp.replace(/×/g, '*');
    }
    else if (exp.includes('^')) {
        exp = exp.replace(/\^/, '**');
    }
    var res = eval(exp);
    input.value = res;
}
    catch (e) {
        input.value = "Invalid Expression";
    }
}