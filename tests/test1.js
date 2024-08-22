const { fixture } = require("testcafe");

fixture("Getting started")
    .page("https://www.google.co.in/")

test('First test', async t => {
    await t
        .typeText('.gLFyf', 'test')
        .wait(2000)
});