// Timestamp: 13:47.

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}

// We could also do forEach, but that seems to be more tailored to attributing things to html.

// We can iterate over arrays like we just have, and also strings. Each element would be a string character.

// We aren't able to update values in the array with this for of loop, just print them out or
// output them to another variable.