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
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i++) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         console.log(productName);
//         console.log(i);
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//       console.log(this.items);
//       let total = 0;
//       for (const item of this.items) {
//           total += item.price;
        
//       }
//       return total;
            
        
//       },
        
//   increaseQuantity(productName) {},
// ?};

// // console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍑', price: 110 });

// console.table(cart.getItems());

// console.log('Total', cart.countTotalPrice());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());


// Задача 1
// Операция spread (распыление)
//  - Array.prototype.concat и аналог через spread

// Поиск самой маленькой или большой температуры ( числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.min(...temps));
// console.log(Math.max(...temps));

// // Сшиваем несколько масисов в один через concat и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// // concat
// // const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// // console.log(allTemps);

// // spread
// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// // Распыление объектов
// //  - Object.prototype.assing() и spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // spread
// // const newName = { ...a, ...b };
// // console.log(newName);

// // Object.prototype.assing()
// const newName = Object.assign({}, a, b);
// console.log(newName);

// зАДАЧА 2
// Диструктуризация объекта
// Значения по умолчанию
// Имя переменной отличное от имеени свойства

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//     trackCount: 3,
// };
// const { name, rating, tracks, trackCount } = playlist;
// console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);

// // Глубокая деструктуризация

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
// const { tag, location, stats: { followers, views, likes }} = profile;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// Деструктуризация массивов

// const rgb = [255, 100, 80];

// const [a,b,c] = rgb;
// console.log(a,b,c);

// Операция rest (сбор)
// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);
