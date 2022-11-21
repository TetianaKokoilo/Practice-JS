//  * Task 1.
//  * Напиши скрипт, який для об'єкта `user`, послідовно:
//  * - додає поле `mood` зі значенням `'happy'`
//  * - замінює значення `hobby` на `'skydiving'`
//  * - замінює значення `premium` на `false`
//  * - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
//  */

 const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

//  * - додає поле `mood` зі значенням `'happy'`
user.mood = 'happy';
// console.log(user);

//  * - замінює значення `hobby` на `'skydiving'`

// ['hobby'] = 'skydiving';


//  * - замінює значення `premium` на `false`
user.premium = false;
// console.log(user);

//  * - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
const keys = Object.keys(user);
for (const key of keys) {
    // console.log(key);
    console.log(user[key]);
}