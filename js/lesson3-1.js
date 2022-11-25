//  * Task 1.
//  * Напиши скрипт, який для об'єкта `user`, послідовно:
//  * - додає поле `mood` зі значенням `'happy'`
//  * - замінює значення `hobby` на `'skydiving'`
//  * - замінює значення `premium` на `false`
//  * - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
//  */

//  const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// //  * - додає поле `mood` зі значенням `'happy'`
// user.mood = 'happy';
// // console.log(user);

// //  * - замінює значення `hobby` на `'skydiving'`
// user.hobby = 'skydiving';
// console.log(user);

// //  * - замінює значення `premium` на `false`
// user.premium = false;
// // console.log(user);

// //  * - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
// // const entries = Object.entries(user);
// // console.log(entries);
// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//     console.log(`${key}: ${ user[key]}`);

// }

//  * Task 2.
//  * У нас є об'єкт, де зберігаються зарплати нашої команди.
//  * Напишіть код для підсумовування всіх зарплат і збережіть
//  * результат у змінній sum. Повинно
//  * вийти 390. Якщо об'єкт `salaries` порожній,
//  * то результат має бути 0.
// */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesValues = Object.values(salaries);
// let salarySum = 0;

// for (const value of salariesValues) {
//   salarySum += value
// }

// console.log(salarySum);

/** Example 3
 * Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
 * об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
 * каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   let result;

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       result = stone.price * stone.quantity;
//     }
//   }

//   return result;
// };

// let total = calcTotalPrice(stones, 'Діамант');
// let total2 = calcTotalPrice(stones, 'Сапфір');
// console.log(total, total2);





/* Завдання 4

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
// const Types = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const account = {
//   // Поточний баланс рахунку
//   balance: 100,
//   wallets: {
//     type: 'own',
//     balance: 300,
//     owner: 'Me',
//     colesd: true
//   },
//   // Історія транзакцій
//   transactions: [],

//   array: ['HTML', 'JS'],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length
//     }
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     amount = Math.abs(amount);

//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Types.DEPOSIT);

//     this.transactions.push(newTransaction)
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     amount = Math.abs(amount);

//     const newTransaction = this.createTransaction(amount, Types.WITHDRAW);

//     if (amount > this.balance) {
//       console.log('Нема грошей!');
//       return
//     }

//     this.balance -= amount;
//     this.transactions.push(newTransaction)
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction
//       }
//     }
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let result = 0;

//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         result += transaction.amount
//       }
//     }

//     return result;
//   },

//   checkKey(key) {
//     return this.hasOwnProperty(key)
//   }
// };

// const keys = Object.keys(account.wallets);
// console.log(keys)

// account.deposit(-45000);
// account.deposit(57);
// account.deposit(1);
// account.deposit(678);

// account.withdraw(-20000);
// account.deposit(17000);
// account.withdraw(40000);


// const currentBalance = account.getBalance();
// console.log(currentBalance);
// console.log(account.balance);

// const budgetWhole = account.getTransactionDetails(4);
// console.log(budgetWhole);


// const totalWithdraws = account.getTransactionTotal(Types.WITHDRAW);
// const totalDeposits = account.getTransactionTotal(Types.DEPOSIT);
// console.log(totalWithdraws)
// console.log(totalDeposits)

// console.log(account.hasOwnProperty('wallets'))
// console.log(account.checkKey('walletsasd'))

// console.log(account.transactions[1])

// account.transactions[1].amount = 570
// console.log(account.transactions[1])




















// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );




// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });






// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"





// Example 4 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName
// та stock та виводила репорт про кількість товарів на складі будь - якої компанії.

// Рішення
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (value of Object.values(stock)) {
//         total += value;

//     }
//     return `${companyName} has ${total} items in stock`
//   // your code here
// }

// // Перевірка
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"






// Example 5 - Операція spread
// Напиши функцію createContact(contact) так, щоб вона повертала новий об'єкт контакту
// з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в contact немає такої властивості.

// Рішення
// const createContact = function(contact) {
// 1. Створити новий обʼєкт
// 2. Додати до нього нові ключі
//   id
//   createdAt
//   list, якщо його нема, то дати дефолтне значення
//   return {
//     list: 'default',
//     ...contact,
//     id: 1
//   }
// }

// const contact = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// }

// const newContact = createContact(contact);
// newContact.name = "Ser. Pan";

// console.log(newContact)
// console.log(contact)








// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так,
// щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// // Рішення
// const transformUsername = function ({firstName, lastName, ...restProps}) {
//   // your code
//    return {
//     fullName: `${firstName} ${lastName}`,
//     ...restProps
//   }
// }

// const user = {
//   id: 1,
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   email: 'j.mercer@mail.com',
//   friendCount: 40,
// }

// const newUser = transformUsername(user);
// console.log(newUser);





const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (let key of keys) {
  console.log(key);
  console.log(apartment[key]);
}
