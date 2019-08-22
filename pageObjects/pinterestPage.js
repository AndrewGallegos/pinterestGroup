var generalCommands = {
    clearSet: function (selector, data) {
        this.clearValue(selector)
        this.setValue(selector, data)
        return this
    }
}
var pageCommands = {
    loginGoogle: function (credentials) {

    }
}
module.exports = {
    url: 'https://www.pinterest.com/',
    commands: [generalCommands, pageCommands],
    elements: {
        //pinterest login page
        googleBtn: 'button.GoogleConnectButton',
        //google login page
        emailInput: 'input[type=email]',
        passInput: 'input[type=password]',
        //pinterest homepage
        mainPage: '.appContent',
        header: 'h5',
        searchBtn: 'input[type=text]',
        firstPost: {
            selector: '(//*[@data-grid-item="true"])[1]',
            locateStrategy: 'xpath'
        },
        saveButton: {
            selector: '(//div[@class="Jea gjz zI7 iyn Hsu"])[3]',
            locateStrategy: 'xpath'
        },
        createBoard: {
            selector: '//*[@data-test-id="createBoardButton"]',
            locateStrategy: 'xpath'
        },
        boardName: {
            selector: '//input[@class="wyq iyn Hsu aZc tBJ dyH iFc SMy yTZ L4E edc pBj qJc fgH"]',
            locateStrategy: 'xpath'
        },
        submitBoardBtn: '[type=submit]',
        controlPannel: {
            selector: '//div[@data-test-id= "button-container"]',
            locateStrategy: 'xpath'
        },
        profilePannel: {
            //selector: '(//*[@data-test-id="button-container"])/*[3]',
            selector: '(//div[@class="Jea gjz hA- hs0 mQ8 wYR zI7 iyn Hsu"])[3]',
            locateStrategy: 'xpath'
        },
        boardButton: {
            selector: '//*[@role="tab"][1]',
            locateStrategy: 'xpath'
        },
        newBoardSelect: {
            selector: '(//div[@class= "Mhr Zr3 sLG zI7 iyn Hsu"])[1]',
            locateStrategy: 'xpath'
        },
        boardEditButton: 'button[aria-label="Edit board"]',
        boardDeleteButton: '[data-test-id="deleteBoardButton"]',
        boardConfirmDelete: '[data-test-id="confirmBoardDelete"]',
        firstFollowButton: {
            selector: '(//*[text()="Follow"])[1]',
            locateStrategy: 'xpath'
        },
        dotButton: {
            selector: '//button[@aria-label="Settings and more options related to your account"]',
            locateStrategy: 'xpath'
        },
        editSettings: {
            selector: '(//div[@class="C9q Fje Jea Shl jzS ujU zI7 iyn Hsu"])[2]',
            locateStrategy: 'xpath'
        },
        firstNameInput: {
            selector: '//input[@name="first_name"]',
            locateStrategy: 'xpath'
        },
        lastNameInput: {
            selector: '//input[@name="last_name"]',
            locateStrategy: 'xpath'
        },
        locationInput: {
            selector: '//input[@name="location"]',
            locateStrategy: 'xpath'
        },
        settingsDoneButton: '[data-test-id="done-button"]',
        bioHeader: '.BrioProfileHeaderWrapper'
    }
}