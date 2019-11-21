
function createAlert() {
    alert('Alert from js');
};

let askQuestion = (question) => {
    return prompt(question);
};

window.askQuestion = askQuestion;

function setElementTextById(id, text) {
    document.getElementById(id).innerText = text;
}

function focusElement(element) {
    element.focus();
}

function givenMeRandomInt(maxIntSize) {
    DotNet.invokeMethodAsync('BlazorTutorial', 'GenerateRandomInt', maxIntSize)
        .then(result => {
            setElementTextById('randomNumberSpan', result);
        });
}