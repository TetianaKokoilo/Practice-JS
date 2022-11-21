// Задача 1.
// const friends = [
//   {
//     name: 'Mango',
//     online: false,
//   },
//   {
//     name: 'Kivi',
//     online: true,
//   },
//   {
//     name: 'Poly',
//     online: true,
//   },
//   {
//     name: 'Ajax',
//     online: false,
//   },
// ];

// console.table(friends);
// for (const friend of friends) {
//     console.log(friend);

// }

// Ищем друга по имени

// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//     if (friend.name === name) {
//       return `Данный объект включает имя, ${name}`;
//     }
//   }
//   return `Данный объект не включает имя, ${name}`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Получаем имена всех друзей

// const getAllNames = function (allFriends) {
//   const friendNames = [];
//   for (const friend of allFriends) {
//     // console.log(friend);
//     friendNames.push(friend.name);
//   }
//   return friendNames;
// };

// console.log(getAllNames(friends));

// Получаем имена друзей только онлайн

// const getOnlineFriends = function (allFriends) {
//   const friendOnline = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     if (friend.online) {
//       friendOnline.push(friend);
//     }
//   }
//   return friendOnline;
// };

// console.log(getOnlineFriends(friends));

// Получаем имена друзей только онлайн

// const getOfflineFriends = function (allFriends) {
//   const friendOffline = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     if (!friend.online) {
//       friendOffline.push(friend);
//     }
//   }
//   return friendOffline;
// };

// console.log(getOfflineFriends(friends));





// Задача 2
// Работаем с коллекцией товаров в корзине:
//  - getItems()
//  - add(product)
//  - remove(productName)
//  - clear()
//  - countTotalPrice()
//  - increaseQuantity(productName)
//  - decreaseQuantity(productName)

// const cart = {
//     items: [],
//     getItems() { },
//     add(product) { },
//     remove(productName) { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍑', price: 110 });

// console.table(cart.getItems());
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book[key]);
}