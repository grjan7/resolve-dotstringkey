# resolve-dotstringkey

## Description

This package resolves stringified dot object notation (e.g., "person.address.city") to its value. 

> It will be useful in parsing and matching nested properties of object (e.g., `{"person.address.city": "New York"}` as in MongoDB queries).

> Note: use square bracket notation for array indexes and dot notation for object properties. e.g. `addresses[1].city`. 

## Installation

```sh
$ npm i resolve-dotstringkey
```
## Usage

### resolveDotStringKey(rootObject, dottedString)

  - **rootObject** | datatype: object | default: none | required
  - **dottedString** | datatype: string | default: none | required
  - **returns** | datatype: any 

#### Examples:

```js
  const resolveKey = require("resolve-dotstringkey");

  const persons = [{
    name: "John",
    age: 28,
    contacts: [{
      address: { city: "New York", state: "NY", country: "USA" },
      phone: "+1 20000 50000"
    },
    {
      address: { city: "New Jersey", state: "NJ", country: "USA" },
      phone: "+1 21421 41254"
    }] 
  },
  {
    name: "Robin",
    age: 40,
    contacts: [{
      address: { city: "New York", state: "NY", country: "USA" },
      phone: "+1 21426 41255"
    }] 
  }]
```

##### Case 1:

```js 
  resolveKey(persons, "[0].name") // returns "John"
```
##### Case 2:

```js
  resolveKey(persons, "[0].contacts[1].address.city") // returns "New Jersey"
```
##### Case 3:

```js
  resolveKey(persons, "[0].contacts") 
```
returns

```js

  [
    {
      address: { city: "New York", state: "NY", country: "USA" },
      phone: "+1 20000 50000"
    },
    {
      address: { city: "New Jersey", state: "NJ", country: "USA" },
      phone: "+1 21421 41254"
    }
  ]

```
##### Case 4:

```js
  resolveKey(persons) 
```
returns

```js
  [{
    name: "John",
    age: 28,
    contacts: [{
      address: { city: "New York", state: "NY", country: "USA" },
      phone: "+1 20000 50000"
    },
    {
      address: { city: "New Jersey", state: "NJ", country: "USA" },
      phone: "+1 21421 41254"
    }] 
  },
  {
    name: "Robin",
    age: 40,
    contacts: [{
      address: { city: "New York", state: "NY", country: "USA" },
      phone: "+1 21426 41255"
    }] 
  }]

```

