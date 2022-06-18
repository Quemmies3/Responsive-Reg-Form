const form = document.getElementById("form");
const fName= document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit")

function checkInputs() {
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fNameValue === "") {
        setErrorFor(fName, "Field cannot be blank");
    } else {
        setClearErrorFor(fName, "");
    }

    if(lNameValue === "") {
        setErrorFor(lName, "Field cannot be blank");
    } else {
        setClearErrorFor(lName, "");
    }

    if(emailValue === "") {
        setErrorFor(email, "Field cannot be blank");
    } else {
        setClearErrorFor(email, "");
    }

    if(passwordValue === "") {
        setErrorFor(password, "Field cannot be blank");
    } else {
        setClearErrorFor(password, "");
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setClearErrorFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = "Clear";

    formControl.className = "form-control";
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});
