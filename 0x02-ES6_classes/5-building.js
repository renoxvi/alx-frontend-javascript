class Building {
  constructor (sqft) {
    // Initialize attributes with underscore versions
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft () {
    return this._sqft;
  }

  // Abstract method, to be implemented by subclasses
  evacuationWarningMessage () {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
