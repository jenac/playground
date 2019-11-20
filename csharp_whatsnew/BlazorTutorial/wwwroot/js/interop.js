
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