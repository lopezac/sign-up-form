const pwdInput = document.querySelector("#pwd");
const pwdConfirmInput = document.querySelector("#pwd-confirm");

pwdInput.addEventListener("input", () => toggleErrorClass(pwdInput));
pwdConfirmInput.addEventListener("input", () => toggleErrorClass(pwdConfirmInput));

function toggleErrorClass(input) {
    if ((pwdInput.value === "" && pwdConfirmInput.value === "") || 
    (pwdInput.value !== pwdConfirmInput.value)) {
        pwdInput.parentElement.className = "error";
        pwdConfirmInput.parentElement.className = "error";
    } else {
        pwdInput.parentElement.className = "";
        pwdConfirmInput.parentElement.className = "";
    }
}

toggleErrorClass(pwdInput);
toggleErrorClass(pwdConfirmInput);