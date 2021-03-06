'use strict';

const sample = require('sample');

describe('Index', () => {

  let sandbox, index, mockSample, callback;

  beforeEach(() => {
    // Creates stuff in a sandbox so it does not interfere with other tests
    sandbox = sinon.sandbox.create();
    mockSample = sandbox.mock(sample);
    callback = sandbox.spy();

    index = proxyquire('handlers/index', { './sample' : mockSample });
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