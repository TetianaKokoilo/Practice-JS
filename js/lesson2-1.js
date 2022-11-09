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
//   console.log(`${i + 1}: ${fruits[i]}`)
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

 const string = 'Welcome to the future';

//  const array = string.split('');
//  console.log(array);

//  array.reverse();
//  console.log(array);

//  const newString = array.join('');
//  console.log(string, '|',newString)
 
/** Варіант 2
 * проходимо циклом з кінця масиво до початку.
 * Посимвольно записуємо значення в рядок
 */
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