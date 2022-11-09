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