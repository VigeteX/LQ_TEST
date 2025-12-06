import pytest
import allure

from pages.home_page import HomePage
from pages.login_page import LoginPage
from conftest import TEST_EMAIL, TEST_PASSWORD

@allure.title("register_user")
def test_signup_flow(page, base_url):
    home = HomePage(page)
    login = LoginPage(page)

    with allure.step("Launch browser and go to URL"):
        page.set_viewport_size({'width': 1920, 'height': 1080})
        page.goto(base_url)
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "homepage", allure.attachment_type.PNG)

    with allure.step("Click Signup / Login"):
        page.click(home.signup_login_button)
        assert page.locator(login.signup_title).is_visible()
        allure.attach(page.screenshot(), "signup_title", allure.attachment_type.PNG)
    
    with allure.step("Enter name and email"):
        login.fill_signup_inputs(
            TEST_EMAIL, 
            TEST_EMAIL
        )
        page.click(login.signup_button)
        assert page.locator(login.signup_error_message).is_visible()
        allure.attach(page.screenshot(), "new_user", allure.attachment_type.PNG)
