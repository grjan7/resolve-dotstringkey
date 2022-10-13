'use strict';

const resolveDotStringKey = require('./index.js');
let caseCount = 0;

(function () {

  console.log(`\nCase ${++caseCount}: rootObject is missing.\n`);

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

  console.log(`\nCase ${++caseCount}: rootObject must be an object.\n`);

  const result = {
    expected: 'rootObject must be an object or an array.',
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

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(person).\n`);

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

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(person, "name").\n`);

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

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(person, "address").\n`);

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

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(person, "address.city").\n`);

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

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(person, "address.state.code").\n`);

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

(function () {

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(persons, "[1].address.state.code").\n`);

  const persons = [{
    name: "Rakesh",
    age: 20,
    address: {
      city: "New Jersey",
      state: { code: "NJ", name: "New Jersey" },
      country: "USA"
    }
  },
  {
    name: "John",
    age: 42,
    address: {
      city: "New York",
      state: { code: "NY", name: "New York" },
      country: "USA"
    }
  }];

  const result = {
    expected: "NY",
    actual: (() => {
      try {
        return resolveDotStringKey(persons, "[1].address.state.code");
      } catch (e) {
        return e.message;
      }
    })()
  }

  console.log(result);
  console.log(JSON.stringify(result.expected) == JSON.stringify(result.actual) ? "\nPassed" : "\nFailed");
})();


(function () {

  console.log(`\nCase ${++caseCount}: resolveDotStringKey(persons, "[0].addresses[1].state.code").\n`);

  const persons = [{
    name: "Rakesh",
    age: 20,
    addresses: [{
      city: "New Jersey",
      state: { code: "NJ", name: "New Jersey" },
      country: "USA"
    },
    {
      city: "Philadelphia",
      state: { code: "PH", name: "Philadelphia" },
      country: "USA"
    }]

  },
  {
    name: "John",
    age: 42,
    addresses: [{
      city: "New York",
      state: { code: "NY", name: "New York" },
      country: "USA"
    }]
  }];

  const result = {
    expected: "PH",
    actual: (() => {
      try {
        return resolveDotStringKey(persons, "[0].addresses[1].state.code");
      } catch (e) {
        return e.message;
      }
    })()
  }

  console.log(result);
  console.log(JSON.stringify(result.expected) == JSON.stringify(result.actual) ? "\nPassed" : "\nFailed");
})();