'use strict';

const customSplit = require('./customSplit');

const keysArray = (str) => {

  const dotSplit = str.split(".");
  let keyArr = [];

  for (let i of dotSplit) {
    keyArr = keyArr.concat(customSplit(i));
  }

  return keyArr;
}

module.exports = keysArray;
