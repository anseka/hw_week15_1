const cites = ['Москва', 'Анапа', 'Самара', 'Сочи'];
let temperatures = [];
let listInner = [];
let max = document.querySelector('#max');
let min = document.querySelector('#min');
let list = document.querySelector('#list');

for (let i = 0; i < cites.length; i++) {
    let temperature = 0;
do {
temperature = prompt(`Введите температуру в ${cites[i]}`);

if (isNaN(temperature) || temperature === '') {
    alert(`Введите число!`)
}
    } 
    
while (isNaN(temperature) || temperature === '');

temperatures.push(Number(temperature));
}

for (let i = 0; i < cites.length; i++) {
list.innerHTML += `<p>${cites[i]} : ${temperatures[i]} &deg</p>`
}

max.innerHTML = `Максимальная оценка: ${Math.max(...temperatures)} &deg`;
min.innerHTML = `Минимальная оценка: ${Math.min(...temperatures)} &deg`;
