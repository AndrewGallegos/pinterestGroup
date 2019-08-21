var pinFill = function (pinObjects, pinInfo) {
    pinObjects
    .waitForElementVisible('@controlPannel')
    .click('@searchBtn')
    .setValue('@searchBtn', [pinInfo.sea, browser.Keys.ENTER])
    .click('@selectPicture')
    .click('@saveButton')
    .click('@createBoard')
    .setValue('@boardName', pinInfo.boa)
    .verify.valueContains('@boardName', "Pins on Pins")
    .click('@submitBoardBtn')
    .waitForElementVisible('@controlPannel')
    .click('@profilePannel')
    .waitForElementVisible('@boardButton')
    .click('@boardButton')
    .waitForElementVisible('@newBoardSelect')
    .verify.valueContains('@newBoardSelect')
    .click('@newBoardSelect')
    .verify.valueContains('@selectPicture')
 }
 var pinData =[
    {
        sea: 'Enamel Pins',
        boa: 'Pins on Pins'
    },
 ]
 var pinObjects = {}
 module.exports = {
    beforeEach: browser =>{
        pinObjects = browser.page.pinterest()
        //pinObjects.navigate()
    },
    after: browser => {
        pinObjects.end()
    },
    'Create Board Test': browser => {
        pinData.forEach(test => {
            pinFill(pinObjects, test)
        })
    }
 }