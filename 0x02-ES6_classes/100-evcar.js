import Car from './10-car.js';

class EVCar extends Car {
  constructor (brand, motor, color, range) {
    // Call the constructor of the parent class (Car)
    super(brand, motor, color);

    // Initialize the EVCar-specific attribute with an underscore version
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar () {
    // Create a new Car instance and copy the attributes from the current instance
    const newCar = new Car(this._brand, this._motor, this._color);
    return newCar;
  }
}

export default EVCar;
