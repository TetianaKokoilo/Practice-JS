// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль



// your code here
// const product = {
//   name: "chocolate",
//   price: 34,
//   quantity: 5
// }

// const createProduct = (obj, callback) => {
//   // створили новий обʼєкт товару, оператором спред забралм всі властивости із параметра obj
//   const product = {
//     ...obj,
//     id: 1
//   };

//   // викликали функцію callback яку передають в параметрах. Передали їй новий обʼєкт як аргумент
//   // Повернули результат виконання колбека
//   return callback(product)
// };

// // Створили просто окрему функцію, яка приймає один параметр(будь-що) і виводить його в консоль.
// const logger = (val) => {
//   console.log(val)
// }

// // Створили ще одну окрему функцію якак приймає параметром обʼєкт(товар) і рахує вартість.
// const calculateTotalPrice = ({price, quantity}) => {
//   const total = price * quantity;
//   return total
// }

// /**
//  * коротша форма запису:
//  * const logger = val => console.log(val)
//  * const calculateTotalPrice = ({price, quantity}) => price * quantity
//  */

// //викликали createProduct. Передали два аргументи: обʼєкт товара і будь-яку функцію колбек
// createProduct(product, logger); // колбеком буде функція looger
// const totalPrice = createProduct(product, calculateTotalPrice); // колбеком буде функція calculateTotalPrice
// console.log(totalPrice)







// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError),
// де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю,
// і onSuccess в іншому випадку.


// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 40000,
  
//   withdraw (amount, onSuccess, onError) {
//     if(amount > this.balance) {
//       return onError(amount, 'Недостатньо балансу')
//     }
    
//     if(amount > TRANSACTION_LIMIT) {
//       return onError(amount, 'перевищенно ліміт операцій')
//     }

//     onSuccess(amount);
//   },

//   deposit (amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       return onError(amount)
//     }

//     onSuccess(amount);
//   },
// };

// const handleSuccess = (amount) => {
//   console.log(`${amount} успішно опрацьовано!`)
// }

// const handleError = (amount, message = 'Невідомо') => {
//   console.log(`${amount} Не опрацьовано! По причині: ${message}`)
// }
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);






// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, 

// а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

const employees = [
  { name: 'Artur', bonus: 64.5 },
  { name: 'Ivan', bonus: 49.2 },
  { name: 'Makar', bonus: 36 },
  { name: 'Anastasiya', bonus: 25 },
  { name: 'Olha', bonus: 165.13 },
]

// створили функцію each, яка чекає масив і функцію в параметрах
const each = (arr, callback) => {
  const resultArr = []; // новий масав який будемо повертати

  /** 
   * перебираємо циклом масив, диструктурувавши елемент на кожній ітерації
   * запис еквівалентний цьому:
      for (const item of arr) {
        resultArr.push({
          name: item.name,
          bonus: callback(item.bonus)
        })
      }
  */
    for (const { name, bonus } of arr) {
    // на кожній ітерації викликаємо колбек для бонусу і кладемо новий обʼєкт в новий масив
    resultArr.push({
      name,
      bonus: callback(bonus)
    })
  }

  return resultArr; // повертаємо новий масив
}

const roundBonus = value => Math.floor(value) // те саме, що

// 1. const roundBonus = (value) => {
//   return Math.floor(value)
// }

// 2. function roundBonus (value) {
//   return Math.floor(value)
// }

// 3. const roundBonus = function (value) {
//   return Math.floor(value)
// }

// викликали each, передали їй масив з даними і функцію як колбек. Очікуємо отримати новий масив в результат
const roundedBonuses = each(employees, roundBonus);
console.log(roundedBonuses);
