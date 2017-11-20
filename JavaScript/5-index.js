'use strict';

const fs = require('fs');

const getDataset = (file) => {
  const lines = fs.readFileSync(file).toString().split('\n');
  lines.shift();
  lines.pop();
  return lines.map(line => line.split(','));
};

const buildIndex = (ds, col) => {
  const index = new Map();
  for (const record of ds) {
    index.set(record[col], record);
  }
  return index;
};

// Usage

const dataset = getDataset('./cities.dat');
const byName = buildIndex(dataset, 0);
const byPopulation = buildIndex(dataset, 1);

const delhi = byName.get('Delhi');
console.log(delhi);

const record = byPopulation.get('21516000');
console.log(record);
