'use strict';

// 3.1
let calendar = document.querySelector('.calendar');
let title = document.querySelector('.calendar-title');

let d = new Date();
let monthName = d.toLocaleString('ru-RU', { month: 'long' });

title.textContent = monthName + ' ' + d.getFullYear();

let firstDay = new Date();
firstDay.setDate(1);
 
let lastDay = new Date(firstDay);
lastDay.setMonth(lastDay.getMonth() + 1);
lastDay.setDate(0);

let tr = document.createElement('tr');

for (let i = 0; i < 7; i++) {
    let day = new Date(2026, 9, 12 + i);
    let td = document.createElement('td');

    td.textContent = day.toLocaleString('ru-RU', { weekday: 'short' });
    td.classList.add('cell-head');
    tr.append(td);
}
calendar.append(tr);

let blank = (firstDay.getDay() + 6) % 7;
 
tr = document.createElement('tr');

for (let i = 0; i < blank; i++) {
    tr.append(document.createElement('td'));
}
 
for (let dt = 1; dt <= lastDay.getDate(); dt++) {
    let td = document.createElement('td');
    td.textContent = dt;
 
    if (dt === d.getDate()) {
        td.classList.add('today');
    }
    tr.append(td);

    if (tr.children.length === 7) {
        calendar.append(tr);
        tr = document.createElement('tr');
    }
}
    
if (tr.children.length > 0) {
    calendar.append(tr);
}

// 3.2
let multiTable = document.querySelector('.multi-table');

for (let y = 1; y <= 10; y++) {
    let tr = document.createElement('tr');
    for (let x = 1; x <= 10; x++) {
        let td = document.createElement('td');
        td.textContent = x * y;
        if (x === 1 || y === 1) {
            td.style.fontWeight = 'bold';
        }
        tr.append(td);
    }
    multiTable.append(tr);
}