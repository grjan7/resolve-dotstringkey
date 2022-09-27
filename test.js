'use strict';

const resolveDotStringKey = require('./index.js');

(function () {
  console.log('\nCase 1: rootObject is missing.\n');
  const result = {
    expected: 'rootObject is missing.',
    actual: (() => {
      try {
        return resolveDotStringKey();
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(result.expected == result.actual ? "\nPassed" : "\nFailed");
})();

(function () {
  console.log('\nCase 2: rootObject must be an object.\n');
  const result = {
    expected: 'rootObject must be an object.',
    actual: (() => {
      try {
        return resolveDotStringKey("person");
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(result.expected == result.actual ? "\nPassed" : "\nFailed");
})();


(function () {
  console.log('\nCase 3: resolveDotStringKey(person).\n');
  const person = {
    name: "John",
    age: 42,
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    }
  }
  const result = {
    expected: person,
    actual: (() => {
      try {
        return resolveDotStringKey(person);
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(JSON.stringify(result.expected) == JSON.stringify(result.actual) ? "\nPassed" : "\nFailed");
})();


(function () {
  console.log('\nCase 3: resolveDotStringKey(person, "name").\n');
  const person = {
    name: "John",
    age: 42,
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    }
  }
  const result = {
    expected: "John",
    actual: (() => {
      try {
        return resolveDotStringKey(person, "name");
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(result.expected == result.actual ? "\nPassed" : "\nFailed");
})();

(function () {
  console.log('\nCase 4: resolveDotStringKey(person, "address").\n');
  const person = {
    name: "John",
    age: 42,
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    }
  }
  const result = {
    expected: person.address,
    actual: (() => {
      try {
        return resolveDotStringKey(person, "address");
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(JSON.stringify(result.expected) == JSON.stringify(result.actual) ? "\nPassed" : "\nFailed");
})();


(function () {
  console.log('\nCase 5: resolveDotStringKey(person, "address.city").\n');
  const person = {
    name: "John",
    age: 42,
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    }
  }
  const result = {
    expected: "New York",
    actual: (() => {
      try {
        return resolveDotStringKey(person, "address.city");
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(JSON.stringify(result.expected) == JSON.stringify(result.actual) ? "\nPassed" : "\nFailed");
})();


(function () {
  console.log('\nCase 6: resolveDotStringKey(person, "address.state.code").\n');
  const person = {
    name: "John",
    age: 42,
    address: {
      city: "New York",
      state: { code: "NY", name: "New York" },
      country: "USA"
    }
  }
  const result = {
    expected: "NY",
    actual: (() => {
      try {
        return resolveDotStringKey(person, "address.state.code");
      } catch (e) {
        return e.message;
      }
    })()
  }
  console.log(result);
  console.log(JSON.stringify(result.expected) == JSON.stringify(result.actual) ? "\nPassed" : "\nFailed");
})();