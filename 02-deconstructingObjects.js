const personalInformation = {
  firstName: 'Dylan',
  lastName: 'Isreal',
  city: 'Austin',
  state: 'Texas',
  zipCode: '73301'
};

// Typing out personalInformation.firstName to access a property
// from an object is wild.... I don't wanna type that much.

const {firstName, lastName} = personalInformation;

console.log(`${firstName} ${lastName}`);

// we can even give them shortcut names

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);


// we can deconstruct arrays too...

let [firstN, middleN] = ['nick', 'alexander'];

console.log(firstN);