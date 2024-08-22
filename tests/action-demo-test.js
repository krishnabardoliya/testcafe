fixture('Actions Demo tests')
    .page('https://trytestingthis.netlify.app/');

test('TestCafe Actions', async t => {

    await t
        /* click */
        .click('body > div.navbar > a:nth-child(1)')
        .wait(1000)
        .click('body > div.navbar > a:nth-child(2)')
        .wait(1000)

        /* type text */
        .typeText('#fname', 'Krishna')
        .wait(1000)

        /* double click */
        .doubleClick('body > div.row > div.side.ex1 > button')
        .wait(1000)

        /* right click */
        .rightClick('#fname')
        // .expect(Selector('#cell-popup-menu').exists).notOk()
        .wait(1000)

        /* Hover */
        .hover('body > div.row > div.side.ex1 > div.tooltip')
        .wait(1000)

        /* Drag n Drop */
        .dragToElement('#drag1', '#div1')
        .wait(2000)

        /* Scroll to Element */
        .scrollIntoView('body > div.footer > h4:nth-child(4) > a')
        .wait(2000)

        /* Alert or Pop-up */
        .setNativeDialogHandler(() => true)
        .click('body > div.row > div.side.ex1 > div.pop-up-alert > button')
        .wait(2000)

        /* Screenshot */
        .takeScreenshot('screenshot1.png')

})