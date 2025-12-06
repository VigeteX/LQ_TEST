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
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "homepage", allure.attachment_type.PNG)
    
    with allure.step("Click on 'Signup / Login' button"):
        page.click(home.signup_login_button)
        assert page.locator(login.login_title).is_visible()
        allure.attach(page.screenshot(), "new_user", allure.attachment_type.PNG)
    
    with allure.step("Login"):
        login.fill_login_inputs(faker.email(), faker.password())
        page.click(login.login_button)
        assert page.locator(login.login_error_message).is_visible()
        allure.attach(page.screenshot(), "old_user", allure.attachment_type.PNG)
