// Задача 1.
const friends = [
  {
    name: 'Mango',
    online: false,
  },
  {
    name: 'Kivi',
    online: true,
  },
  {
    name: 'Poly',
    online: true,
  },
  {
    name: 'Ajax',
    online: false,
  },
];

console.table(friends);
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
//     const friendNames = [];
//     for (const friend of allFriends) {
//         // console.log(friend);
//         friendNames.push(friend.name);
        

//     }
//         return friendNames;

// }

// console.log(getAllNames(friends));


// Получаем имена друзей только онлайн


// const getOnlineFriends = function (allFriends) {
//     const friendOnline = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         if (friend.online) {
//             friendOnline.push(friend);
            
//         }
        
//     }
//     return friendOnline;
// }

// console.log(getOnlineFriends(friends));



// Получаем имена друзей только онлайн


// const getOfflineFriends = function (allFriends) {
//     const friendOffline = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         if (!friend.online) {
//             friendOffline.push(friend);
            
//         }
        
//     }
//     return friendOffline;
// }

// console.log(getOfflineFriends(friends));