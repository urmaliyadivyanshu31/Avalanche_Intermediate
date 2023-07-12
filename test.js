// Write some cool JS

const { test } = require('tap')
const { exec } = require('child_process')

test('test', t => {
    t.plan(2)
    exec('node index.js', (err, stdout, stderr) => {
        t.error(err)
        t.equal(stdout, 'Hello World\n')
    }
)})
