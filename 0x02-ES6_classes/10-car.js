const uniqueProperty = Symbol();

class Car {
  constructor (brand, motor, color) {
    // Initialize attributes with underscore versions
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Create a unique property for each instance
    this[uniqueProperty] = true;
  }

  // Method to clone a car
  cloneCar () {
    // Create a new object of the same class and copy the attributes
    const newCar = new this.constructor(this._brand, this._motor, this._color);
    newCar[uniqueProperty] = this[uniqueProperty];
    return newCar;
  }
}

export default Car;
