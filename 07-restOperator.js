function add(...nums) {
  console.log(nums);
}

add(1, 2, 3, 4, 5);

// using the three dots allows us to pass in as many arguments as we want without needing an array.




// Here I am practicing arrow functions.
nums = (...yessir) => console.log(yessir);

nums(1, 2, 3, 4, 13)