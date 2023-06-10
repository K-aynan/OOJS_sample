// Classe de abstração
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    throw new Error('O método makeSound deve ser implementado nas subclasses.');
  }

  introduce() {
    console.log(`Eu sou ${this.name} e tenho ${this.age} anos.`);
  }
}

// Classes que herdam da classe abstrata
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    console.log('Au Au!');
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  makeSound() {
    console.log('Miau!');
  }
}

// Instâncias de objetos
const dog1 = new Dog('Max', 3, 'Labrador');
const cat1 = new Cat('Luna', 2, 'Branca');
const dog2 = new Dog('Buddy', 5, 'Golden Retriever');

dog1.introduce(); 
dog1.makeSound(); 
cat1.introduce();  
cat1.makeSound(); 
dog2.introduce();  
dog2.makeSound(); 
