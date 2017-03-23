//note - and example

// JavaScript objects can be created in a few diﬀerent ways, the simplest is the object literal:
// var myCar = {   brand: "Prius",   wheels: 4 } // More on accessing attributes later on // but here's a simple
// example
// myCar.brand >>"Prius
// var myCar = {
// brand: "Prius",
// wheels: 4 }

// More on accessing attributes later on // but here's a simple example myCar.brand >>"Prius"

//ex:

// var person = {
//   hair: "curly",
//   eyecolor: "dark brown",
//   height: "5'3",
//   weight: "212",
// }
// console.log(person.hair);

// var khayyam = {
//   hair: "light brown",
//   eyecolor: "hazel",
//   height: "5'9",
//   weight: "135",
// }
// console.log(khayyam.weight);


//
//
// var user = {
//   name: "starfruit",
//   email: "starfruit@aol.com",
//   password: "your password",
// }
// console.log(user.email);
//
// function employee(name, birthday, email, id) {
//   this.name = name,
//   this.brithday = birthday,
//   this.email = email,
//   this.id = id
//
// }
// var Khayyam = new employee("Khayyam", "12/17/2000", "khayyam@gmail.com", 1217)
// var adam = new employee("Adam", "08/28/1971", "adam@gmail.com", 0828),
//
// console.log(employee.id);
// console.log(khayyam.id);

// var employeelist = [name, birthday, email, id]



//method
// var car = {
//   brand: "Honda",
//   friendlyBrand: function () {
//     retunn "This car brand is" +  this.brand
//   }
// }
// console.log(car.friendlyBrand());

//creata contr. method

// function Table(color, legs, material, size) {
//   this.color = color,
//   this.legs = legs,
//   this.material = material,
//   this.size = size
// }
//
// var color = new Table("red", 6, "pine", "5'1")
// var legs = new Table("yellow", 12, "cedar", "6'1")
//
// console.log(color.legs);
//
// var Table = {
//   design: "Vintage",
//   Shape: function() {
//     return "This is a red wood" + this.design
//   }
// }
//
// console.log(Table.Shape());
//
// //ex: method
// // var woodtype = qaerySelector("#woodtype")
// // woodtype.innerhtml = Table.shape()
//
// //Prototype example:
//
// //blueprint
//
// function StructuredCar(brand, wheels) {
//   this.brand = brand
//   this.wheels = wheels
// }



// /today lesson: creating object constructor

// function Animal(gender, age, species) {
//   this.gender = gender
//   this.age = age
//   this.species = species
// }
// var
// //if you want to store an array you must have this//
// function Farm() {
//   this.Animals = []
//
// //Prototype
//   Farm.Prototype.addAnimal = function (animal) {
//     //array//
//     this.animals.push(animal)
//   }
//
// }
// //create the objest//(define the objects)
// var horse = new Animal("female", 10, "horse")
// var cow = new Animal("female", 17, "cow")
// var farm = new farm('')
//
// //using object method
// farm.addAnimal(horse)
// farm.addAnimal(cow)
//
// console.log(farm);


//example
function Animal(gender, age, species) {
  this.gender = gender
  this.age = age
  this.species = species
}

function Mammal(gender, age, species) {
  this.gender = gender
  this.age = age
  this.species = species
  this.warmblooded = true
}
Animal.Prototype.displayAllinfo = function() {
  return this.gender + ":" this.age + ":" this.species
}

Mammal.Prototype = Objest.create(Animal.Prototype)

function Reptile(gender, age, species) {
  this.gender = gender
  this.age = age
  this.species = species
  this.warmblooded = false

  //create a Prototype//from line 37
  function Mammal(gender, age, species) {
    //invokes (calls)the animal function constructor
    Animal.call(this, gender, age, species)

    this.warmblooded = true
  }
var
//if you want to store an array you must have this//
 function Farm() {
  this.Animals = [color]

//Prototype
  Farm.Prototype.addAnimal = function (animal) {
    //array//
    this.animals.push(animal)
  }

}
//create the objest//(define the objects)
var horse = new Animal("female", 10, "horse")
var cow = new Animal("female", 17, "cow")
var farm = new farm('')

var mammal = new Mammal("male", 13, "dolphin")
var reptile = new Reptile("male", 13, "gecko")

//using object method
farm.addAnimal(horse)
farm.addAnimal(cow)

console.log(Mammal, Reptile);
console.log(mammal.displayAllinfo);
