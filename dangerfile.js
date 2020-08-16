const {danger, fail, message, warn, markdown} =  require("danger")
const fs = require("fs")
const jest = require('danger-plugin-jest/dist/index.js')
const stylelint = require('danger-plugin-stylelint')


const esLintFile = "eslint-output.json";
const esLinterOutput = fs.readFileSync(esLintFile).toString();
const esLintJson = JSON.parse(esLinterOutput);
console.log(esLintJson)
if (Object.keys(esLintJson).length !== 0) {
  fail('ES Lint did not pass');
}

jest.default();
stylelint.default();
