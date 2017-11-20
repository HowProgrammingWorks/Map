'use strict';

class Dictionary {
  constructor() {
    this.map = Object.create(null);
  }
  set(key, value) {
    return this.map[key] = value;
  }
  get(key) {
    return this.map[key];
  }
  has(key) {
    return !!this.map[key];
  }
  delete(key) {
    delete this.map[key];
  }
  get size() {
    return Object.keys(this.map).length;
  }
  keys() {
    return Object.keys(this.map);
  }
  clear() {
    this.map = Object.create(null);
  }
}

// Usage

const cityPopulation = new Dictionary();

cityPopulation.set('Shanghai', 24256800);
cityPopulation.set('Beijing',  21516000);
cityPopulation.set('Delhi',    16787941);
cityPopulation.set('Lagos',    16060303);

cityPopulation.delete('Shanghai');

if (cityPopulation.has('Beijing')) {
  console.log('Beijing:', cityPopulation.get('Beijing'));
}

if (!cityPopulation.has('Shanghai')) {
  console.log('no data for Shanghai');
}

console.log('size:', cityPopulation.size);
console.log('keys:', cityPopulation.keys());
