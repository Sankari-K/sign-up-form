let submit = document.querySelector("button")
let show_output = document.querySelector(".user-error")

function checkform() {
    let pwd = document.querySelector("#pwd").value;
    let cpwd = document.querySelector("#c-pwd").value;

    if (pwd != cpwd) {
        show_output.textContent = "*Passwords do not match";
        return false;
    }
    else {
        return true;
    }
}

document.addEventListener('input', () => {
    show_output.textContent = '';
})