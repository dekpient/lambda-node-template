'use strict';

exports.good = () => {
  return 'good things';
};

exports.pinkyPromise = (thing) => {
  if (thing) {
    return Promise.resolve(thing);
  } else {
    return Promise.reject('Falsy!');
  }
};