var pinFill = function (pinObjects, pinData) {
    pinObjects
        .waitForElementVisible('@controlPannel')
        .click('@searchBtn')
        .setValue('@searchBtn', [pinData.sea, pinObjects.api.Keys.ENTER])
        .click('@selectPicture')
        .click('@saveButton')
        .click('@createBoard')
        .setValue('@boardName', pinData.boa)
        .verify.valueContains('@boardName', pinData.boa)
        .click('@submitBoardBtn')
        .waitForElementVisible('@controlPannel')
        .pause(7000)
        .click('@profilePannel')
        .waitForElementVisible('@boardButton')
        .click('@boardButton')
        .waitForElementVisible('@newBoardSelect')
        .expect.element('@newBoardSelect').text.to.contain(pinData.boa)
        //teardown
    page.click('@newBoardSelect')
        .pause(500)
        .waitForElementVisible('@boardEditButton')
        .click('@boardEditButton')
        .pause(500)
        .click('@boardDeleteButton')
        .pause(500)
        .click('@boardConfirmDelete')
}
var pinData = {
    sea: 'Enamel Pins',
    boa: String(Math.random()*Math.ceil(99999999)) //random board name
}
var page;
module.exports = {
    before: browser => {
        page = browser.page.pinterestPage()
        page.resizeWindow(1366,768)
            .navigate()
    },
    after: function () {
        page.end()
    },
    'Login': browser => {
        var credentials = {
            name: 'Barbara',
            email: 'pinterest.test.email@gmail.com',
            password: 'timtp123'
        }
        //click 'Login with Google' button and switch to the new window
        page.waitForElementVisible('@googleBtn')
            .click('@googleBtn')
            .pause(500)
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
            .expect.element('@profilePannel').text.to.contain('Barbara')
    },
    'Create Board Test': function() {
        // pinData.forEach(test => {
        //     pinFill(pinObjects, test)
        // })
        pinFill(page, pinData)
    },
    // 'Delete Board Test': function() {

    // }
}