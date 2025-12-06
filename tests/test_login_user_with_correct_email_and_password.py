import pytest
import allure

from pages.home_page import HomePage
from pages.login_page import LoginPage
from pages.signup_page import SignupPage
from faker import Faker
faker = Faker()

@allure.title("Login User with correct email and password")
def test_signup_flow(page, base_url):
    home = HomePage(page)
    login = LoginPage(page)
    signup = SignupPage(page)

    with allure.step("Launch browser and go to URL"):
        page.set_viewport_size({'width': 1920, 'height': 1080})
        page.goto(base_url)
    
    email = faker.email()
    password = faker.password()
    with allure.step("Precondition: Create account"):
        page.click(home.signup_login_button)
        login.fill_signup_inputs(
            faker.first_name(), 
            email
        )
        page.click(login.signup_button)
        birthdate = faker.date_of_birth()
        signup.fill_account_info(
            password,
            str(birthdate.day),
            str(birthdate.month),
            str(birthdate.year),
        )
        signup.fill_address_info(
            faker.first_name(),
            faker.last_name(),
            faker.company(),
            faker.address(),
            faker.address(),
            faker.country(),
            faker.state(),
            faker.city(),
            faker.postcode(),
            faker.phone_number(),
        )
        page.click(signup.create_account_button)
        page.click(home.continue_button)
        page.click(home.logout_button)

    with allure.step("Go to URL"):
        page.goto('http://automationexercise.com')
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "homepage", allure.attachment_type.PNG)
    
    with allure.step("Click on 'Signup / Login' button"):
        page.click(home.signup_login_button)
        assert page.locator(login.login_title).is_visible()
        allure.attach(page.screenshot(), "new_user", allure.attachment_type.PNG)
    
    with allure.step("Login"):
        login.fill_login_inputs(email, password)
        page.click(login.login_button)
        assert page.locator(home.logged_in_as_title).is_visible()
        allure.attach(page.screenshot(), "old_user", allure.attachment_type.PNG)

    with allure.step("Verify account deleted"):
        page.click(home.delete_account_button)
        assert page.locator(home.account_deleted_title).is_visible()
        allure.attach(page.screenshot(), "account_deleted", allure.attachment_type.PNG)
        page.click(home.continue_button)

# python -m pytest tests/test_login_user_with_correct_email_and_password.py --alluredir=allure-results