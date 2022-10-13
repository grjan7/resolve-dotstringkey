'use strict';

const extractKey = (str, start, end) => {

  let key = str.slice(start, end);
  key = key.match(/^\[\d+\]$/g)?.length == 1 ? JSON.parse(key)[0] : key;

  return key;
}

module.exports = extractKey;