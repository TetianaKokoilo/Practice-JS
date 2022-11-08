// Example 1 - Математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = apples - grapes;
// console.log(diff);





// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);





// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);





// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// або
// const value = 27.5;

// const roundedDown = Math.floor(value); // Math.floor - округляє до цілого "вниз".
// console.log("roundedDown =", roundedDown); // лінка на документацію https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// const roundedUp = Math.ceil(value); // Math.ceil - округляє до цілого "вверх"
// console.log("roundedUp = ", roundedUp)  // лінка на документацію https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

// const rounded = Math.round(value); // Math.round - округляє по законам математики
// console.log("rounded = ", rounded); // лінка на доку https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round





// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;

// const allBots = repairBots + defenceBots;
// const message = `${companyName} has ${allBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"





// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = '88.3';
// let height = '1.75';

// // 1. Приводимо значення до числовго типу
// height = Number.parseFloat(height);
// weight = Number.parseFloat(weight);

// // 2. Отримуємо квадрат зросту
// let heightPow = height * height;

// // 3. Ділимо вагу на квадрат зросту
// const bmi = weight / heightPow;

// // 4. Округляємо до десятих
// const roundedBMI = bmi.toFixed(1)
// console.log(roundedBMI);





// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4); // true
// console.log(10 >= '7'); // true. тип String приводиться до типу Number
// console.log('2' > '12'); // true. String порівнюються посимвольно по коду символа. Як отримати код символа https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// console.log('2' < '12'); // false
// console.log('4' == 4); // true
// console.log('6' === 6); // false. Строга рівність, типи не приводяться
// console.log('false' === false); // false
// console.log(1 == true);  // true. 1 тип Nuber приводиться до Boolean(true)
// console.log(1 === true); // false. Строга рівність, типи не приводяться
// console.log('0' == false); //true. '0' спочатку приводиться до Number. Потім 0 приводиться до Boolean, false.
// console.log('0' === false); // false. Строга рівність, типи не приводяться
// console.log('Papaya' < 'papaya'); // true. String порівнюються посимвольно по коду символа
// console.log('Papaya' === 'papaya'); // false. String порівнюються посимвольно по коду символа
// console.log(undefined == null); // true. undefined і null приводяться до false
// console.log(undefined === null); // false. Строга рівність, типи не приводяться





// Example 8 - Логические операторы
// Каким будет результат выражений?

// && - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть false. Або останній, якщо false нема
// || - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть true. Або останній, якщо true нема
// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(1 && null && 2); // null
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2





// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
// Используй оператор ?? (nullish coalescing operator).


// const incomingValue = 5;
// const defaultValue = 10;
// /**
//  * Оператор `??` працює схожим чином на &&. Але повертаю лівий опернд тільки коди він або null, або undefined.
//  * в усіх інших випадках повертається лівий операнд.
//  */
// const value = incomingValue ?? defaultValue;
// console.log(value);





// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

// const totalMinutes = 450;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// /**
//  * 1. totalMinutes / 60 Отримуємо кількість годин
//  * 2. Math.floor отримуємо цілу частину годин, яка записується в hours
//  * 3. totalMinutes % 60, отримуємо остачу від ділення(кількість хвилин)
//  */
// /** Форматуємо години і хвилини до 2-х символьної строки */
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// /**
//  * padStart доповнює дану строчку іншою строчкой до досягнення заданої довжини
//  * String(hours).padStart(2, 0);, де hours - дана строчка, 2 - довжина до якої доповнити, 0 - строка якою доповнювати
//  * Тобто, hours = 1, String(hours).padStart(2, 0) = '01';
//  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  */

// /** Форматуємо за допомогою шаблонного рядка */
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);





// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"


// let answer = prompt('Яка офіційна назва JavaScript?');

// if (answer === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!')
// }





// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
//  Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 10;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);





// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// let userInput = Number(prompt('Введите число'));
// console.log(userInput, typeof userInput);

// if (userInput > 0) {
//     console.log('Это положительное число');

// } else if (userInput == 0) {
//     console.log('Это ноль');
// } else {
//     console.log('Это отрицательное число');
// }





// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 20;
// const b = 180;

// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512)
// }
// или

//  const a = 120;
//  const b = 180;

//  if (a > 100 && b > 100) {
//
//   if (a >= b) {
//     console.log(a)
//   } else {
//     console.log(b)
//   }

//  } else {
//   console.log(b + 512)
//  }





// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/'
// }

// console.log(link)





// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки


//  if (!link.endsWith('/') && link.includes('my-site')) {
//      link += '/';
// }
// console.log(link);




// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';

// console.log(link.includes('my-site') && !link.endsWith('/') ? link += '/' : null);





// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 170;

// if (hours < 17) {
//     console.log('Pending');

// } else if (hours >= 17 && hours <= 24) {
//     console.log('Expires');

// } else {
//     console.log('Overdue');
// }





// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3 + дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 3;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//     console.log('Сегодня');

// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');

// } else if (daysUntilDeadline === 2) {
//     console.log('Послезавтра');
// } else {
//     console.log('Дата в будущем');
// }





// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сегодня');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Послезавтра');
//         break;
//     default:
//         console.log('Дата в будущем');
// }






// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0)
//         console.log(i);
// }





// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// let login = prompt('Введіть логін');
// let password;
// console.log(login);

// if (login === 'Адмін') {
  
//   password = prompt('введіть пароль');
//   console.log(password, typeof password);

//   if (!password) {
//     console.log('Відмінено')
//   } else if (password === 'Я адмін') {
//     console.log('Привіт')
//   } else {
//     console.log('пароль не вірний')
//   }

// } else {
//   console.log('Не знаю Вас')
// }




