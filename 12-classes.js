class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Meow') {
    console.log(sound);
  }

  static return10() {
    return 10;
  }
}

let cat = new Animal('Cat', 4);

cat.legs = 3 // we can redefine things in classes outside of classes.

console.log(cat.legs);

cat.makeNoise();

console.log(Animal.return10()); // when we have static by a function in the class, we don't have to make an object out of the class to call it.

// timestamp: 41:11;

// timestamp: 44:00 git method.