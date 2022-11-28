// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль



// your code here
const product = {
  name: "chocolate",
  price: 34,
  quantity: 5
}

const createProduct = (obj, callback) => {
  // створили новий обʼєкт товару, оператором спред забралм всі властивости із параметра obj
  const product = {
    ...obj,
    id: 1
  };

  // викликали функцію callback яку передають в параметрах. Передали їй новий обʼєкт як аргумент
  // Повернули результат виконання колбека
  return callback(product)
};

// Створили просто окрему функцію, яка приймає один параметр(будь-що) і виводить його в консоль. 
const logger = (val) => {
  console.log(val)
}

// Створили ще одну окрему функцію якак приймає параметром обʼєкт(товар) і рахує вартість.
const calculateTotalPrice = ({price, quantity}) => {
  const total = price * quantity;
  return total
}

/**
 * коротша форма запису:
 * const logger = val => console.log(val)
 * const calculateTotalPrice = ({price, quantity}) => price * quantity
 */

//викликали createProduct. Передали два аргументи: обʼєкт товара і будь-яку функцію колбек
createProduct(product, logger); // колбеком буде функція looger
const totalPrice = createProduct(product, calculateTotalPrice); // колбеком буде функція calculateTotalPrice
console.log(totalPrice)
