class Airport {
  constructor (name, code) {
    // Initialize attributes with underscore versions
    this._name = name;
    this._code = code;
  }

  // Custom toString method to return the airport code
  toString () {
    return `[${this._code}]`;
  }
}

export default Airport;
