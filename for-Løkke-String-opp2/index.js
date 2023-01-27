let reversedTextVar = '';
let sliceNumber = 0;

/* Tror dette er noe av det dummere jeg har sett, men virker */
/* substring henter ut en bokstav mellom 2 gitte tall(index) */
function reverseText(textFromInput) {
    let text = textFromInput.value;
    for (let i = 0; i <= text.length - 1; i++) {
        reversedTextVar += text.substring(text.length - sliceNumber - 1, text.length - sliceNumber);
        sliceNumber++;
    }
    console.log(reversedTextVar);
}