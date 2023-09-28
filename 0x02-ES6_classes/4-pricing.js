import Currency from './3-currency.js';

class Pricing {
  constructor (amount, currency) {
    // Verify the type of the currency attribute
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }

    // Initialize attributes with underscore versions
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount () {
    return this._amount;
  }

  // Setter for amount
  set amount (newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency () {
    return this._currency;
  }

  // Setter for currency
  set currency (newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = newCurrency;
  }

  // Method to display the full price format
  displayFullPrice () {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice (amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
