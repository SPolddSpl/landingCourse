//Задача номер один
function firstTask() {
    const a = [1, 0, -3]; //Массив чисел, данных в условии задачи

    //Проверка всего массива, при помощи метода foreach
    a.forEach(num => {
        if (num === 0) {
            console.log(`Верно, Num: ${num}`)
        }
    });

}


// Задача номер два
function secondTask() {
    const split = [15, 30, 45, 59]; //Четверти часа
    let minute = getRandomNum(1, 59); //Генерация минуты

    // Проверка, к какому из сплитов относится данная минута
    for (let i = 0; i < split.length; i++) {
        if (minute <= split[i]) {
            console.log(`Split number: ${i + 1}, Minute: ${minute}`);
            break;
        }
    }

}


// Задача номер три
function thirdTask() {
    const test = [true, false]; //Значения из условия задачи


    //Проверка значений, при помощи метода foreach 
    test.forEach(x => {
        console.log(`Test =  ${x}`)
        x === true ? console.log(`Верно, короткая запись`) : console.log(`Неверно, короткая запись`);

        if (x) {
            console.log(`Верно, длинная запись`)
        } else {
            console.log(`Неверно, длинная запись`)
        }
    })
}

//Задача номер четыре 
function fourthTask() {
    const a = [5, 0, -3, 2]; //значения из условия задачи


    a.forEach(num => {
        if (num > 0 && num < 5) {
            console.log(`Верно, Num: ${num}`)
        } else {
            console.log(`Неверно, Num: ${num}`)
        }
    })
}

// Задача номер пять 
function fifthTask() {
    const a = [1, 0, 3];
    const b = [3, 6, 5];

    for (let i = 0; i < a.length; i++) {
        a[i] <= 1 && b[i] >= 3 ? console.log(a[i] + b[i]) : console.log(a[i] - b[i]);
    }
}

// Задача номер шесть
function sixthTask() {
    let num = getRandomNum(1, 4);

    switch (num) {
        case 1:
            console.log(`Зима`);
            break;
        case 2:
            console.log(`Весна`);
            break;
        case 3:
            console.log(`Лето`);
            break;
        case 4:
            console.log(`Осень`);
            break;
        default:
            console.error(`WOOOOPS`);
            break;
    }
}


// Задача номер семь
function seventhTask(params) {
    const month = getRandomNum(1, 12);

    console.log(`Месяц: ${month}`)
    switch (true) {
        case (month <= 2):
            console.log(`Зима`)
            break;
        case (month <= 5):
            console.log(`Весна`)
            break;
        case (month <= 8):
            console.log(`Лето`)
            break;
        case (month <= 11):
            console.log(`Осень`)
            break;

        default:
            console.log(`Зима (?)`)
            break;
    }
}

// Задача номер восемь
function eightTask() {
    const a = [1, 0, -3];

    a.forEach(num => {
        num != 0 ? console.log(`Верно, num: ${num}`) : console.log(`Неверно, num: ${num}`)
    })
}


//Генерация псевдо-случайного числа
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

firstTask();
secondTask();
thirdTask();
fourthTask();
fifthTask();
sixthTask();
seventhTask();
eightTask();