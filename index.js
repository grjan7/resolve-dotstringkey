'use strict';

const keysArray = require('./lib/keysArray');
const isNonNullObject = require('./lib/isNonNullObject');


/**
 * 
 * @param {object} rootObject object to which dotted string keys to be resolved
 * @param {string} dotStringKey a string of object dot notation, e.g., "address.city.code"
 * @returns {any} value of the resolved key
 * 
 */
const resolveDotStringKey = (rootObject, dotStringKey) => {

  if (!rootObject) {
    throw new Error(`rootObject is missing.`)
  } else {
    if (isNonNullObject(rootObject)) {

      let resolvedKeyValue = rootObject;

      if (dotStringKey) {

        let keyArray = keysArray(dotStringKey);

        for (let key of keyArray) {
          resolvedKeyValue = resolvedKeyValue[key];
        }
      }
      return resolvedKeyValue;
    } else {
      throw new Error(`rootObject must be an object or an array.`)
    }
  }
}

module.exports = resolveDotStringKey;