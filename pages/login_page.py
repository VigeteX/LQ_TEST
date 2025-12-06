import random

class LoginPage:
    def __init__(self, page):
        self.page = page

        self.login_title = "h2:has-text('Login to your account')"
        self.login_email_input = "input[data-qa='login-email']"
        self.login_password_input = "input[data-qa='login-password']"
        self.login_button = "button[data-qa='login-button']"
        self.login_error_message = "p:has-text('Your email or password is incorrect!')"
        
        self.signup_title = "h2:has-text('New User Signup!')"
        self.signup_name_input = "input[data-qa='signup-name']"
        self.signup_email_input = "input[data-qa='signup-email']"
        self.signup_button = "button[data-qa='signup-button']"
        self.signup_error_message = "p:has-text('Email Address already exist!')"

        

    def fill_signup_inputs(self, name, email):
        self.page.fill(self.signup_name_input, name)
        self.page.fill(self.signup_email_input, email)
    
    def fill_login_inputs(self, email, password):
        self.page.fill(self.login_email_input, email)
        self.page.fill(self.login_password_input, password)