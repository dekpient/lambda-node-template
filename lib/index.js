'use strict';

const sample = require('sample');

exports.handler = (event, context, callback) => {
  console.log( "Running index.handler" );
  console.log( "==================================");
  console.log( "event", sample.good() );
  console.log( "==================================");
  console.log( "Stopping index.handler" );
  callback(null, sample.good());
}