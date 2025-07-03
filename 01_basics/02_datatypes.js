"use strict"; // treat all JS as newer version

// alert(3 + 3);
// we are using node js, not browser

console.log(3 + 3);
// code readability should be high

console.log("Prath-code");

let name = "Prath";
let age = 10;
let isStudent = true;
let n = null;
let notDefined = undefined;
let symbol = Symbol("unique");
let symbol2 = Symbol("unique");
console.log(symbol === symbol2); // false, because symbol is unique

let PrathCode_Data = {
    name: "Prath",
    age: 10,
    isStudent: true
}

// number
/*
 ╭────────────────────────────────────────────────────────────────╮
 │               📚 JavaScript Number System Overview            │
 ╰────────────────────────────────────────────────────────────────╯

 ┌────────────────────────────────┐
 │ 🔢 Safe Integer Range (Exact) │
 └────────────────────────────────┘
   • Number.MAX_SAFE_INTEGER     =  9007199254740991     // 2^53 - 1
   • Number.MIN_SAFE_INTEGER     = -9007199254740991     // -(2^53 - 1)
   → Use these bounds to avoid precision issues with integers.

 ┌─────────────────────────────────────┐
 │ 🔬 Floating Point Number Range     │
 └─────────────────────────────────────┘
   • Number.MAX_VALUE               =  1.7976931348623157e+308
   • Number.MIN_VALUE               =  5e-324               // Smallest > 0
   → These are the limits of IEEE 754 double-precision.

 ┌──────────────────────────────────┐
 │ ⚠️ Special Numeric Values       │
 └──────────────────────────────────┘
   • Infinity                     → Positive overflow
   • -Infinity                    → Negative overflow
   • NaN                          → Not-a-Number
   • null                         → Intentional absence of value
   • undefined                    → Uninitialized variable

 ┌─────────────────────────────┐
 │ 🧠 Number Validation Tools │
 └─────────────────────────────┘
   • Number.isFinite(x)           → true if x is finite number
   • Number.isNaN(x)              → true if x is NaN
   • Number.isInteger(x)          → true if x is an integer
   • Number.isSafeInteger(x)      → true if x is within safe integer range

 ┌─────────────────────────────────┐
 │ 🧱 BigInt (Arbitrary Integers) │
 └─────────────────────────────────┘
   • const big = 9007199254740995n         // Note the 'n' suffix
   • BigInt can safely store numbers > 2^53
   • Operations: +, -, *, /, %, ** (no mixing with Number type)

 ┌────────────────────────────────┐
 │ ✅ Recommended Best Practices │
 └────────────────────────────────┘
   • Use BigInt for crypto, IDs, timestamps, and large sums.
   • Never compare NaN directly → use Number.isNaN(x)
   • Be cautious with floating-point math (e.g., 0.1 + 0.2 ≠ 0.3)
   • Prefer strict checks (`===`, `!==`) to avoid coercion issues

*/

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.NaN);

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

// bigint
/*
 ╭──────────────────────────────────────────────────────────────╮
 │                   🔢 JavaScript BigInt Reference            │
 ╰──────────────────────────────────────────────────────────────╯

 🧱 What is BigInt?
 ───────────────────────────────────────────────────────────────
 • BigInt is a built-in primitive type for representing integers
   larger than `Number.MAX_SAFE_INTEGER` (±2^53 - 1).
 • Introduced in ECMAScript 2020.

 ┌──────────────────────────────┐
 │ 🆔 Creating BigInts         │
 └──────────────────────────────┘
   • const a = 12345678901234567890n          // Literal with 'n'
   • const b = BigInt("12345678901234567890") // From string
   • const c = BigInt(42)                     // From number (safe range only)

 ┌──────────────────────────────────────────┐
 │ ➕ Arithmetic with BigInt               │
 └──────────────────────────────────────────┘
   • Addition        : a + b
   • Subtraction     : a - b
   • Multiplication  : a * b
   • Division        : a / b         // Always rounds down
   • Modulus         : a % b
   • Exponentiation  : a ** b

   ❗ Cannot mix BigInt with Number
   • Example: `1n + 2` → TypeError
   • Must convert types: BigInt(2) or Number(1n)

 ┌──────────────────────────────┐
 │ 🔎 Type & Checks            │
 └──────────────────────────────┘
   • typeof 123n                  → 'bigint'
   • typeof BigInt("99")         → 'bigint'
   • Number.isSafeInteger(x)     → false for BigInts
   • Use try/catch for input parsing from strings

 ┌──────────────────────────────────────────┐
 │ ⚠️ Limitations & Notes                  │
 └──────────────────────────────────────────┘
   • No support for Math methods:
     → Math.sqrt(4n) → ❌ TypeError
     → Use custom logic or convert to Number

   • Not interoperable with JSON:
     → JSON.stringify({ val: 10n }) → TypeError
     → Workaround: Convert to string first

   • Bitwise operators work as expected:
     → 5n << 2n → 20n

   • Comparisons are allowed (loose & strict):
     → 10n == 10   → true
     → 10n === 10  → false
     → 10n > 5     → true

 ┌──────────────────────────────┐
 │ ✅ Recommended Use Cases    │
 └──────────────────────────────┘
   • High-precision math (finance, cryptography)
   • Large IDs (e.g., Twitter Snowflake IDs)
   • Blockchain, timestamping, large-scale counters

*/

// string
/*
 ╭──────────────────────────────────────────────────────────────╮
 │                   🔤 JavaScript String Reference            │
 ╰──────────────────────────────────────────────────────────────╯

 🧾 What is a String?
 ───────────────────────────────────────────────────────────────
 • A String is a sequence of characters used to represent text.
 • JavaScript strings are immutable and based on UTF-16 encoding.

 ┌──────────────────────────────┐
 │ ✨ Creating Strings         │
 └──────────────────────────────┘
   • const str1 = "Hello";         // Double quotes
   • const str2 = 'World';         // Single quotes
   • const str3 = `Hello ${str2}`; // Template literal (backticks)
   • const str4 = new String("Hi"); // String object (avoid)

 ┌──────────────────────────────────────────────┐
 │ 🔧 Common String Methods                    │
 └──────────────────────────────────────────────┘
   • str.length                   → String length
   • str.toUpperCase()           → "abc" → "ABC"
   • str.toLowerCase()           → "ABC" → "abc"
   • str.charAt(i)               → Character at index i
   • str.indexOf("sub")          → Index of substring or -1
   • str.includes("sub")         → true/false
   • str.startsWith("Hi")        → true/false
   • str.endsWith("!")           → true/false
   • str.trim()                  → Removes whitespace
   • str.replace("a", "b")       → Replace first occurrence
   • str.replaceAll("a", "b")    → Replace all occurrences
   • str.slice(start, end)       → Substring from start to end
   • str.substring(start, end)   → Similar to slice, no negative indexes
   • str.split(",")              → Returns array of substrings
   • str.repeat(n)               → Repeats string n times
   • str.padStart(len, padStr)   → Pads from start
   • str.padEnd(len, padStr)     → Pads from end

 ┌──────────────────────────────────────────────┐
 │ 🧠 Template Literals                        │
 └──────────────────────────────────────────────┘
   • const name = "Prath";
     const msg = `Hello, ${name}!`;  → "Hello, Prath!"
   • Multiline strings are easy:
     const multiline = `Line 1
     Line 2`;

 ┌──────────────────────────────────────────────┐
 │ 🔎 Type & Checks                            │
 └──────────────────────────────────────────────┘
   • typeof "abc"               → "string"
   • typeof new String("abc")   → "object" ⚠️ Avoid!
   • "abc" === "abc"            → true
   • "abc" == new String("abc") → true (coerced)
   • "abc" === new String("abc")→ false (different types)

 ┌──────────────────────────────────────────────┐
 │ ✅ Best Practices                           │
 └──────────────────────────────────────────────┘
   • Prefer literal strings (`"text"`, `'text'`, or `` `text` ``).
   • Avoid `new String()` unless you have a specific reason.
   • Use `String.raw` for escaping inside templates.
   • Use `normalize()` for Unicode comparison (e.g., accents).
   • Use `Intl.Collator` for locale-aware sorting/comparison.

 ┌──────────────────────────────────────────────┐
 │ 🧪 Fun Examples                             │
 └──────────────────────────────────────────────┘
   • "banana".split("").reverse().join("") → "ananab"
   • "Hello"[1]                             → "e"
   • "abc".repeat(3)                        → "abcabcabc"
   • "  padded  ".trim().padStart(12, "-") → "--padded"

*/

// boolean
/*
 ╭──────────────────────────────────────────────────────────────╮
 │                 🟢 JavaScript Boolean Reference             │
 ╰──────────────────────────────────────────────────────────────╯

 🔍 What is a Boolean?
 ───────────────────────────────────────────────────────────────
 • A Boolean is a primitive type with only two values:
     → true
     → false
 • Used for logic, conditions, control flow, and flags.

 ┌──────────────────────────────┐
 │ ✨ Creating Booleans        │
 └──────────────────────────────┘
   • const isOn = true;
   • const isOff = false;
   • const fromNum = Boolean(1);         // → true
   • const fromStr = Boolean("hello");   // → true
   • const empty = Boolean("");          // → false
   • const zero = Boolean(0);            // → false
   • const obj = Boolean({});            // → true
   • const boolObj = new Boolean(false); // ⚠️ Avoid! It's an object

 ┌──────────────────────────────────────────────┐
 │ ⚖️ Truthy and Falsy Values                  │
 └──────────────────────────────────────────────┘
 ✅ Truthy:
   • true, non-zero numbers, non-empty strings, [], {}, function(){}

 ❌ Falsy:
   • false, 0, -0, 0n, "", null, undefined, NaN

   Example:
     if ("")         → false
     if ("hello")    → true
     if (null)       → false
     if ([])         → true (⚠️ common gotcha)

 ┌──────────────────────────────────────────────┐
 │ 🔧 Boolean Operations                       │
 └──────────────────────────────────────────────┘
   • !value       → NOT (negation)
   • !!value      → Convert to Boolean
   • a && b       → AND
   • a || b       → OR
   • a ? b : c    → Ternary (conditional expression)

   Example:
     const loggedIn = true;
     const msg = loggedIn ? "Welcome!" : "Please log in";

 ┌──────────────────────────────────────────────┐
 │ 🧠 Type & Coercion Notes                    │
 └──────────────────────────────────────────────┘
   • typeof true            → "boolean"
   • typeof new Boolean()   → "object" ⚠️
   • Boolean("false")       → true  (non-empty string!)
   • !!"false"              → true

 ┌──────────────────────────────────────────────┐
 │ ✅ Best Practices                           │
 └──────────────────────────────────────────────┘
   • Always use `Boolean(val)` or `!!val` for clarity.
   • Avoid `new Boolean()` → it behaves like an object.
   • Prefer strict comparisons (`===`, `!==`) to avoid coercion.
   • Use short-circuiting (`||`, `&&`) for defaults and guards.

 ┌──────────────────────────────────────────────┐
 │ 🧪 Fun Examples                             │
 └──────────────────────────────────────────────┘
   • !!null              → false
   • !!"0"               → true   (non-empty)
   • !!0                 → false
   • !true               → false
   • true && "Hello"     → "Hello"
   • false || "Fallback" → "Fallback"

*/

// null
/*
 ╭──────────────────────────────────────────────────────────────╮
 │                   ⚫ JavaScript null Reference              │
 ╰──────────────────────────────────────────────────────────────╯

 🔍 What is null?
 ───────────────────────────────────────────────────────────────
 • `null` is a primitive value that represents:
     → The **intentional absence** of any object value.
     → "Nothing", "empty", or "unknown" — **set by the programmer**.
 • It is often used as a placeholder for object-type variables.

 ┌──────────────────────────────┐
 │ ✨ Declaring null           │
 └──────────────────────────────┘
   • let data = null;        // Explicitly nothing
   • let obj = { user: null };

 ┌──────────────────────────────────────────────┐
 │ 🔬 Type and Behavior                        │
 └──────────────────────────────────────────────┘
   • typeof null            → "object"   ⚠️ (legacy quirk)
   • null === null          → true
   • null == undefined      → true       (loose equality)
   • null === undefined     → false      (strict equality)
   • Boolean(null)          → false
   • !!null                 → false

 ┌──────────────────────────────────────────────┐
 │ 🚫 Common Pitfalls                          │
 └──────────────────────────────────────────────┘
   • `typeof null` → "object"  ← Historic JS bug
   • Confusing `null` vs `undefined`
   • Cannot access properties on null:
       → null.someProp → ❌ TypeError

 ┌──────────────────────────────────────────────┐
 │ 🔍 null vs undefined                        │
 └──────────────────────────────────────────────┘
   null         → Value is *intentionally empty*
   undefined    → Value is *not assigned*

   Example:
     let a;
     console.log(a);         → undefined
     a = null;
     console.log(a);         → null

 ┌──────────────────────────────────────────────┐
 │ ✅ Best Practices                           │
 └──────────────────────────────────────────────┘
   • Use `null` to:
     - Reset or clear a variable.
     - Represent "empty" in APIs, DBs, or object fields.
   • Use strict equality checks (`===`, `!==`) to avoid surprises.
   • Avoid overusing `== null` (it matches both null & undefined).

 ┌──────────────────────────────────────────────┐
 │ 🧪 Practical Examples                       │
 └──────────────────────────────────────────────┘
   • const user = null;
     if (user === null) console.log("No user");

   • const result = fetchData() ?? null;

   • const value = input ?? null;  // Use null as fallback

   • JSON.stringify({ x: null }) → '{"x":null}'

*/

// undefined
/*
 ╭──────────────────────────────────────────────────────────────╮
 │                ⚠️ JavaScript undefined Reference            │
 ╰──────────────────────────────────────────────────────────────╯

 🔍 What is undefined?
 ───────────────────────────────────────────────────────────────
 • `undefined` is a primitive value automatically assigned to:
     → Variables that have been declared but not yet assigned a value.
     → Missing function return values.
     → Missing object properties.
     → Function parameters not passed.

 ┌──────────────────────────────┐
 │ ✨ Declaring undefined      │
 └──────────────────────────────┘
   • let a;
     console.log(a);            // → undefined

   • function foo() {}
     console.log(foo());        // → undefined

   • const obj = {};
     console.log(obj.name);     // → undefined

 ┌──────────────────────────────────────────────┐
 │ 🔬 Type and Behavior                        │
 └──────────────────────────────────────────────┘
   • typeof undefined         → "undefined"
   • undefined === undefined  → true
   • undefined == null        → true  (loose equality)
   • undefined === null       → false (strict equality)
   • Boolean(undefined)       → false
   • !!undefined              → false

 ┌──────────────────────────────────────────────┐
 │ 🚫 Common Pitfalls                          │
 └──────────────────────────────────────────────┘
   • `undefined` is not a keyword — it's a global variable!
   • Overwriting `undefined` (in old JS) used to be possible:
       → `undefined = 123;`  ← avoid doing this!
   • Be careful when checking:
       → `if (val == null)`  checks for **both null & undefined**

 ┌──────────────────────────────────────────────┐
 │ 🆚 undefined vs null                        │
 └──────────────────────────────────────────────┘
   undefined → Value is **not yet assigned**
   null      → Value is **explicitly set to empty**

   Example:
     let x;             // x is undefined
     x = null;          // x is now intentionally empty

 ┌──────────────────────────────────────────────┐
 │ ✅ Best Practices                           │
 └──────────────────────────────────────────────┘
   • Prefer `let x;` over `let x = undefined;`
   • Use `=== undefined` for clarity and type safety.
   • For missing values, prefer `null` over explicitly setting `undefined`.
   • Use default parameters or `??` (nullish coalescing) when possible.

   Example:
     function greet(name = "Guest") {
       console.log("Hello, " + name);
     }

     greet();  // → "Hello, Guest"

 ┌──────────────────────────────────────────────┐
 │ 🧪 Practical Examples                       │
 └──────────────────────────────────────────────┘
   • function sayHi(user) {
       if (user === undefined) {
         console.log("No user provided");
       }
     }

   • const config = options.theme ?? "light"; // fallback if undefined or null

   • typeof missingVar === "undefined"        // true, if missingVar never declared

   • let val;
     console.log(val ?? "default");           // → "default"

*/

// symbol
/*
╭──────────────────────────────────────────────────────────────╮
│                🧿 JavaScript Symbol Reference               │
╰──────────────────────────────────────────────────────────────╯

🔍 What is a Symbol?
────────────────────────────────────────────────────────────────
• `Symbol` is a **primitive data type** introduced in ES6.
• It represents a **unique and immutable identifier**.
• Commonly used as **object property keys** to avoid naming conflicts.

┌──────────────────────────────┐
│ ✨ Creating Symbols           │
└──────────────────────────────┘
  • const sym1 = Symbol();                  // Unique symbol
  • const sym2 = Symbol("desc");            // Optional description
  • const sym3 = Symbol("desc");
    sym2 === sym3 → false  (Always unique)

┌──────────────────────────────────────────────────────────────┐
│ 🧾 Symbol Description (For Debugging)                       │
└──────────────────────────────────────────────────────────────┘
  • const s = Symbol("userId");
    s.toString()    → "Symbol(userId)"
    s.description   → "userId"

┌──────────────────────────────────────────────────────────────┐
│ 🔧 Using Symbols as Object Keys                             │
└──────────────────────────────────────────────────────────────┘
  • const id = Symbol("id");
    const user = {
      [id]: 123,
      name: "Prath"
    };

    console.log(user[id]);    // → 123

┌──────────────────────────────────────────────────────────────┐
│ ⚠️ Properties with Symbol Keys                              │
└──────────────────────────────────────────────────────────────┘
  • Not accessible via:
    - for...in
    - Object.keys()
    - JSON.stringify()

  • Use these instead:
    - Object.getOwnPropertySymbols(obj)
    - Reflect.ownKeys(obj)      → Includes strings + symbols

┌──────────────────────────────────────────────────────────────┐
│ 🧠 Global Symbol Registry (Shared Symbols)                  │
└──────────────────────────────────────────────────────────────┘
  • const a = Symbol.for("shared");
  • const b = Symbol.for("shared");

    a === b → true             // Shared via registry

  • Symbol.keyFor(a) → "shared"

┌──────────────────────────────────────────────────────────────┐
│ 🧰 Use Cases                                                │
└──────────────────────────────────────────────────────────────┘
  ✅ Unique object keys (safe from overwrites)
  ✅ Hiding internal properties from loops
  ✅ Implementing custom behaviors (e.g., Symbol.iterator)
  ✅ Plugin-safe extension points in libraries

┌──────────────────────────────────────────────────────────────┐
│ ✅ Well-known Built-in Symbols                              │
└──────────────────────────────────────────────────────────────┘
  • Symbol.iterator        → Makes object iterable (for...of)
  • Symbol.toPrimitive     → Custom conversion logic
  • Symbol.toStringTag     → Custom tag for Object.prototype.toString
  • Symbol.hasInstance     → Custom instanceof behavior
  • Symbol.isConcatSpreadable → Controls Array.prototype.concat

  Example:
    const obj = {
      [Symbol.toPrimitive](hint) {
        return hint === "number" ? 42 : "forty-two";
      }
    };

┌──────────────────────────────────────────────────────────────┐
│ ✅ Best Practices                                           │
└──────────────────────────────────────────────────────────────┘
  • Prefer Symbol over string constants for internal keys.
  • Use `Symbol.for()` only when shared identity is needed.
  • Don’t overuse: symbols are advanced; use when uniqueness matters.

┌──────────────────────────────────────────────────────────────┐
│ 🧪 Fun Symbol Examples                                      │
└──────────────────────────────────────────────────────────────┘
  • const uniqueKey = Symbol("secret");
    const data = { [uniqueKey]: 123 };

  • const iterable = {
      *[Symbol.iterator]() {
        yield 1; yield 2; yield 3;
      }
    };

    for (let val of iterable) console.log(val); // 1, 2, 3

*/


// object
/*
╭──────────────────────────────────────────────────────────────╮
│                🧱 JavaScript Object Reference               │
╰──────────────────────────────────────────────────────────────╯

🔍 What is an Object?
────────────────────────────────────────────────────────────────
• Objects are **collections of key-value pairs**.
• They store **structured data**, and are the **core building block** of JS.
• Keys (aka properties) are strings or symbols. Values can be anything.

┌──────────────────────────────┐
│ ✨ Creating Objects         │
└──────────────────────────────┘
  • const obj1 = {};                           // Literal
  • const obj2 = new Object();                 // Constructor
  • const obj3 = Object.create(protoObj);      // Custom prototype
  • const obj4 = {
      name: "Prath",
      age: 30,
      greet() { console.log("Hi!"); }
    };

┌──────────────────────────────────────────────────────────────┐
│ 🛠️ Accessing & Modifying Properties                         │
└──────────────────────────────────────────────────────────────┘
  • obj.name            → "Prath"
  • obj["age"]          → 30
  • obj.city = "Delhi";             // Add
  • delete obj.age;                 // Remove
  • "name" in obj         → true
  • obj.hasOwnProperty("age") → false

┌──────────────────────────────────────────────────────────────┐
│ 🧠 Property Keys & Values                                   │
└──────────────────────────────────────────────────────────────┘
  • Keys are strings or symbols
  • Values can be any valid JS data (functions, arrays, other objects)

  Example:
    const key = "status";
    const obj = {
      [key]: "active",
      123: "numeric key",
      [Symbol("id")]: 9876
    };

┌──────────────────────────────────────────────────────────────┐
│ 🔁 Iterating Over Objects                                   │
└──────────────────────────────────────────────────────────────┘
  • for (let key in obj) { ... }              // Includes inherited
  • Object.keys(obj)         → Own keys
  • Object.values(obj)       → Own values
  • Object.entries(obj)      → [[key, value], ...]

  Example:
    for (const [k, v] of Object.entries(obj)) {
      console.log(k, v);
    }

┌──────────────────────────────────────────────────────────────┐
│ 🔐 Object Utility Methods                                   │
└──────────────────────────────────────────────────────────────┘
  • Object.assign(target, source)       // Copy properties
  • Object.freeze(obj)                  // Make immutable
  • Object.seal(obj)                    // No add/remove, but writable
  • Object.keys(obj)                    // Own enumerable keys
  • Object.getOwnPropertyNames(obj)     // All own (incl. non-enum)
  • Object.getPrototypeOf(obj)          // Get [[Prototype]]

┌──────────────────────────────────────────────────────────────┐
│ 🔄 Object Cloning                                           │
└──────────────────────────────────────────────────────────────┘
  • Shallow clone:
      const copy = { ...obj };
      const copy2 = Object.assign({}, obj);

  • Deep clone (simple case):
      const deepCopy = JSON.parse(JSON.stringify(obj));

┌──────────────────────────────────────────────────────────────┐
│ 🧬 Prototypes & Inheritance                                 │
└──────────────────────────────────────────────────────────────┘
  • All objects inherit from `Object.prototype`
  • You can access prototype chain via:
      Object.getPrototypeOf(obj)
      obj.__proto__  (legacy)

  Example:
    const animal = { eats: true };
    const dog = Object.create(animal);
    dog.barks = true;

    console.log(dog.eats);   // true ← inherited

┌──────────────────────────────────────────────────────────────┐
│ ✅ Best Practices                                           │
└──────────────────────────────────────────────────────────────┘
  • Prefer `{}` over `new Object()`
  • Use `Object.hasOwn()` or `hasOwnProperty` to check own props
  • Avoid `for...in` if you don’t want inherited keys
  • Use `const` when defining objects that don't need reassignment
  • Freeze config/state objects to prevent mutation

┌──────────────────────────────────────────────────────────────┐
│ 🧪 Fun Object Patterns                                      │
└──────────────────────────────────────────────────────────────┘
  • Computed properties:
      const key = "score";
      const obj = { [key]: 99 };

  • Method shorthand:
      const user = {
        sayHi() { return "Hi!" }
      };

  • Destructuring:
      const { name, age } = user;

  • Optional chaining:
      obj?.address?.city

*/

// typeof
/*
╭──────────────────────────────────────────────────────────────╮
│                 📏 JavaScript typeof Reference              │
╰──────────────────────────────────────────────────────────────╯

🔍 What is typeof?
────────────────────────────────────────────────────────────────
• `typeof` is a **unary operator** used to determine the **type of a value**.
• It returns a **string** describing the type: "number", "string", "object", etc.
• It works safely even on **undeclared variables**.

┌──────────────────────────────┐
│ 🧪 Syntax                   │
└──────────────────────────────┘
   typeof operand
   typeof(operand)

   Example:
     typeof "hello"         → "string"
     typeof(42)             → "number"

┌──────────────────────────────────────────────────────────────┐
│ 🔢 typeof Results (by Value Type)                           │
└──────────────────────────────────────────────────────────────┘
   typeof 123                  → "number"
   typeof NaN                  → "number"
   typeof "abc"                → "string"
   typeof true                 → "boolean"
   typeof undefined            → "undefined"
   typeof Symbol("id")         → "symbol"
   typeof 123n                 → "bigint"
   typeof function(){}         → "function"
   typeof {}                   → "object"
   typeof []                   → "object"
   typeof null                 → "object"     ⚠️ historical bug

┌──────────────────────────────────────────────────────────────┐
│ ⚠️ Quirks & Gotchas                                         │
└──────────────────────────────────────────────────────────────┘
  • `typeof null` returns "object" ← historical JS bug.
  • Arrays return "object" too.
  • `typeof undeclaredVar` → "undefined" (no ReferenceError!)
  • Functions return "function" — the only non-primitive with its own result.

  Example:
    typeof []          → "object"
    typeof (() => {})  → "function"

┌──────────────────────────────────────────────────────────────┐
│ 🧠 typeof vs instanceof vs constructor                      │
└──────────────────────────────────────────────────────────────┘
   typeof        → checks **primitive or function/object**
   instanceof    → checks **prototype chain**
   .constructor  → returns constructor function (may be undefined)

   Example:
     typeof []               → "object"
     [] instanceof Array     → true
     [].constructor.name     → "Array"

┌──────────────────────────────────────────────────────────────┐
│ ✅ Use Cases                                                │
└──────────────────────────────────────────────────────────────┘
  • Detecting primitives safely:
      if (typeof x === "string") { ... }

  • Checking if variable is a function:
      if (typeof fn === "function") { fn(); }

  • Avoiding ReferenceErrors:
      if (typeof maybeVar !== "undefined") { ... }

┌──────────────────────────────────────────────────────────────┐
│ 🧪 Safe typeof Checks                                       │
└──────────────────────────────────────────────────────────────┘
   if (typeof x === "number") { ... }
   if (typeof user === "object" && user !== null) { ... }
   if (typeof doWork === "function") { doWork(); }

┌──────────────────────────────────────────────────────────────┐
│ 🧬 Type Table                                               │
└──────────────────────────────────────────────────────────────┘
| Value                    | typeof Result     |
|--------------------------|-------------------|
| "hello"                  | "string"          |
| 42                       | "number"          |
| NaN                      | "number"          |
| true / false             | "boolean"         |
| undefined                | "undefined"       |
| Symbol("id")             | "symbol"          |
| 123n                     | "bigint"          |
| function() {}            | "function"        |
| {} / []                  | "object"          |
| null                     | "object" ⚠️       |

*/

