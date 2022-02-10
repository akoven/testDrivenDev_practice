class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `${this.name} welcome!`
  }
  visit(otherPerson) {
    return `${otherPerson} visited ${this.name}`
  }
  switchVisit(otherPerson) {
    this.visit(otherPerson)
  }
  update(obj) {
    if (!(obj instanceof 'Object')) {
      throw new TypeError('input is not an object')
    } else if (obj instanceof 'Object') {
      this.name = obj.name;
      this.age = obj.age;
    } else if (obj.name === undefined || obj.age === undefined) {
      throw new TypeError('object does not have property values')
    }
  }
  tryUpdate(obj) {
    return this.update(obj);
  }
  static greetAll(obj) {
    let newArr = [];
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];

      newArr.push(sayHello(element));

    }
    return newArr;
  }
}

module.exports = Person;