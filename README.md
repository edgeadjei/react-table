# @edgesyntax/react-table
A flexible and performant table component for react

[![NPM](https://nodei.co/npm/@edgesyntax/react-table.png)](https://npmjs.org/package/@edgesyntax/react-table)

## Live Playground

For examples of the @edgesyntax/react-table in action, go to [storybook](https://edgesyntax.github.io/react-table)

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:6006/

## Getting Started

# Install
NPM 
```
npm install @edgesyntax/react-table --save
```
Yarn
```
yarn add @edgesyntax/react-table
```

# Usage
____
```js
import React from "react";
import ReactDOM from 'react-dom';
import Table from "@edgesyntax/react-table";

ReactDOM.render(
  <Table
  data={[
    { "name": "Raquel Wooten", "email": "raquelwooten@ecraze.com", "registered": "2015-02-23T12:56:54 +06:00", "latitude": 86.017882, "longitude": -80.094174 },
    { "name": "Diaz Barlow", "email": "diazbarlow@gazak.com", "registered": "2015-07-15T10:57:26 +05:00", "latitude": -82.476876, "longitude": 134.539503 },
    { "name": "Traci Wiggins", "email": "traciwiggins@geologix.com", "registered": "2016-07-01T09:53:59 +05:00", "latitude": -16.153468, "longitude": 147.007858 },
    { "name": "Ferguson Head", "email": "fergusonhead@comtext.com", "registered": "2015-05-07T05:12:18 +05:00", "latitude": -18.389837, "longitude": 123.649699 },
    { "name": "Audra Callahan", "email": "audracallahan@homelux.com", "registered": "2015-06-15T04:39:44 +05:00", "latitude": 32.395529, "longitude": -140.60243 }
  ]}/>,
  document.getElementById('app')
)

```
