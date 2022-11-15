// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами "Jazz" та "Blues".
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

//   /** Cтворюємо масив */
//   let genres = ['Jazz', 'Blues'];

//   /** Додаємо елемент в кінець масиву */
//   genres.push('Рок-н-рол');

//   /** виводимо перший елемент */
//   console.log("перший",genres[0])

//   /**
//    * 1. Знаходимо індекс останнього елемента масива
//    * 2. Виводимо останній елемент по індексу
//   */
//   const lastIndex = genres.length - 1;
//   console.log("last", genres[lastIndex]);

//   /** Видаляємо перший елемент масива */
//   const firstElement = genres.shift();

//   /** Виводимо видалений елемент */
//   console.log(firstElement);

//   /** Вставляємо на початок масиву два елементи */
//   genres.unshift('Country','Reggae');
//   console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = '8 11';

// /** розділяємо рядок по пробілу. Створюється массив з елементами ['8','11']  */
//  const sides = values.split(' ');

//  console.log(sides);

// /** Перемножаємо значення масива по індексу */
//  const square = sides[0] * sides[1];
//  console.log(square)

//  * Task 3
//   * Для кожного елемента масиву виведи в консоль рядок у форматі
//   * номер_елемента: значення_елемента. Нумерація елементів має починатися з 1.
//   * 1: яблуко
//   * 2: виноград
//   *
//   * Для цього в тілі циклу при виводі в консоль до індекса 'i' додаємо 1
//   */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1}: ${fruits[i]}`)
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів,
// розділені комами.Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// // Зробити масив
// const newNames = names.split(',');
// console.log(newNames);

// const newPhones = phones.split(',');
// console.log(newPhones);

// //
// for (let i = 0; i < newNames.length; i += 1) {
//     console.log(`${newNames[i]} - ${newPhones[i]}`);

// }

// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка окрім першого та останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь - якого рядка.

// const string = 'Welcome to the future';

// // Робимо масив
// const newString = string.split(' ');
// console.log(newString);

// // Прибираємо перший елемент масиву

// const deletedFirstElement = newString.shift();
// console.log(deletedFirstElement);

// console.log(newString);

// // Прибираємо останній елемент масиву
// const deletedLastElement = newString.pop();
// console.log(deletedLastElement);
// console.log(newString);

// Варіант лектора
//  * Task 5.
//  * Вивести всі слова крім першого і останнього.
//  * Має працювати для будь якого рядка.
//  * 1. Розбиваємо рядок на масив по пробілу(кожне слово - окремий елемент масива)
//  * 2. Методом splice - змінюємо масив видаляючи з нього всі елементи крім першого і сотаннього
//  *    splice(індекс з якого починати, кількість елементів)
//  * 3. slice повертає масив з видаленими елементами
//  * 4. Збираємо отриманий масив в рядок
//  *
//  * Note: Для метода slice першим параметром(початком) буде елемент з індексом 1(другий елемент масива).
//  * Але як визначити кількість елементів для видалення:
//  *  Всього елементів в масиві "words.length". Якщо б треба було видалити все, то підійшло б.
//  *  Але перший ми вже відкидуємо, тому берем "words.length - 1".
//  *  Тепер, з умовою задачі, треба відкинути і останній. Тобто відняти ще одиницю.
//  *  Тому вийде "words.length - 2"
//  */

//  const string = 'Welcome to the future. Hello my name is Stepan';
//  const words = string.split(' ');
//  console.log(words)

//  const amountToDelete = words.length - 2;
//  const deletedWords = words.splice(1, amountToDelete );
//  console.log(deletedWords)

//  let newString = deletedWords.join(' ');
//  console.log(newString)

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить її в консоль.

// * 1. Розбиваємо рядок на масив посимвольно(кожен символ рядка - окремий елемент масива)
//  * 2. Методом reverse, розвертаємо масив сзаду наперед([a,b,c] -> [c,b,a])
//  * 3. Збираємо вже перевернутий масив в новий рядок
//  */

//  const string = 'Welcome to the future';

//  const array = string.split('');
//  console.log(array);

//  array.reverse();
//  console.log(array);

//  const newString = array.join('');
//  console.log(string, '|',newString)
// /** Варіант 2
//  * проходимо циклом з кінця масиво до початку.
//  * Посимвольно записуємо значення в рядок
//  */
// let newStr = '';
//  for (let i = string.length - 1; i >= 0; i -= 1) {
//   console.log(i, string[i], newStr)
//   newStr += string[i];
//  }

//  console.log(newStr)

// Example 7 - Сортування масиву
// Напиши скрипт сортування масиву.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);

// langs.sort()
//   console.log(langs)

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь - якого масиву чисел.Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     console.log(number);
//     if (number < min) {
//         min = number;
//     }
// }
//     console.log(min);

// Функции

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// 1) Запитати ввести вагу і зріс - prompt
// 2) створити пусту функцію розрахунку індексу маси - function
// 3) задати функції параметри ваги і зросту - (weight, height)
// 4) розрахувати індекс маси. - Math.pow()
// 5) повернути результат - return
// 6) округлити результат до одніє цифри після коми toFixed(1)

// const weight = prompt('Введіть вашу вагу в кг');
// const height = prompt('Введіть ваш зріст в метрах');

// const calcBMI = function(weightU, heightU) {
//   const heightPow = Math.pow(heightU, 2);
//   const result = weightU / heightPow;

//   return result.toFixed(1)
// }

// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає менше з чисел a та b.

// const min = function (a, b) {
//   let result = 0;

//   return a < b ? (result = a) : (result = b);
// };

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядки.
// Значення гарантовано розділені пробілом.

// const getRectArea = function (dimensions) {
//     const result = dimensions.split(' ');
//     const square = result[0] * result[1];

//     return square;
// }

// console.log(getRectArea('8 11'));

// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення форматі
// < номер елемента > - <значення елемента >.Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0
//  буде виведено 1 – Mango, а для індексу 2 виведе 3 – Ajax.

// const logItems = function (items) {
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1}: ${items[i]}`);
//     }
// }

// console.log(logItems(['Mango', 'Poly', 'Ajax']));
// console.log(logItems(['🍎', '🍇', '🍑', '🍌', '🍋']));

// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
// У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакове.

// const printContactsInfo = function (names, phones) {
//   const newNames = names.split(' ');
//   const newPhones = phones.split(' ');
//   console.log(newNames);
//   console.log(newPhones);

//   for (let i = 0; i < newNames.length; i += 1) {
//     console.log(`${newNames[i]} - ${newPhones[i]}`);
//   }
// };

// console.log(
//   printContactsInfo(
//     'Jacob, William, Solomon, Artemis',
//     '89001234567, 89001112233, 890055566377, 890055566300'
//   )
// );

// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.

// const findLargestNumber = function (numbers) {
//   let findLargestNumber = numbers[0];
//   for (const number of numbers) {
//     // console.log(number);
//     if (number > findLargestNumber) {
//       findLargestNumber = number;
//     }
//   }
//   return findLargestNumber;
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findLargestNumber([49, 4, 7, 83, 12]));

// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
// Усі аргументи будуть лише числами.

// const calAverage = function (numbers) {
//   let total = 1;
//   let value = [];
//   for (const argument of arguments) {
//     console.log(argument);

//     total *= argument;
//   }
//   return total;
// };

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes)
// яка переведе значення minutes(кількість хвилин) у рядок у форматі годин та хвилин HH: MM.


// const formatTime = function (minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minute = minutes % 60;
//   console.log(hours);
//   console.log(minute);
//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minute).padStart(2, 0);
//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// };

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01" ``






// Example 9 - Колекція курсів (includes, indexOf, push і т.д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс з колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (name) {
//     // let message = '';
//     courses.push(name);
    // if (name !== courses) {
    //     message = 'У вас вже є такий курс';

    // }
    // return message;

// }

// const removeCourse = function (name) {
//     const deletedLastElement = courses.splice()
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse('Vue'); // 'Курс з таким іменем не знайдено'

// // updateCourse('Express', 'NestJS');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS'] ``


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// /** Щоб додати інтерактивности, запитуємо користувача ввести дані - prompt */
// const courseName = prompt('Введіть назву курсу');
// const newName = prompt('Введіть нове імʼя');

// const addCourse = function(newCourse) {

//   if (courses.includes(newCourse)) {
//     console.log('Такий курс вже є');
//     return // ранній вихід із функції
//   }

//   courses.push(newCourse);
//   return courses; // Памʼятайте, що змінна courses це посилання на масив!
// }

// const removeCourse = function (courseName) {
  
//   const index = courses.indexOf(courseName);
  
//   if (index === -1) {
//     console.log('такого курсу нема')
//     return
//   }
  
//   const deletedCourses = courses.splice(index, 1);
//   return deletedCourses
// }

// const updateCourse = function (oldName, newName) {
//   const index = courses.indexOf(oldName);
  
//   if (index === -1) {
//     console.log('такого курсу нема')
//     return
//   }

//   courses[index] = newName
// }


// /** checkCourseName - функція в яку ми винесли перевірку елемнту в масиві. */
// const checkCourseName = function (value) {
//   const index = courses.indexOf(value);

//   if (index === -1) {
//     console.log('такого курсу нема')
//     return false
//   } else {
//     console.log('Такий курс вже є');
//     return true
//   }
// const calculateEngravingPrice = function (message, pricePerWord) {
//    // Change code below this line
//     // let newName = typeof Number(message);
//     // let newMessage = newName.length;
//     // console.log(newName);
//     // console.log(newMessage);
//     // console.log(newMessage * pricePerWord);
//     let newMessage = message.split(' ');
//     console.log(newMessage);
//     console.log(newMessage.length * pricePerWord);

//    // Change code above this line
// }
// calculateEngravingPrice("Web-development is creative work", 40);





// const makeArray = function (firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray);
//     // console.log(newArray);
//     if (newArray.length > maxLength) {
//         const newElement = newArray.slice(0, maxLength);
//     console.log(newElement);
//   }


//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);


// function filterArray(numbers, value) {
//    // Change code below this line
//     const newNumbers = [];
//     for (const number of numbers) {
//         if (number > value) {
//             newNumbers.push(number);

//         }
    
//    }
//     return newNumbers;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const newElements = [];
//     for (let number of array1) {
//         if (array2.includes(number) && array1.includes(number)) {
//             newElements.push(number);
        
//        }
//     }
//         return newElements;


//  // Change code above this line
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));





// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const numbers = [];
//     for (let i = start; i < end; i += 1) {
        
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
        
//     }
//         return numbers;


//     // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));



// function includes(array, value) {
//   // Change code below this line
//     for (const number of array) {
//         if (number === value) {
//             return true;
            
//         }
        
//     }
//     return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));