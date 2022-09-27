# resolve-dotstringkey

## Description

This package resolves stringified dot object notation (e.g., "person.address.city") to its value. 

> It will be useful in parsing and matching nested properties of object (e.g., `{"person.address.city": "New York"}` as in MongoDB queries).

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

  const person = {
    name: "John",
    age: 28,
    contact: {
      address: {city: "New York", state: "NY", country: "USA"},
      phone: "+1 00000 00000"
    } 
  }
```

```js 
  resolveKey(person, "name") // returns "John"
```

```js
  resolveKey(person, "contact.address.city") // returns "New York"
```

```js
  resolveKey(person) 
```
returns

```js
  {
    name: "John",
    age: 28,
    contact: {
      address: { city: "New York", state: "NY", country: "USA" },
      phone: "+1 00000 00000"
    } 
  }

```

