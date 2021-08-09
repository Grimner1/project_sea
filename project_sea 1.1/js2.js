// debugger;

  

let random = Math.round(Math.random() * 7);


let pal1 = random + 1;
let pal2 = pal1 + 1;
let pal3 = pal2 + 1;


let shoot;
let hits = 3;
let shoots = 0;

let isSunk = false;

let mass = [];

// -----------------------------


function displayMessage(msg) {
    let message = document.querySelector('#message');
    message.innerHTML = msg;
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
        alert('Ты уже победил. нажми F5 для игры заново')
    };

    if (shoot === null) {
    displayMessage('Ты сдался!');
    } else if (shoot < 1 || shoot > 10){
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
            displayMiss(shoot);
            mass.push(+shoot);
            displayMessage('MuMo!');
    };
        if (hits === 0 ) {
                isSunk = true;
        };
        


    };

    let sniper;



    if (isSunk === true) {
        if (shoots > 0) {
            if (shoots <= 4) {
                sniper = 'Да ты настоящий снайпер!';
            } else if (shoots > 4 && shoots <= 5) {
                sniper = 'Не плохой результат.';
            } else if (shoots > 5) {
                sniper = 'Нуу... Мазила ты, короче...';
            } else {
                sniper = 'Ну хз';
            };
            displayMessage(`Ты потопил корабль за ${shoots} выстрелов. ${sniper}`);
            

        };
    };
};

mass.includes()


function init() {
    let shooting = document.getElementById('fire');
    shooting.onclick = shootings;
};

function shootings() {
    let input = document.getElementById('input');
    let inputNum = input.value;
    start(inputNum);
    input.value = '';
};






window.onload = init;

