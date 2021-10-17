class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.greet = () => {
      console.log("Hello world");
    };
    this.introduce = () => {
      console.log(`Hi, I'm ${name}`);
    };
  }
}

const person1 = new Person("Jake", "33", "Somewhere in the world");

console.log(`person1 data:`, person1);

person1.greet();
person1.introduce();
