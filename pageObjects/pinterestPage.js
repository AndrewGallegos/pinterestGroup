var commands = {
    clearSet: function (selector, data) {
        this.clearValue(selector)
        this.setValue(selector, data)
        return this
    }
}
module.exports = {
    url: 'https://www.pinterest.com/',
    commands: [commands],
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
        boardDropDown: {
            selector: '//div[@data-test-id="boardSelectionDropdown"]',
            locateStrategy: 'xpath'
        },
        createBoard: {
            selector: '(//*[@data-test-id="create-board"])[1]',
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
        profileButton: {
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
        bioHeader: '.BrioProfileHeaderWrapper',
        searchFirstSuggestion: '#SuggestionGroup-Option-0-0',
        //messaging
        messageMenuBtn: {
            selector: '//button[@aria-label="Messages"]',
            locateStrategy: 'xpath'
        },
        composeMessageBtn: {
            selector: '(//button[@aria-label="compose new message"])[1]',
            locateStrategy: 'xpath'
        },
        messageToField: {
            selector: '//input[@placeholder="Enter name or email"]',
            locateStrategy: 'xpath'
        },
        messageRecipient: {
            selector: '(//a[@role="button"])[1]',
            locateStrategy: 'xpath'
        },
        messageField: {
            selector: '//textarea[@placeholder="Add a message"]',
            locateStrategy: 'xpath'
        },
        sendMessageBtn: '[aria-label="Send message to conversation"]'
    }
}