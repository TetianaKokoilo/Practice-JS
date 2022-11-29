/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);






/*
 * функция doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });







/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клик по кнопке ' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);






/*
 * Отложенный вызов: геолокация
 */

// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );






/*
 * Отложенный вызов: интервалы
 */

// const callback = function () {
//     console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');







/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

// const onRequestSuccess = function (response) {
//     console.log(
//         'Вызов функции onRequestSuccess после успешного ответа бекенда',
//     );
//     console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);







/*
 * Фильтр
 */

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);






/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);







/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//     const innverVar = 555;
//     const message = 'hello';

//     const makeDish = function (dish) {
//         console.log(message);
//         console.log(innverVar);
//         console.log(`${name} готовит ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

// console.dir(mango);







/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));






/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return 'Ты офигел?';
//             }

//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарпалата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());








// Перебираючі методи масиву






/* №1
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// // numbers.forEach(number => {
// //     console.log(` ${number}`)
// // });

// // Вариант репеты
// numbers.forEach(function (number) {
//   console.log('number', number);
// });

// console.log(numbers);






/* 2
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => {
//   return number * 3;
// });
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// /*
//  * Получаем массив имён всех игроков
//  */

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// // console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

// /*
//  * Увеличиваем кол-во поинтов каждого игрока на 10%
//  */

// const upatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// // console.table(upatedPlayers);
// // console.log(upatedPlayers);

// /*
//  * Увеличиваем кол-во часов игрока по id
//  */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// // const updatedPlayers = players.map(player =>
// //   playerIdToUpdate === player.id
// //     ? { ...player, timePlayed: player.timePlayed + 100 }
// //     : player,
// // );
// console.table(updatedPlayers);








/* 3
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// // console.log(filteredNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// /*
//  * Получаем массив всех онлайн игроков
//  */

// const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

// /*
//  * Получаем массив всех оффлайн игроков
//  */

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

// /*
//  * Получаем список хардкорных игроков с временем больше 250
//  */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);









/* 4
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// // console.log(number);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// /*
//  * Ищем игрока по id
//  */
// const playerIdToFind = 'player-3';
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// // console.log(playerWithId);

// const finPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(({ id }) => id === playerId);
// };

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));

// /*
//  * Ищем игрока по имени
//  */
// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind);
// // console.log(playerWithName);







// 5
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// /*
//  * Array.prototype.every()
//  * - Поэлементо перебирает оригинальный массив
//  * - Возвращает true если все элементы массива удовлетворяют условию
//  */

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

// /*
//  * Array.prototype.some()
//  * - Поэлементо перебирает оригинальный массив
//  * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
//  */
// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline: ', isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);






/* 6
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// // console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// // console.log(totalSalary);

// /*
//  * Считаем общее количество часов
//  */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// // console.log(totalTimePlayed);

// /*
//  * Считаем общую сумму товаров корзины
//  */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );

// // console.log(totalAmount);

// /*
//  * Собираем все теги из твитов
//  */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// // acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// // acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// // return  [...['js', 'nodejs'], ...['html', 'css']]
// //  ['js', 'nodejs', 'html', 'css']

// /*
//  * Ведём статистику тегов
//  */
// // const tagsStats = allTags.reduce((acc, tag) => {
// //   console.log(acc);

// //   if (acc[tag]) {
// //     acc[tag] += 1;

// //     return acc;
// //   }

// //   acc[tag] = 1;

// //   return acc;
// // }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// // console.log(tagsStats);

// // если свойство с ключом tag есть. увеличить его значение на 1
// // если свойствоства нет с таким ключом что в tag, сделать и записать 1








/* 7
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Кастомная сортировка сложных типов
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени
const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
// console.table(sortedByWorstPlayers);

const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});

console.table(byName);
