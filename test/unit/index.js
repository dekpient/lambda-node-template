'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
const expect = chai.expect;
const sinon =  require('sinon');
const proxyquire =  require('proxyquire');

const sample = require('sample');

describe('Index', () => {

  let sandbox, index, mockSample, callback;

  beforeEach(() => {
    // Creates stuff in a sandbox so it does not interfere with other tests
    sandbox = sinon.sandbox.create();
    mockSample = sandbox.mock(sample);
    callback = sandbox.spy();

    index = proxyquire('index', { './sample' : mockSample });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#handler', () => {
    it('calls the callback with good things', () => {
      mockSample.expects('good').twice().returns('GREAT');
      index.handler({}, {}, callback);
      expect(callback).to.have.been.calledWith(null, 'GREAT');
    });
  });
});