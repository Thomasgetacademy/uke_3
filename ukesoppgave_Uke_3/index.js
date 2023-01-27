// Model

var element1 = " ___ "
var element2 = " ___ "
var element3 = " ___ "
var element4 = " ___ "

// View

updateView()

function updateView() {
    document.getElementById('app').innerHTML = /* HTML */ `
    <div class="topDiv">

    <h1 id="textToChange">Once, there was a ${element1} ${element2} that ${element3} in the ${element4} - and great things happened </h1>
    
    </div>
    <div class="botDiv">
    <button onclick="buttonTest(this, 'field1')" class="button1 buttons">Green</button>
    <button onclick="buttonTest(this, 'field1')" class="button1 buttons">Red</button> <br>
    <button onclick="buttonTest(this, 'field2')" class="button1 buttons">Cat</button> 
    <button onclick="buttonTest(this, 'field2')" class="button1 buttons">Man</button> <br>
    <button onclick="buttonTest(this, 'field3')" class="button1 buttons">Stared</button>
    <button onclick="buttonTest(this, 'field3')" class="button1 buttons">Jumped</button> <br>
    <button onclick="buttonTest(this, 'field4')" class="button1 buttons">Pool</button> 
    <button onclick="buttonTest(this, 'field4')" class="button1 buttons">Wall</button> <br>
    </div>`
}

// controller

function buttonTest(element, buttonname) {
    if (buttonname === 'field1') {
        element1 = element.innerHTML;
        updateView()
    } else if (buttonname === 'field2') {
        element2 = element.innerHTML;
        updateView()
    } else if (buttonname === 'field3') {
        element3 = element.innerHTML;
        updateView()
    } else if (buttonname === 'field4') {
        element4 = element.innerHTML;
        updateView()
    }
}