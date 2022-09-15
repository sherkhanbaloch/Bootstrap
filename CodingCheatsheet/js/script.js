let btnDark = document.getElementById('btnDark');
let body = document.getElementsByTagName('body')

btnDark.addEventListener('click', function test() {
    if (btnDark.innerHTML = "Dark Mode") {
        body[0].classList.add("bg-dark")
        body[0].classList.add("text-light")
        btnDark.innerHTML = "Light Mode";
    }
    else if (btnDark.innerHTML = "Light Mode") {
        body[0].classList.add("bg-light")
        body[0].classList.add("text-dark")
    }
})