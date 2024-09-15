//1. Object literals: using {}
const user = {
  name: "Michael",
  age: 25,
  country: "USA",
  occupation: "Engineer",
};
console.log(user.name); //Michael
console.log(user.occupation); //Engineer

//2. Constructor Function: this holds the instance
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const c1 = new Car("BMW", "520d", 10000);
const c2 = new Car("Audi", "Q7", 15000);
console.log(c1.brand + " " + c1.price); //BMW 10000
console.log(c2.brand + " " + c2.price); //Audi 15000

//3. Class Style Constructor:
class Customer {
  constructor(name, product) {
    this.name = name;
    this.product = product;
  }

  addToCart() {
    console.log(`${this.name}'s ${this.product} added to cart`);
  }
}

const cust1 = new Customer("Sakshi", "sunscreen");
console.log(cust1.name + " purchased " + cust1.product); //Sakshi purchased sunscreen
cust1.addToCart(); //Sakshi's sunscreen added to cart

//4. Object.create(): with some prototype. Object is an interface
const employeePrototype = {
  printInfo: function () {
    console.log(`Hello employee name is ${this.name}`);
  },
};

const e1 = Object.create(employeePrototype); //Object is an interface. creates an object from an existing object.
e1.name = "Meg";
e1.printInfo(); //Hello employee name is Meg

//5. Using factory function: returns an object. This is not representing any instance
function createDept(deptName, hod) {
  return {
    deptName: deptName,
    hod: hod,
    getDeptInfo: function () {
      console.log(
        `Hello department name is ${this.deptName} and hod is ${this.hod}`
      );
    },
  };
}
const d1 = createDept("physics", "Ramesh");
const d2 = createDept("Maths", "R C Sharma");
d1.getDeptInfo(); //Hello department name is physics and hod is Ramesh
d2.getDeptInfo(); //Hello department name is Maths and hod is R C Sharma

console.log(d1.deptName + " " + d1.hod); //physics Ramesh
