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





// Задача 5. Напиши скрипт 