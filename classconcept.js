class Car {
  //let name; we can't define variable here directly.
  constructor(name, price, model, color) {
    this.name = name;
    this.price = price;
    this.model = model;
    this.color = color;
  }

  /*constructor(name){
    this.name = name;
    this.price = price;
    this.model = model;
    this.color = color;
  }*/
  refuel() {
    console.log(this.name + " car is refueled");
  }
}

//new keyword : to create an object. Reference can be stored in let or const variable.
const c1 = new Car("Audi", 1081, "YU9", "Black");
console.log(c1.name + " " + c1.price); //Audi 1081
c1.refuel(); //Audi car is refueled

const c2 = new Car("BMW", 20000, "H51", "Black");
console.log(c2.name + " " + c2.price); //BMW 20000
c2.refuel(); //BMW car is refueled

//const c3 = new Car("swift"); SyntaxError: A class may only have one constructor
