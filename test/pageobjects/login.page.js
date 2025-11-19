const Navigation = require('./navigation');

class LoginPage extends Navigation {

    get inputEmail() { return $('~input-email'); }
    get inputPassword() { return $('~input-password'); }
    get btnLogin() { return $('~button-LOGIN'); }
    get successMessage() { return $('android=new UiSelector().text("You are logged in!")'); }

    get invalidEmailMessage() { return $('android=new UiSelector().text("Please enter a valid email address")'); }
    get invalidPasswordMessage() { return $('android=new UiSelector().text("Please enter at least 8 characters")'); }

}

module.exports = new LoginPage();