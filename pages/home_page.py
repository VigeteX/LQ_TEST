import random

class HomePage:
    def __init__(self, page):
        self.page = page
        self.signup_login_button = "a[href='/login']"
        self.logout_button = "a[href='/logout']"
        self.delete_account_button = "a[href='/delete_account']"
        self.contact_us_button = "a[href='/contact_us']"
        self.test_cases_button = "a[href='/test_cases']"
        self.products_button = "a[href='/products']"
        
        self.logged_in_as_title = "text=Logged in as"
        self.account_created_title = "h2[data-qa='account-created']"
        self.account_deleted_title = "h2[data-qa='account-deleted']"
        
        self.susbscribe_email_input = "input[id='susbscribe_email']"
        self.subscribe_button = "button[id='subscribe']"
        self.success_subscribe_title = "div[id='success-subscribe']"
        self.continue_button = "a[data-qa='continue-button']"