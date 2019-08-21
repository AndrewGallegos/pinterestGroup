module.exports = {
    url: 'https://www.pinterest.com/',
    elements: {
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
            selector: '(//div[@class="Eqh Jea gjz qJc zI7 iyn Hsu"])',
            locateStrategy: 'xpath'
        },
        boardName: {
            selector: '//input[@name="boardName"]',
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
            selector: '(//img[@class= "hCL kVc L4E MIw"])[1]',
            locateStrategy: 'xpath'
        },
        boardButton: {
            selector: '(//div[@class="tBJ dyH iFc SMy yTZ pBj DrD IZT mWe"])[1]',
            locateStrategy: 'xpath'
        },
        newBoardSelect: {
            selector: '(//div[@class= "Mhr Zr3 sLG zI7 iyn Hsu"])[1]',
            locateStrategy: 'xpath'
        }
    }
} 