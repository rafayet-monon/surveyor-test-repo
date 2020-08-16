const {danger, fail, message, warn, markdown} =  require("danger")

const fs = require("fs")

const testFile = "eslint-output.log"
const linterOutput = fs.readFileSync(testFile).toString()

if (!linterOutput.includes('0 Errors')) {
  fail('ES Lint did not pass');
  markdown(`These changes failed to pass the linter:
${linterOutput}
  `)
}
