// Topic: ? to number conversion
// NOTE: string to number conversion
let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

console.log();

let valueInNumber = Number(score);

console.log();

console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log();

// NOTE: null to number conversion
let score2 = "33abc";

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2);

console.log();

console.log(typeof valueInNumber2);
console.log(valueInNumber2);

console.log();

// NOTE: undefined to number conversion
let score3 = undefined;

console.log(typeof score3);
console.log(typeof (score3));

let valueInNumber3 = Number(score3);

console.log();

console.log(typeof valueInNumber3);
console.log(valueInNumber3);

console.log();

// NOTE: boolean(true) to number conversion
let score4 = true;

console.log(typeof score4);
console.log(typeof (score4));

let valueInNumber4 = Number(score4);

console.log();

console.log(typeof valueInNumber4);
console.log(valueInNumber4);

console.log();

// NOTE: boolean(false) to number conversion
let score5 = false;

console.log(typeof score5);
console.log(typeof (score5));

let valueInNumber5 = Number(score5);

console.log();

console.log(typeof valueInNumber5);
console.log(valueInNumber5);

console.log();

// NOTE: string(number) to number conversion

let score6 = "10";

console.log(typeof score6);
console.log(typeof (score6));

let valueInNumber6 = Number(score6);

console.log();

console.log(typeof valueInNumber6);
console.log(valueInNumber6);

console.log();

/*
    "33abc" => Number = NaN (Not a Number)
    null => Number = NaN (Not a Number)
    undefined => Number = NaN (Not a Number)
    true => Number = 1
    false => Number = 0
    "10" => Number = 10
*/

console.log();
console.log();

// Topic: ? to boolean conversion
// NOTE: number(0) to boolean conversion
let isLoggedIn = 0;

console.log(typeof isLoggedIn);
console.log(typeof (isLoggedIn));

let valueInBoolean = Boolean(isLoggedIn);

console.log();

console.log(typeof valueInBoolean);
console.log(valueInBoolean);

console.log();

// NOTE: number(non - zero) to boolean conversion
let isLoggedIn2 = 10;

console.log(typeof isLoggedIn2);
console.log(typeof (isLoggedIn2));

let valueInBoolean2 = Boolean(isLoggedIn2);

console.log();

console.log(typeof valueInBoolean2);
console.log(valueInBoolean2);

console.log();

// NOTE: string("") to boolean conversion
let isLoggedIn3 = "";

console.log(typeof isLoggedIn3);
console.log(typeof (isLoggedIn3));

let valueInBoolean3 = Boolean(isLoggedIn3);

console.log();

console.log(typeof valueInBoolean3);
console.log(valueInBoolean3);

console.log();

// NOTE: string(non - empty) to boolean conversion

let isLoggedIn4 = "hello";

console.log(typeof isLoggedIn4);
console.log(typeof (isLoggedIn4));

let valueInBoolean4 = Boolean(isLoggedIn4);

console.log();

console.log(typeof valueInBoolean4);
console.log(valueInBoolean4);

console.log();


