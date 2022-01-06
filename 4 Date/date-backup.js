const d = new Date();

console.log(d); // 2022-01-01T10:40:21.612Z

console.log(d.getFullYear()); //2022
console.log(d.getMonth() + 1); //0 so add 1
console.log(d.getDate()); //1
console.log(d.getMinutes() + 1); //43
console.log(d.getHours()); //16 in own standard
console.log(d.getSeconds()); //5


/**
 * 
 */
// const d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);

const d = new Date(2018, 11, 24, 10, 33, 30, 0);

console.log(d.toUTCString()); //Mon, 24 Dec 2018 04:33:30 GMT
console.log(d.toISOString()); //2018-12-24T04:33:30.000Z

/**
 * 
 */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let da = days[d.getDay()];

console.log(da);


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */