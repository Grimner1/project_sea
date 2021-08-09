// debugger;



// ------------------------------------------------ Блок расставления кораблей

function firstPosition(){
    let ocbX = (Math.round(Math.random() * 4) + 1);
    let ocbY = ((Math.round(Math.random() * 4) + 1) * 10);
    let XY = ocbX + ocbY;
    return XY;
}

let random = firstPosition();


function xORy() {
    let z = Math.round(Math.random() * 1);
    let x;
    if (z === 0) {
        x = 1;
    } else if (z === 1) {
        x = 10;
    } else {
        x = 111;
    };
    return x;
};

let ocb = xORy();


let pal1 = random;
let pal2 = pal1 + ocb;
let pal3 = pal2 + ocb;

let mass = [];

// console.log(pal1, pal2, pal3);

// -----------------------------------------------------------------Блок инициализации первичных данных

let shoot;
let hits = 3;
let shoots = 0;

let isSunk = false;

// ---------------------------------------------------------------------Блок цикла выстрелов

function displayMessage(msg) {
    let messege = document.getElementById('message');
    messege.innerHTML = msg;
};

function displayHit(shoot) {
    let cell = document.getElementById(shoot);
    cell.setAttribute('class', 'hit');
};

function displayMiss(shoot) {
    let cell = document.getElementById(shoot);
    cell.setAttribute('class', 'miss');
};


function start(shoot) {

    if (isSunk === true) {
        alert('Ты уже победил. нажми F5 для игры заново');
    };

if (shoot === null) {
    displayMessage('Ты сдался!');
} else if (shoot < 11 || shoot > 77){
    displayMessage('Не верные координаты!');
} else if (mass.includes(+shoot)) {
    displayMessage('Ты сюда уже стрелял');
} else {
shoots += 1;

switch(+shoot) {
    case pal1: 
        hits -= 1;
        pal1 = null;
        mass.push(+shoot);
        displayHit(shoot);
        displayMessage(`Попадание! Осталось ${hits} палуб!`);
        break;
    case pal2: 
        hits -= 1;
        pal2 = null;
        mass.push(+shoot);
        displayHit(shoot);
        displayMessage(`Попадание! Осталось ${hits} палуб!`);
        break;
    case pal3: 
        hits -= 1;
        pal3 = null;
        mass.push(+shoot);
        displayHit(shoot);
        displayMessage(`Попадание! Осталось ${hits} палуб!`);
        break;
    default: 
        mass.push(+shoot);
        displayMiss(shoot);
        displayMessage('MuMo!');
};
    if (hits <= 0 ) {
            isSunk = true;
        };
    };

// ---------------------------------------блок подсчета и выдачи результатов

    let sniper;

    if (isSunk === true) {
        if (shoots <= 14) {
            sniper = 'Да ты настоящий снайпер!';
        } else if (shoots > 4 && shoots <= 25) {
            sniper = 'Не плохой результат.';
        } else if (shoots > 35) {
            sniper = 'Нуу... Мазила ты, короче...';
        } else {
            sniper = 'Ну хз';
        };

    displayMessage(`Ты потопил корабль за ${shoots} выстрелов. ${sniper}`);
    }
};

console.log(pal1, pal2, pal3);

function init() {
    let shooting = document.getElementById('fire');
    shooting.onclick = shootings;
};


function coordinates(ocbX, ocbY) {
    let x;
    let y = ocbY;

    if (y < 1 || y > 7) {
        y = +100;
    };

    switch(ocbX) {
        case 'а':
            x = 10 + +y;
            break;
        case 'б':
            x = 20 + +y;
            break;
        case 'в':
            x = +30 + +y;
            break;
        case 'г':
            x = 40 + +y;
            break;
        case 'д':
            x = 50 + +y;
            break;
        case 'е':
            x =+60 + +y;
            break;
        case 'ё':
            x = 70 + +y;
            break;
        default:
            x = 100 + +y;
    };

    return x;
};



function shootings() {
    let input = document.getElementById('input');
    let inputNum = input.value;
    let ocbY = +inputNum[1];

    if (inputNum.length !== 2 || ocbY < 1 || ocbY > 7 || inputNum === null || !isFinite(ocbY)) {
        displayMessage('Вы ввели не верные координаты');
        input.value = '';
    } else {
        let ocbX = inputNum[0].toLowerCase();
        let xy = coordinates(ocbX, ocbY);
        start(xy);
        input.value = '';
        return inputNum;
    };
};

window.onload = init;
