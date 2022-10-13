'use strict';

const isNonNullObject = (obj) => typeof obj == 'object' && obj != null;

module.exports = isNonNullObject;