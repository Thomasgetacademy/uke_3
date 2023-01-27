
let countLabel = document.getElementById('countLabel');
const userInput = document.getElementById('userInput')
const vokaler = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å'];


function countVocals(textInput) {
    let count = 0;
    let text = textInput.value;
    for (let i = 0; i <= text.length; i++) {
        if (vokaler.includes(text[i])) {
            count++;
        }
    }
    countLabel.innerHTML = count; 
}

function resetCounter() {
    count = 0;
    countLabel.innerHTML = '0';
    document.getElementById('userInput').value = '';
    // userInput.value = '';
    // console.log(userInput.value);
}