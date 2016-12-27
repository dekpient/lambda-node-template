'use strict';

let chai = require('chai');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));

global.sinon =  require('sinon');
global.proxyquire =  require('proxyquire');

global.chai = chai;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;