const checkBox = document.getElementById('flexCheckDefault');
const Hp = document.getElementById('Hp');

checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
        console.log('123');
        Hp.innerText = Number(Hp.innerText) + 100;
    } else {
        console.log('321');
        Hp.innerText = Number(Hp.innerText) - 100;
        checkBox.classList.remove('text-danger');
        checkBox.classList.add('text-success');
    }
})