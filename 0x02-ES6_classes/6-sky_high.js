import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor (sqft, floors) {
    // Call the parent class constructor and pass the sqft attribute to it
    super(sqft);

    // Initialize attributes with underscore versions
    this._floors = floors;
  }

  // Getter for floors
  get floors () {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage () {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
