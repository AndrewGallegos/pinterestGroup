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
        header: 'h5'
    }
}