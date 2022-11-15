class RentCompany {
  constructor(name) {
    this.name = name;
    this.cars = [];
  }
  addCar(carObject) {
    this.cars.push(carObject);
    console.log(carObject.name + " has been added to " + this.name);
  }
  removeCar(carObject) {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i] == carObject) {
        this.cars.splice(i, 1);
        return console.log(
          carObject.name + " has been removed from " + this.name
        );
      } else if (i == this.cars.length - 1) {
        console.log(carObject.name + " is not in the list.");
      }
    }
  }
}

class Car { //אנקפסולציה//
  #licenseNumber; //אבסטרקציה//
  constructor(name, year, licenseNumber, color, milage) {
    this.name = name;
    this.year = year;
    this.#licenseNumber = licenseNumber;
    this.color = color;
    this.milage = milage;
    this.status = true;
  }
}

class User {
  constructor(name, creditCard) {
    this.name = name;
    this.creditCard = creditCard;
    this.car = "noCar";
  }
  rentCar(carObject) {
    if (carObject.status == true) {
      this.car = carObject;
      carObject.status = false;
      console.log(this.name + " has successfully rented " + carObject.name);
    } else {
      console.log("car unavailable");
    }
  }
  returnCar() {
    if (this.car == "noCar") {
      return console.log(this.name + " has no car to return");
    } else {
      this.car.status = true;
      let carName = this.car.name;
      this.car = "noCar";
      console.log(carName + " has successfully returned");
    }
  }
}

class CarSaleCompany extends RentCompany {  //ירושה//
  constructor(name) {
    super(name);
  }
  addCar(carObject) {  //פולימורפיזם//
    let d = new Date();
    let year = d.getFullYear();
    if (carObject.year < year - 3) {
      this.cars.push(carObject);
      console.log(carObject.name + " has been added to " + this.name);
    } else {
      console.log('car not for sale')
    }
  }
}
//טסטים//
let avis = new RentCompany("avis");
let albar = new RentCompany("albar");
let car1 = new Car("ferari", 2021, "111-11-111", "red", 11111);
let car2 = new Car("mustang", 2018, "222-22-222", "black", 22222);
let car3 = new Car("corvet", 2021, "333-33-333", "yellow", 33333);
let car4 = new Car("hammer", 2021, "444-44-444", "green", 44444);
let car5 = new Car("lamborghini", 2021, "555-55-555", "purple", 55555);
avis.addCar(car1);
avis.addCar(car2);
avis.addCar(car3);
albar.addCar(car4);
albar.addCar(car5);
console.log(avis);
console.log(albar);
avis.removeCar(car1);
avis.removeCar(car1);
avis.addCar(car1);
let user1 = new User("moshe", "123456789");
let user2 = new User("osnat", "987654321");
user1.rentCar(car1);
user1.rentCar(car1);
user1.returnCar(car1);
user1.returnCar(car1);
let calAuto = new CarSaleCompany("calAuto");
calAuto.addCar(car1);
calAuto.addCar(car2);