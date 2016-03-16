# jquery-mouse-exit

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-mouse-exit"><img src="https://api.travis-ci.org/ianmcburnie/jquery-mouse-exit.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-mouse-exit?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-mouse-exit/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-mouse-exit"><img src="https://david-dm.org/ianmcburnie/jquery-mouse-exit.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-mouse-exit#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-mouse-exit/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that triggers a 'mouseExit' event only when the mouse
cursor has completely left the given element.

```js
// init plugin
$(collection).mouseExit();

// handle event
$(collection).on('mouseExit', function(e, data) {
    console.log(data.lostFocus, data.gainedFocus);
})
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

Please use the tilde range specifier in your package.json to pin to a fixed major and minor version.

## Install

<strike>
```
npm install @ebay/jquery-mouse-exit
```
</strike>

```js
npm install jquery-mouse-exit
```

**NOTE: The @ebay package scope is no longer supported. In order to receive latest NPM updates, please use the non-scoped version of this package.**

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` test driven development: watches code and re-tests after any change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to jshint.txt
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-mouse-exit

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-mouse-exit?branch=master
