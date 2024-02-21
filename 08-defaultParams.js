numFunction = (numArray = []) => {
  let total = 0;
  numArray.forEach((element, index) => {
    total += element;
    console.log(index);
  })
}

numFunction();

// In line 1, having the parameter be equal to an empty array by default
// allows the code to still run if someone calls the function but doesn't
// pass anything through like in this example.