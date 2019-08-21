var page;
module.exports = {
    before: browser => {
        page = browser.page.pinterestPage()
        page.navigate()
    },
    // after: function () {
    //     page.end()
    // },

    'Login': browser => {
        var credentials = {
            name: 'Barbara',
            email: 'pinterest.test.email@gmail.com',
            password: 'timtp123'
        }
        //click 'Login with Google' button and switch to the new window
        page.waitForElementVisible('@googleBtn')
            .click('@googleBtn')
            .api.windowHandles(function (result) {
                page.switchWindow(result.value[1])
            })
        //wait for new email input to be visible, then input email and press enter
        page.waitForElementVisible('@emailInput')
            .clearSet('@emailInput', credentials.email)
            .api.keys(browser.Keys.ENTER)
        //wait for page switch animation to play, then input password and press enter
        page.pause(1000)
            .clearSet('@passInput', credentials.password)
            .api.keys(browser.Keys.ENTER)
        page.api.windowHandles(function (result) {
            page.switchWindow(result.value[0])
        })
        //after switching back to original window, wait for main page to load and then run assertion
        page.waitForElementVisible('@mainPage')
            .expect.element('@header').text.to.contain('Barbara')
    }
}