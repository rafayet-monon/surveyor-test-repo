const {danger, fail, message, warn, markdown} =  require("danger")
const fs = require("fs")

// fail("This is a failure message")
// warn("This is a warning")
// message("This is a normal message")
// markdown("*Markdown* is also **supported**")

// const { additions = 0, deletions = 0 } = danger.github.pr
// message(`:tada: The PR added ${additions} and removed ${deletions} lines.`)

const testFile = "eslint-output.log"
const linterOutput = fs.readFileSync(testFile).toString()

if (linterOutput.includes('Error')) {
  fail('ES Lint did not pass');
  markdown(`These changes failed to pass the ES Lint:
${linterOutput}
  `)
}
