'use strict';

// 2.1
function kebabToCamel(str) {
    let words = str.split("-");

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].at(0).toUpperCase() + words[i].slice(1);
    }

    return words.join("");
}

console.log(kebabToCamel("background-color"));

// 2.2
let arr1 = [9,8,7,6,5,4,3,2,1];

let arr2 = arr1.slice();

let arr3 = Array.from(arr1);

arr2.reverse();

for (let i = 0; i < arr3.length / 2; i++) {
    let j = arr3.length - 1 - i;
    [arr3[i], arr3[j]] = [arr3[j], arr3[i]];
}

console.log("Исходный массив: ", arr1);
console.log("Первая копия (slice + reverse): ", arr2);
console.log("Вторая копия (Array.from + цикл): ", arr3);

// 2.3
let dict = {
    "en": { "привет": "hello", "мир": "world", "спасибо": "thank you", "до свидания": "goodbye"},
    "de": { "привет": "hallo", "мир": "welt", "спасибо": "danke", "до свидания": "auf wiedersehen"},
    "es": { "привет": "hola", "мир": "mundo", "спасибо": "gracias", "до свидания": "adios"},
};

function translate(word, language) {
    language = language.toLowerCase();
    word = word.toLowerCase();

    if (language === "english" || language === "английский") {language = "en"}
    if (language === "german" || language === "deutsch" || language === "немецкий") {language = "de"}
    if (language === "spanish" || language === "espanol" || language === "испанский") {language = "es"}

    if (dict[language] && dict[language][word]) {
        return dict[language][word];
    }

    return "Перевод не найден";
}

console.log(translate("привет", "english"));
console.log(translate("спасибо", "de"));
console.log(translate("мир", "испанский"));
console.log(translate("яблоко", "en"));  

// 2.4
let week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",
    showCurrentDay: function() {
        let day = new Date().getDay();

        if (day === 0) {
            day = 7;
        }

        console.log("Сегодня: " + this[day]);
    }
}

week.showCurrentDay();

// 2.5
let staff1 = {
    "Директор": "Смирнова Елена",
    "Бухгалтер": "Волкова Анастасия",
    "Программист": "Черных Татьяна",
    "Дизайнер": "Нечаева Маргарита",
    "Менеджер": "Кузнецова Мария"
};

let staff2 = Object.assign({}, staff1);

staff2["Директор"] = "Иванова Ксения";
staff2["Бухгалтер"] = "Орлова Мария";
staff2["Программист"] = "Макарова Софья";
staff2["Дизайнер"] = "Смирнова Наталья";
staff2["Менеджер"] = "Сидорова Екатерина";

console.log("Персонал:\n" + JSON.stringify(staff1) + "\n" + "Персонал 2:\n" + JSON.stringify(staff2));

// 2.6
let subjects = {
    list: "Математика,Физика,Информатика,История,Химия",

    add: function(name) {
        name = name.trim();

        let arr = this.list.split(",");

        if (!arr.includes(name)) {
            arr.push(name);
        }

        this.list = arr.join(",");
    },

    remove: function(name) {
        name = name.trim();

        let arr = this.list.split(",");
        let index = arr.indexOf(name);

        if (index !== -1) {
            arr.splice(index, 1);
        }

        this.list = arr.join(",");
    }
};