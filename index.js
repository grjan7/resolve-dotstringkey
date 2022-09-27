'use strict';

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
    let isNonNullObject = typeof rootObject == 'object' && rootObject != null && !Array.isArray(rootObject);
    if (isNonNullObject) {
      let resolvedKeyValue = rootObject;
      if (dotStringKey) {
        let keyArray = dotStringKey.split(".");
        for (let key of keyArray) {
          resolvedKeyValue = resolvedKeyValue[key];
        }
      }
      return resolvedKeyValue;
    } else {
      throw new Error(`rootObject must be an object.`)
    }
  }
}

module.exports = resolveDotStringKey;