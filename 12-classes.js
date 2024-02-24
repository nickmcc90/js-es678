class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Meow') {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
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

console.log(cat.metaData);    // this calls the git method. It's just something slight work.


// inheritance

class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);    // this gets the constructor stuff from the Animal class since we are inheriting it, and don't need to write out here.
    this.tail = tail;
  }
}