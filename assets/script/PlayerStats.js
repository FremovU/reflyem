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

const users = [{
    name: "Alex",
    company: "Google",
    email: "alex @gmail.com",
    phone: "+123456789123",
    balance: "$3",
    isActive: false,
    gender: "female",
},
    {
        name: "Alex",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+123456789123",
        balance: "$3",
        isActive: false,
        gender: "female",
    }, {
        name: "Alex",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+123456789123",
        balance: "$3",
        isActive: false,
        gender: "female",
    },
];
let table = document.createElement('table');
document.body.append(table);
let rowHeader = table.insertRow();
for(let prop in users[0]) {
    let cell = rowHeader.insertCell();
    cell.innerText = prop;
    console.log(prop);
}

for(let i = 0; i < users.length; i++) {
    let row = table.insertRow();
    for(let prop in users[i]) {
        let cell = row.insertCell();
        cell.innerText = users[i][prop];
    }
}