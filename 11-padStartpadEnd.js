let example = 'Nicholas McCarroll';

console.log(example.padStart(20, 'y'));

// You put in a max length as the first argument, and if the string you are adding things
// to is less than the max length, then it will fill the string either at the start or
// end (depending on which function you use) with the second argument. In this case,
// padStart will put 2 y's in front of the string because the string is 18 chars long.