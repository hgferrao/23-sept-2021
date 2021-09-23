'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//additional exercise
// console.log(flights.split('+'));
const getcode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '#' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getcode(from)} ${getcode(to)} (${time.replace(':', 'h')})`.padStart(38);
  console.log(output);
}
// Data needed for first part of the section

//Object literals
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals //Included openingHours in restaurent
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
  //Same as orderPizza: function(mainIngredient).... on so on // This is the feature of ES6
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
//Maps iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   //want to print only options eg: c,java,javascript
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log(...question);
// ///////////////////////
//Maps
// const rest = new Map();
// rest.set('name', 'henry resort');
// rest.set(1, 'belgaum');
// rest.set(2, 'mumbai');
// rest
//   .set('catogries', ['Italian', 'Pizzeria', 'vegetarian', 'orgainic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set('false', 'we are close');
// // console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 12;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('catogries'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test'); //we can use array as map key
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr)); // to acces array key value

// //Looping over property names of an object
// const properties = Object.keys(openingHours);
// console.log(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day} `;
// }
// console.log(openStr);

// //Looping over property names of an object
// const values = Object.values(openingHours);
// console.log(values);
// //Object entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we are open at ${open} and close at ${close}`);
// }
//without optional chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// //With Optional chaining
// console.log(restaurant.openingHours.mon?.open); //checks for openingHours.mon is present then reads (open) property
// console.log(restaurant.openingHours?.fri?.open); //Multiple optional chaining.checks for openingHours is present then reads (fri) property

// //Example for optional chaining
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day},we open at ${open}`);
// }
// //Optional chaining for methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exists'); //checks for method exists if not den retunrs does not exists string
// console.log(restaurant.orderMe?.(0, 1) ?? 'method does not exists'); //checks for method exists if not den retunrs does not exists string
// //Optional chaining on ARRAYS
// const users = [{ name: 'jonas', email: 'hgferrao@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');
////////////////////////////////////////
// let cars = ['bmw', 'maruti', 'ford'];
// for (let item of cars) console.log(item);
// //The for of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// //To print index number use entries method
// for (const item of menu.entries()) {
//   console.log(item);
// }
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; //will print 10 even after giving 0 guests.to over come this we use Nullish operator.
// console.log(guests);
// const guestCorrect = restaurant.numGuests ?? 10; //using nullish will print 0
// console.log(guestCorrect);
// console.log('------OR-----');
// //Use any data type,return any data type,Short-circuit
// console.log(3 || 'Henry');
// console.log('' || 'Henry');
// console.log(undefined || null);
// console.log(true || 0);
// console.log(false || true);
// console.log('' || 0 || false || 'henry' || 23);

// restaurant.numGuests = 20;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);
// const guests2 = restaurant.numGuests || 10; //using OR(||) short circuit
// console.log(guests2);
// console.log('------AND-----');
// console.log(0 && 'Henry');
// console.log(7 && 'Henry');
// console.log(7 && 10 && 0 && 5);
// console.log('henry' && 23 && null && 'ferrao');
// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }
// ///IF using && short circuit
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
////////////////////////////////////
//Rest pattern and parameters
// 1)Destructuring
//Spread,because on RIGHT side of =
// const arr = [1, 2, 3, ...[4, 5]];

// //REST, because on LEFT side of =
// const [pizza, , risotto, ...others] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, others);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// //2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 36, 76];
// add(...x);
// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
//Spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //old way to create new array
// console.log(badNewArr);
// //Using spread operator (...)
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr); //to print array items individually
// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);
// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 arry
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// //Real world example
// const ingredients = [
//   // prompt("Let's make some pasta!! Ingredient 1 ?"),
//   // prompt('Ingredient 2:'),
//   // prompt('Ingredient 3:'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients); //calling using spread operator

// //Objects
// const newRestaurent = { foundedIn: 1995, ...restaurant, founder: 'Henry' };
// console.log(newRestaurent);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'henry rest';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// /////////////////////////
//Destructuring object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: retaurentName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; //Giving new variable names
// console.log(retaurentName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant; //Setting default value
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // use () to destructure in objects.
// console.log(a, b);
// //Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// // let [main, secondary] = restaurant.categories; //To acess first 2 element
// let [main, , secondary] = restaurant.categories; //Here check for output if we want to acess other element
// console.log(main, secondary);

//Switiching main to secondary using tempory variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching using Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructure of array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // destructuring
// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//Coding challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //Challenge 2
// //Step 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// //Step 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //Step 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamstr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamstr} ${odd}`);
// }
// //Step 1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //Step 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //Step 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //Step 4
// const playersFinal = [...players1, 'Thiago', 'Coutino', 'Periscic'];
// //Step 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //Step 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored.`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// // printGoals(game.scored);
// printGoals(...game.scored);
// //Step 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// sets
// const orderSet = new Set(['henry', 'henry', 'ferrao', 'george', 'whrer']);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('ferrao'));
// console.log(orderSet.has('xyz'));
// orderSet.add('xyz');
// orderSet.delete('xyz');
// // orderSet.clear();
// console.log(orderSet);
// //looping on sets
// for (const items of orderSet) {
//   console.log(items);
// }
// //example
// const staff = [
//   'chef',
//   'manager',
//   'waiter',
//   'ceo',
//   'director',
//   'waiter',
//   'chef',
// ];
// // const uniqueset = new Set(staff); //this is converted in to set which has unique values
// const uniqueset = [...new Set(staff)]; // converted in to array using spread operator
// console.log(uniqueset);
/////////////////
//Coding challenge 3
// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substitution'],
//   [47, 'Goal'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'Yellow card'],
// ]);
// //step 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //step 2
// gameEvents.delete(64);
// // step 3
// console.log(`An event happend,on average,every ${90 / gameEvents.size} minute`);
// const time = [...gameEvents.keys()].pop(); // used pop to get last element in the game event array
// console.log(time); //Bonus
// console.log(
//   `An event happend,on average,every ${time / gameEvents.size} minute`
// );
// //Step 4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// //Fix Capitalization in name
// const passenger = 'jOnAs'; //to convert to 'Jonas'
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// //Comparing email
// //Step by step
// const email = 'hello@henry.io';
// const loginEmail = '  Hello@HeNry.Io \n'; //it has whilte space also
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// //The above can be written like below in one line
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //Replacingvparts of string
// const priceUS = '288,97$';
// const priceIND = priceUS.replace('$', 'Rs').replace(',', '.');
// console.log(priceIND);
// const announcement = 'All passengers report door 23.Boarding door 23!';
// console.log(announcement);
// const replacedAnnouncement = announcement.replace('door', 'Gate'); //it will replace only 1st occurance
// const replacedAnnouncementForAll = announcement.replaceAll('door', 'Gate'); //Replaced for all
// console.log(replacedAnnouncement);
// //Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A'));
// console.log(plane.includes('Az320'));
// const me = 'henry george';
// console.log(me.startsWith('hen'));
// console.log(me.startsWith('ferrao'));
// if (me.startsWith('hen') && me.endsWith('rge')) {
//   console.log('Your name is correct');
// } else {
//   console.log('Does not match');
// }

// //Practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed to board the plane');
//   } else {
//     console.log('welcome aboard');
//   }
// };
// checkBaggage('I have a laptop,some Food and pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Henry ferrao'.split(' '));
// const [firstName, lastName] = 'Henry ferrao'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' '); //added in array using split
//   // console.log(names);
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   // console.log(namesUpper);
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('henry george ferrao');
// capitalizeName('john paul');

// //Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+'));
// console.log(message.padEnd(20, '+'));
// console.log(message.padStart(20, '+').padEnd(35, '+')); //here the total lenght will be 35

// //practice
// const maskCreditCard = function (number) {
//   const str = number + ''; //converting a number to string
//   const last = str.slice(-4); // taking last four digits of number
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(68324683264236));
// console.log(maskCreditCard(8745382983745));
// console.log(maskCreditCard('76545273654547673'));
// //Repeat method
// const message2 = 'Bad weather...all departures delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes are waiting${'>'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(10);
// planesInLine(8);
//////////////////////////////
//Working with strings Part-1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log('B156'[0]);
// console.log(airline.length);
// console.log('B156'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //added +1 to remove the space
// console.log(airline.slice(-2)); /// starts with end
// console.log(airline.slice(1, -1));
// //practice
// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1); //searches for string from last
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky its window seat');
// };
// checkMiddleSeat('11B'); //take last charactor of seat and check if its middle seat or not
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// challenge 4
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'>'.repeat(i + 1)}`);
  }
});
