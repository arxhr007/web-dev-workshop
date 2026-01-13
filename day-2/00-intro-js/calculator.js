function calculate() {
    const expression = document.getElementById('expression').value;
    
    try {
        const result = eval(expression);
        document.getElementById('result').innerHTML = result;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error';
    }
}

function clearInput() {
    document.getElementById('expression').value = '';
    document.getElementById('result').innerHTML = '0';
}
