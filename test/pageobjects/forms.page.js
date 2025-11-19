const Navigation = require('./navigation');

class FormPage extends Navigation {
    get inputText() { return $('~text-input'); }
    get inputTextResult() { return $('~input-text-result'); }
    get activeButton() { return $('~button-Active'); }

    get activeButtonMessage() { return $('android=new UiSelector().text("This button is active")'); }
    
}

module.exports = new FormPage();