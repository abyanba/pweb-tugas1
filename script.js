function input(value) {
    document.getElementById('display').value += value;
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function equal() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}
