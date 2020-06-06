// call(), apply(), bind(), execution context, polyfill.io, normalize.css,  - de cautat


  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver, nameOfVehicle) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };
    var Car = new Vehicle('Andrei', 'Car');
    var Truck = new Vehicle('Andrei', 'Car');

    Truck.cargo = [];
    Truck.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    Truck.unloadCargo = function() {
      return this.cargo.pop();
    };
  
  console.log(Car);
  console.log(Truck);

//Ex 2

var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

let Trainer = function (subject) {
    this.subject = subject;
    this.teach = function () {
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}

Trainer.prototype = new Person();

let ovidiu = new Trainer('JS');
ovidiu.initialize('Ovidiu');
ovidiu.teach();

// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)

function Triangle(a, b, c) {
  this.a = a
  this.b = b
  this.c = c
  this.type = 'triunghi'
}
const forma = {
  getType: function () {
      return this.type
  }
}

Triangle.prototype = forma;
Triangle.prototype.constructor = Triangle;

let triunghi = new Triangle(15, 15, 18);
triunghi.getPerimeter = function () {
  return this.a + this.b + this.c
}

console.log(triunghi.constructor);
console.log(forma.isPrototypeOf(triunghi));
console.log(triunghi.getPerimeter());
console.log(triunghi.getType());
