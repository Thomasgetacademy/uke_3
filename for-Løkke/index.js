
function generateNumbers() {
    for (let number = 2; number <= 20; number = number + 2) {
        document.getElementById('numberDiv').innerHTML += number;
    }
}