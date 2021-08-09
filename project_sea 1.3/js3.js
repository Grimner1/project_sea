// каждый корабль - это объект который хранит в себе:
    // корабль:
            // палуба 1: координаты\нет координат если сбит
            // палуба 2: координаты\нет координат если сбит
            // палуба 3: координаты\нет координат если сбит
            // живой: тру\фолс
            
// Рандумное выставление первого корабля
// Второй корабль через функцию while: на основе первого корабля создаётся масив в который добавляются все координаты вокруг каждой палубы (9 клеток), и тут вторая 
// проверка - координаты добавляются, если их еще нет в масиве. В итоге из 9-ти палуб должно получится 18 координат. Координаты рандумно создаются до тех пор, пока не будет совпадений
// с масивом первого корабля.
// ==========================================

// Внесенные изменения:

// - убрал ключ кораблей "кол-во НР" и вынес его отдельной переменной,
//     так как будет мешать при проверке совпадения координат с выстрелом;
// - убрал ключ кораблей 'status = true\folse', потому как не имеет смысла
//     расчитывать жив\мёртв каждого корабля отдельно, потому как есть
//     общее кол-во НР;

// ==========================================

// -------------------------------------

// ---------------
// debugger;
// ---------------
// Блок модель кораблей:

//    Объект корабль 1: {
//         Координаты палуба 1: ?;
//         Координаты палуба 2: ?;
//         Координаты палуба 3: ?;
//         Координаты палуба 4: ?;
//         Статус живой или мертвый: true or false;
//     };

//     Объект корабль 2: {
//         Координаты палуба 1: ?;
//         Координаты палуба 2: ?;
//         Координаты палуба 3: ?;
//         Статус живой или мертвый: true or false;
//     };

//     Объект корабль 3: {
//         Координаты палуба 1: ?;
//         Координаты палуба 2: ?;
//         Статус живой или мертвый: true or false;
//     };

//     Общее кол-во НР: НР корабль 1 + НР корабль 2 + Нр корабль 3 + НР корабль 4;
//     Массив координат в которые уже заняты:.....;
// -------------------------------------
// Блок начальных параметров:

let ship1 = {
    pal1: 0,
    pal2: 0,
    pal3: 0,
    pal4: 0,
};

let ship2 = {
    pal1: 0,
    pal2: 0,
    pal3: 0,
};

let ship3 = {
    pal1: 0,
    pal2: 0,
};

let ship4 = {
    pal1: 0,
};

allHP = 10;
const massXY = [];
let mass = [];

// ------------------------------------------

// Блок рандумное раставления кораблей:

// Функция 1 (радумное выставление первого корабля 1) {
//     - рандумное выставление корабля
//     - запись координат в общек корабля;    
//     - запись в массив координат координаты корабля + все координаты вокруг корабля;
// };

// Функция 2 (рандумное выставление второго корабля 2) {
//     - функция (рандумное выставление) {
//         1) рандумные координаты;
//         2) проверка есть ли координаты в массиве; если есть - возврат к пункту №1;
//      };
//     - запись координат в объект корабля;
//     - запись в массив координат координаты корабля + все координаты вокруг корабля;
// };

// Функция 3 (рандумное выставления корабля 3) {
//     - функция (рандумное выставление) {
//         1) рандумные координаты;
//         2) проверка есть ли координаты в массиве; если есть - возврат к пункту №1;
//      };
//     - запись координат в объект корабля;
// };


// =================================================ship1

function xORy () {
    let z = Math.round(Math.random() * 1);
    let x;

    if (z === 0) {
        x = 1;
    } else {
        x = 10;
    };

    return x;
};

let vector = xORy();

function coorShip1 () {
    let ocbX = Math.round(Math.random() * 3) + 1;
    let ocbY = (Math.round(Math.random() * 3) + 1) * 10;
    
    let XY = ocbX + ocbY;

       
    ship1.pal1 = XY;
    ship1.pal2 = ship1.pal1 + vector;
    ship1.pal3 = ship1.pal2 + vector;
    ship1.pal4 = ship1.pal3 + vector;

    

    return ship1;
};

ship1 = coorShip1();


function zone () {
    let yy = [];
    let x = [];
    let xx = [ship1.pal1 + 1, ship1.pal1 - 1, ship1.pal1 + 10, ship1.pal1 - 10,
            ship1.pal2 + 1, ship1.pal2 - 1, ship1.pal2 + 10, ship1.pal2 - 10,
            ship1.pal3 + 1, ship1.pal3 - 1, ship1.pal3 + 10, ship1.pal3 - 10,
            ship1.pal4 + 1, ship1.pal4 - 1, ship1.pal4 + 10, ship1.pal4 - 10];
            
            if (vector === 1){
                let xxx = [(ship1.pal1 - 1) + 10, (ship1.pal1 - 1) - 10,
                        (ship1.pal4 + 1) + 10, (ship1.pal4 + 1) - 10];

               x = xx.concat(xxx);
            } else {
                let xxx = [(ship1.pal1 - 10) + 1, (ship1.pal1 - 10) - 1,
                        (ship1.pal4 + 10) + 1, (ship1.pal4 + 10) - 1];

                x = xx.concat(xxx);
            };

        for (let i of x) {
            let y = true;

            for (let z of yy) {
                if (z === i) {
                    y = false;
                };
            }
            if (y === true) {
                yy.push(i)
            };
        };
        
        return yy;
};

let qqq = zone();

const massXY2 = massXY.concat(qqq);

// =========================================Ship2

function coorShip2 () {
    let y = false;
    let xy1;
    let XY;
    let vector;
  
    while (y === false) {
      
        function xORy () {
            let z = Math.round(Math.random() * 1);
            let x;
        
            if (z === 0) {
                x = 1;
            } else {
                x = 10;
            };
        
            return x;
        };
  
        vector = xORy();
   
  
        let ocbX = Math.round(Math.random() * 4) + 1;
        let ocbY = (Math.round(Math.random() * 4) + 1) * 10;
        
        XY = ocbX + ocbY;
  
  
        function crossCoordination () {
            let x = [];
  
            let x1 = XY;
            x.push(x1);
            let x2 = x1 + vector;
            x.push(x2);
            x3 = x2 + vector;
            x.push(x3);
            
            return x;
        };
  
        xy1 = crossCoordination();
  
  
        y = true;
  
        for (let i of xy1) {
            for (let z of massXY2) {
                if (i === z) {
                    y = false;
                };
            };
        };

  
    };

    ship2.pal1 = XY;
    ship2.pal2 = ship2.pal1 + vector;
    ship2.pal3 = ship2.pal2 + vector;
    
    return ship2;
};

ship2 = coorShip2();


function zone2 () {
    let yy = [];
    let x = [];
    let xx = [ship2.pal1 + 1, ship2.pal1 - 1, ship2.pal1 + 10, ship2.pal1 - 10,
              ship2.pal2 + 1, ship2.pal2 - 1, ship2.pal2 + 10, ship2.pal2 - 10,
              ship2.pal3 + 1, ship2.pal3 - 1, ship2.pal3 + 10, ship2.pal3 - 10];
            
            if (vector === 1){
                let xxx = [(ship2.pal1 - 1) + 10, (ship2.pal1 - 1) - 10,
                        (ship2.pal3 + 1) + 10, (ship2.pal3 + 1) - 10];

               x = xx.concat(xxx);
            } else {
                let xxx = [(ship2.pal1 - 10) + 1, (ship2.pal1 - 10) - 1,
                        (ship2.pal3 + 10) + 1, (ship2.pal3 + 10) - 1];

                x = xx.concat(xxx);
            };

        for (let i of x) {
            let y = true;

            for (let z of massXY2) {
                if (z === i) {
                    y = false;
                };
            }
            if (y === true) {
                yy.push(i)
            };
        };
        
        return yy;
};

let qqq2 = zone2();
    
let massXY3 = massXY2.concat(qqq2);

// =============================================ship3

function coorShip3 () {
    let y = false;
    let xy1;
    let XY;
    let vector;
  
    while (y === false) {
      
        function xORy () {
            let z = Math.round(Math.random() * 1);
            let x;
        
            if (z === 0) {
                x = 1;
            } else {
                x = 10;
            };
        
            return x;
        };
  
        vector = xORy();
   
  
        let ocbX = Math.round(Math.random() * 5) + 1;
        let ocbY = (Math.round(Math.random() * 5) + 1) * 10;
        
        XY = ocbX + ocbY;
  
  
        function crossCoordination () {
            let x = [];
  
            let x1 = XY;
            x.push(x1);
            let x2 = x1 + vector;
            x.push(x2);
                       
            return x;
        };
  
        xy1 = crossCoordination();
  
  
        y = true;
  
        for (let i of xy1) {
            for (let z of massXY3) {
                if (i === z) {
                    y = false;
                };
            };
        };

  
    };

    ship3.pal1 = XY;
    ship3.pal2 = ship3.pal1 + vector;
    
    
    return ship3;
};

ship3 = coorShip3();


function zone3 () {
    let yy = [];
    let x = [];
    let xx = [ship3.pal1 + 1, ship3.pal1 - 1, ship3.pal1 + 10, ship3.pal1 - 10,
              ship3.pal2 + 1, ship3.pal2 - 1, ship3.pal2 + 10, ship3.pal2 - 10];
                          
            if (vector === 1){
                let xxx = [(ship3.pal1 - 1) + 10, (ship3.pal1 - 1) - 10,
                        (ship3.pal2 + 1) + 10, (ship3.pal2 + 1) - 10];

               x = xx.concat(xxx);
            } else {
                let xxx = [(ship3.pal1 - 10) + 1, (ship3.pal1 - 10) - 1,
                        (ship3.pal2 + 10) + 1, (ship3.pal2 + 10) - 1];

                x = xx.concat(xxx);
            };

        for (let i of x) {
            let y = true;

            for (let z of massXY3) {
                if (z === i) {
                    y = false;
                };
            }
            if (y === true) {
                yy.push(i)
            };
        };
        
        return yy;
};

let qqq3 = zone3();
    
let massXY4 = massXY3.concat(qqq3);

// =====================================ship4

function coorShip4 () {
    let y = false;
    let xy1;
    let XY;
    let vector;
  
    while (y === false) {
      
        function xORy () {
            let z = Math.round(Math.random() * 1);
            let x;
        
            if (z === 0) {
                x = 1;
            } else {
                x = 10;
            };
        
            return x;
        };
  
        vector = xORy();
   
  
        let ocbX = Math.round(Math.random() * 6) + 1;
        let ocbY = (Math.round(Math.random() * 6) + 1) * 10;
        
        XY = ocbX + ocbY;
  
  
        function crossCoordination () {
            let x = [];
  
            let x1 = XY;
            x.push(x1);
                                   
            return x;
        };
  
        xy1 = crossCoordination();
  
  
        y = true;
  
        for (let i of xy1) {
            for (let z of massXY4) {
                if (i === z) {
                    y = false;
                };
            };
        };

  
    };

    ship4.pal1 = XY;
        
    return ship4;
};

ship4 = coorShip4();

// ---------------------------------------Блок инициализации данных для выстрела:

let shoot;
let hits = 10;
let shoots = 0;
let isSunk = false;
const allShipMass = [ship1, ship2, ship3, ship4];
const allShipObj = {ship1, ship2, ship3, ship4};

// -----------------------------------------Блок цикла выстрела:

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


console.log(ship1, ship2, ship3, ship4);


function start(shoot) {

            if (isSunk === true) {
                alert('Ты уже победил. нажми F5 для игры заново');
            };

            if (shoot < 1 || shoot > 77) {
                displayMessage('Не верные координаты для выстрела');
            } else if (mass.includes(+shoot)) {
                displayMessage('Ты сюда уже стрелял');
            } else {
                shoots +=1;

                let popadanie = false;

                for (let i of allShipMass) {
                    for (let ii in i){
                        if (shoot === i[ii]) {
                            allHP -=1;
                            i[ii] = 0;
                            mass.push(shoot);
                            displayHit(shoot);
                            displayMessage(`Есть попадание! Палуб осталось ${allHP} шт.`);
                            popadanie = true;
                        };
                    };
                };

                if (popadanie === false) {
                    mass.push(shoot);
                    displayMiss(shoot);
                    displayMessage('Mumo!');
                };

                if (allHP < 1) {
                    isSunk = true;
                };
            };

// ----------------------------------------Блок подсчёта и выдачи результатов

    let sniper;

    if (isSunk === true) {
        if (shoots < 1){
            sniper = `Выйграл без единого выстрела??? Да ты дипломат!!!`;
        } else if (shoots <= 20) {
            sniper = 'Да ты настоящий снайпер!';
        } else if (shoots > 20 && shoots <= 35) {
            sniper = 'Не плохой результат.';
        } else if (shoots > 35) {
            sniper = 'Нуу... Мазила ты, короче...';
        } else {
            sniper = 'Ну хз';
        };

        displayMessage(`Ты потопил корабль за ${shoots} выстрелов. ${sniper}`);
    };
};


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