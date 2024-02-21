let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

example2.push(true);
console.log(example1);

console.log(example2);

// The three dots allowed me to copy the values in that variable to example2.
// It doesn't do this by reference, as we can see that when we push a value
// to example2, it does not show up in example1.


// We can do this for objects too.

let yes = {
  firstName: 'nick'
};

let no = {
  ...yes
}