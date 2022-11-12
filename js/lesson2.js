// Задача 1. Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // сделать переменную total до цикла
// let total = 0;
// перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);
// // каждый элемент приплюсовать к total
//     total += cart[i];
// }

// или

// for (const value of cart) {
//     total += value;
    
// }
// console.log('Total =', total);




// Задача 2. Напиши скрипт котрый подсчитывает сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (let i = 0; i <= numbers.length - 1; i += 1) {
//     const number = numbers[i];
//     // console.log(number);
//     if (number % 2 === 0) {
//         console.log('Парні = ', number);
        
//         total += number;

//     }
// }

// или

// for (const number of numbers) {
//     // console.log(number);
//         if (number % 2 === 0) {
//         console.log('Парні = ', number);
        
//         total += number;

//     }

// }
// console.log('Total = ', total);





// Задача 3. Напиши скрипт поиска логина
//  - если логина нет, вывести сообщение 'Пользователь [логин] не найден'
//  - если нашли логин, вывести сообщение 'Пользователь [логин] найден'
//
//  - Сначало через for
//  - Потом чперез for ... of
//  - Логика break
//  - метод includes() с тернарным оператором

// const logins = ['logoA', 'logoB', 'logoC', 'logoD'];
// const loginToFind = 'logoC';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i <= logins.length - 1; i += 1) {
//     const login = logins[i];

//     console.log(login);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
//     }

// }
// console.log(message);
        
// for (const login of logins) {
//     console.log(login);
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
//     }

// console.log(message);

// const hasLogin = logins.includes(loginToFind);
// message = hasLogin ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
// console.log(message);




// Задача 4. Напиши скрипт поиска самого маленького числа в массиве
// при условии что числа уникальные (не повторяются)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//     // console.log(number);
//     if (number < smallesNumber) {
//         smallesNumber = number;

//     }

// }
// console.log(smallesNumber);
// let biggestNumber = numbers[0];
// for (const number of numbers) {
//     console.log(number);
//     if (number > biggestNumber) {
//         biggestNumber = number;

//     }
// }
// console.log('BiggestNumber =', biggestNumber);





// Задача 5. Напиши скрипт , который объединяет все элементы массива в одно строковое значение.
// Элементов может быть произвольное колличество
// Пусть элементы массива в строке будут разделены запятой.
// Сначала через for
// Потом через join

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// console.log(friends.join(","));

// или

// let String = '';
// for (const friend of friends) {
//     String += friend + ',';

// }
// string = String.slice(0, String.length - 1);
// console.log(string);





// Задача 6. Напиши скрипт который заменяет регистр каждого символа в строке на противоположный
// Например если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     // console.log(letter);

//     invertedString = letter === letter.toLowerCase() ? invertedString += letter.toUpperCase() : invertedString += letter.toLowerCase();
// }
// console.log(invertedString);





// Задача 7. Делаем slug в URL из названия статьи (например на dev. to)
// Заголовок статьи состоит из букв и пробелов
//
//  - Нормальзируем строку
//  - Разбиваем по словам
//  - Сшиваем в строку с разделителями

// const title = 'Top 10 benefits of React framework';
// // const normalizedToLowerCaseInput = title.toLowerCase();

// // const newTitle = normalizedToLowerCaseInput.split(' ');

// // const slug = newTitle.join('-');


// // console.log(slug);

// // 2 вариант

// console.log(title.toLowerCase().split(' ').join('-'));





// Задача 8. Написать скрипт который считает сумму элементов двух масивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const merge = array1.concat(array2);
// console.log(merge);

// for (const value of merge) {
//     total += value;
    
// }
// console.log('Total =', total);





// Задача 9. Работаем с коллекцией карточек Trello
//  - Метод Splice()
//  - Удалить
//  - Добавить
//  - Обновить

// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
// console.table(cards);

// Удаление (по индексу), метод indexOf()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// Добавление по индексу

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);


// console.table(cards);

// Обновление за индексом

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// cards.splice(index, 1, cardToUpdate);
// console.table(cards);






// ФУНКЦИИ





// 1 вариант вызова функции

// const add = function () {
//     console.log('function add');
// }
// add();

// 2 вариант вызова функцци
// function add() {
//     console.log('function add');
// }
// add();
// add();






// Задача 1. Напиши функцию calculateTotalPrice(items)
// которая принимает масив цен (чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
    
// }
// console.log('Total =', total);

// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
    
//     return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));







// Задача 2. Напиши функцию logItems (items) для перебора и логирования массива

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
        
//     }
// }

// logItems(['Mango', 'Poly', 'Kiwi', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);







// Задача 3. Напиши функцию findLogin(allLogins, login) для поиска логина
//  - если логина нет, вывести сообщение 'Пользователь [логин] не найден'
//  - если нашли логин, вывести сообщение 'Пользователь [логин] найден'
//

// const logins = ['logoA', 'logoB', 'logoC', 'logoD'];

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//            return `Пользователь ${loginToFind} найден`;
//         }

//     }
        
//     return `Пользователь ${loginToFind} не найден`;
// }


// ИЛИ

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;

// }

// console.log(findLogin(logins, 'logoAF'));
// console.log(findLogin(logins, 'logoEB'));
// console.log(findLogin(logins, 'logoC'));
// console.log(findLogin(logins, 'logoD'));









// Задача 4. Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве
// при условии что числа уникальные (не повторяются)

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// const findSmallesNumber = function (allNumbers) {
//     let findSmallesNumber = allNumbers[0];
//     for (const number of allNumbers) {
//     // console.log(number);
//         if (number < findSmallesNumber) {
//             findSmallesNumber = number;

//         }
//     }
//     return findSmallesNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));






// Задача 6. Напиши функцию changeCase(string) которая заменяет регистр каждого символа в строке на противоположный
// Например если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         invertedString = letter === letter.toLowerCase() ? invertedString += letter.toUpperCase() : invertedString += letter.toLowerCase();
//     }

//     return invertedString;
// }

// console.log(changeCase('fkRTn'));
// console.log(changeCase('KfPOIgdQk'));
// console.log(changeCase('LovNMrTcd'));