// Exercise 1: .map()

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((number) => {
  return number * 2;
});

console.log("Exercise 1:", nums2);

// Exercise 2: Array Destructuring

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [firstTopping, secondTopping] = pizzaToppings;

console.log("Exercise 2:", firstTopping);
console.log("Exercise 2:", secondTopping);

// Exercise 3: Object Destructuring

const car = {
  make: "Audi",
  model: "q5",
};
const { make, model } = car;

console.log("Exercise 3:", make);
console.log("Exercise 3:", model);

// Exercise 4: spread -> arrays

const controversialPizzaToppings = [...pizzaToppings];

console.log("Exercise 4:", controversialPizzaToppings);

// Exercise 5: spread -> objects

const myCar = { ...car };
myCar.model = "q7";

console.log("Exercise 5:", myCar);

// Exercise 6:

const propertyName = "username";
const userProfile = {
  [propertyName]: "baileybeck2",
};
console.log("Exercise 6:", userProfile);

// Exercise 7: -> import/export files (run node importingFile.js)

// Exercise 8:

const animalType = (noun = "cat", adjective = "white") => {
  console.log("Exercise 8:", `The ${noun} is ${adjective}.`);
};

animalType();
animalType("bird", "pink");

// Exercise 9:

// Convert the following `if...else` statement in to a ternary:

// if (pizza === "tasty") {
//     console.log("yum");
//   } else {
//     console.log("yuck");
//   }

let pizza = "tasty";
pizza === "tasty"
  ? console.log("Exercise 9:", "yum")
  : console.log("Exercise 9:", "yuck");

// Exercise 10:

const localLangConfig = null;
const LANG = localLangConfig || "en";

console.log("Exercise 10:", "Language setting:", LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || "light";

console.log("Exercise 10:", "User theme setting:", USER_THEME);

// Exercise 11:

const adventurer = {
  name: "Alice",
};

let cat = adventurer.cat?.name;

console.log("Exercise 11:", cat);
