# 7Shifts Takehome

Language: Javascript (nodejs v14.0.0)

## Installation

- Clone the repo
- `npm install`

Then you can `npm run test` to see the output as it currently works.

## Problem description

> string-calculator.js

- `add` receives a string of the form `“//[delimiters]\n[delimiter separated numbers]”`.
- It then adds the non-negative numbers less than 1000.
- Multiple delimiters may be separated by commas ','
- Delimiters may be of any length
- Numbers over 1000 are ignored
- Negative numbers cause an error to be thrown
