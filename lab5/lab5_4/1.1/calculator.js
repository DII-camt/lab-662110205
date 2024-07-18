function displayPlease(value) {
    document.getElementsById('input').value += value;
}

function clear() {
    document.getElementsById('input').value = '';
}

function calculate() {
    let input = document.getElementsById('input');
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
    
}