var commands = {
    clearSet: function(selector, data){
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
        mainPage:'.appContent',
        header: 'h5',
        searchBtn: {
            selector: '//input[@type="text"]',
            locateStrategy: 'xpath'
        },
        selectPicture: {
            selector: '(//div[@class="MIw QLY Rym ojN p6V zI7 iyn Hsu"])[6]',
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
        submitBoardBtn: {
            selector: '//button[@class="RCK Hsu mix Vxj aZc GmH adn Il7 Jrn hNT iyn BG7 NTm KhY"]',
            locateStrategy: 'xpath'
        },
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
        boardConfirmDelete: '[data-test-id="confirmBoardDelete"]'
    }
}