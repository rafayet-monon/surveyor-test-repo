const {danger, fail, message, warn, markdown} =  require("danger")
const fs = require("fs")
const jest = require('danger-plugin-jest/dist/index.js')
const path = require('path')

// fail("This is a failure message")
// warn("This is a warning")
// message("This is a normal message")
// markdown("*Markdown* is also **supported**")

// const { additions = 0, deletions = 0 } = danger.github.pr
// message(`:tada: The PR added ${additions} and removed ${deletions} lines.`)
jest.default();
const testFile = "eslint-output.log"
const linterOutput = fs.readFileSync(testFile).toString()

if (linterOutput.includes('Error')) {
  fail('ES Lint did not pass');
}
