class HolbertonClass {
  constructor (size, location) {
    // Initialize attributes with underscore versions
    this._size = size;
    this._location = location;
  }

  // Define the valueOf method to return the size when cast into a Number
  valueOf () {
    return this._size;
  }

  // Define the toString method to return the location when cast into a String
  toString () {
    return this._location;
  }
}

export default HolbertonClass;
