'use strict';

const sample = require('sample');

describe('Sample', () => {
  describe('#good', () => {
    it('returns good things', () => {
      let things = sample.good();
      expect(things).to.equal('good things');
    });
  });

  describe('#pinkyPromise', () => {
    it('loves truthy values', () => {
      return sample.pinkyPromise('dekpient').then((data) => {
        expect(data).to.equal('dekpient');
      });
    });

    it('hates falsy values', () => {
      let promise = sample.pinkyPromise(undefined);
      return expect(promise).to.be.rejectedWith('Falsy!');
    });
  });
});