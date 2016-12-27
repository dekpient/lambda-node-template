# AWS Lambda (NodeJS 4.3) Template

* [node-lambda](https://www.npmjs.com/package/node-lambda)
* mocha, chai, sinon, proxyquire
* node-version-checker
* eslint

## Scripts

* `npm run test -s` for running unit tests
* `npm run function` for running Lambda function locally. Set the name of the handler file by `--lambda-node-template:handler=myfunc`, defaults to `index`
* `npm run package` for packaging Lambda function into a zip file. Set the name of the handler file by `--lambda-node-template:handler=myfunc`, defaults to `index`
* `npm run clean` for cleaning the built artifacts

## NodeJS 4.3 Features

http://node.green/

## TODO

* Try `ava`, e.g. [PR](https://github.com/electron/windows-installer/pull/57/files)
* [Silent by default](https://github.com/npm/npm/issues/8821), set `alias npms='npm run -s'` for now