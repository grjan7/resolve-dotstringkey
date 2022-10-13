'use strict';

const extractKey = require('./extractKey');

const customSplit = (str) => {

  let splitArray = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "[") {
      end = i;
      if (end != 0) {
        splitArray.push(extractKey(str, start, end));
      }
      start = end;
    }
  }

  splitArray.push(extractKey(str, start, str.length));

  return splitArray;
}

module.exports = customSplit;