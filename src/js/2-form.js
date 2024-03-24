const form = document.querySelector(".feedback-from");
const email = form.elements.email;
const message = form.elements.message;
const key = "feedback-form-state";


form.addEventListener("input", saveValue);
function saveValue(event) {
    const valueObj = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    const value = event.target.value;
    valueObj[event.target.name] = value.trim();
    localStorage.setItem(key, JSON.stringify(valueObj));
}
if (localStorage.getItem(key)) {
    setPreviousValue();
}

function setPreviousValue() {
    const previousValues = JSON.parse(
        localStorage.getItem("feedback-form-state")
    );
    const previousEmail = previousValues.email;
    const previousMessage = previousValues.message;
    email.value = previousEmail || ``;
    message.value = previousMessage || ``;
}

form.addEventListener("submit", formSubmit);
function formSubmit(event) {
    if (email.value.trim() && message.value.trim()) {
        event.preventDefault();
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
        event.currentTarget.reset();
        localStorage.removeItem("feedback-form-state");
    } else {
        alert("Fill in all the fields of the form")
    }
}