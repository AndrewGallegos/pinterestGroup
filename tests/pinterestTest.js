var loginGoogle = function (credentials) {
    //click 'Login with Google' button and switch to the new window
    page.waitForElementVisible('@googleBtn')
        .click('@googleBtn')
        .pause(500)
        .api.windowHandles(function (result) {
            page.switchWindow(result.value[1])
        })
    //wait for new email input to be visible, then input email and press enter
    page.waitForElementVisible('@emailInput', 10000)
        .setValue('@emailInput', credentials.email)
        .api.keys(page.api.Keys.ENTER)
    //wait for page switch animation to play, then input password and press enter
    page.pause(1000)
        .setValue('@passInput', credentials.password)
        .api.keys(page.api.Keys.ENTER)
    page.api.windowHandles(function (result) {
        page.switchWindow(result.value[0])
    })
    //after switching back to original window, wait for main page to load and then run assertion
    page.waitForElementVisible('@mainPage')
        .expect.element('@profilePannel').text.to.contain('Barbara')
}
var pinFill = function (pinObjects, pinData) {
    pinObjects
        .waitForElementVisible('@controlPannel')
        .setValue('@searchBtn', [pinData.search, pinObjects.api.Keys.ENTER])
        .click('@firstPost')
        .click('@saveButton')
        .click('@createBoard')
        .setValue('@boardName', pinData.boardName)
        .verify.valueContains('@boardName', pinData.boardName)
        .click('@submitBoardBtn')
        .waitForElementVisible('@controlPannel')
        .pause(7000)
        .click('@profilePannel')
        .waitForElementVisible('@boardButton')
        .click('@boardButton')
        .waitForElementVisible('@newBoardSelect')
        .expect.element('@newBoardSelect').text.to.contain(pinData.boardName)
    //teardown
    //select the new board, click the edit button, delete, and confirm
    page.click('@newBoardSelect')
        .pause(500)
        .waitForElementVisible('@boardEditButton')
        .click('@boardEditButton')
        .pause(500)
        .click('@boardDeleteButton')
        .pause(500)
        .click('@boardConfirmDelete')
        .pause(1000)
}
var changeInfo = function (data) {
    page.click('@dotButton')
        .click('@editSettings')
        .waitForElementVisible('@firstNameInput')
        .click('@dotButton')
        .clearSet('@firstNameInput', data.firstName)
        .clearSet('@lastNameInput', data.lastName)
        //.clearSet('@locationInput', data.location)
        .click('@settingsDoneButton')
        .pause(4000)
        .click('@profilePannel')
        .expect.element('@bioHeader').text.to.contain(data.firstName + " " + data.lastName)
}
var pinData = {
    search: 'Enamel Pins',
    boardName: String(Math.ceil(Math.random() * Math.pow(10, 8))) //random board name
}
var page;
module.exports = {
    before: browser => {
        page = browser.page.pinterestPage()
        page.resizeWindow(1366, 768)
            .navigate()
    },
    after: function () {
        page.end()
    },
    'Login': function () {
        var credentials = {
            name: 'Barbara',
            email: 'pinterest.test.email@gmail.com',
            password: 'timtp123'
        }
        loginGoogle(credentials)
    },
    'Create Board Test': function () {
        pinFill(page, pinData)
    },
    'Change Name Test': function () {
        var newInfo = {
            firstName: 'Melissa',
            lastName: 'McCarthy',
            location: 'Turkey'
        }
        changeInfo(newInfo)
        //teardown
        var oldInfo = {
            firstName: 'Barbara',
            lastName: 'Crusty',
            location: 'Mississippi'
        }
        changeInfo(oldInfo)
    }
}