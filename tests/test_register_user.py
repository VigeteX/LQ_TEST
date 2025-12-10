import pytest
import allure

from pages.home_page import HomePage
from pages.login_page import LoginPage
from pages.signup_page import SignupPage
from conftest import TEST_EMAIL_PREFIX
from faker import Faker
faker = Faker()

@allure.title("Register User [{browser_type}]")
def test_signup_flow(page, base_url):
    home = HomePage(page)
    login = LoginPage(page)
    signup = SignupPage(page)

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
        fake_email = TEST_EMAIL_PREFIX + faker.email()
        login.fill_signup_inputs(
            faker.first_name(), 
            fake_email
        )
        page.click(login.signup_button)
        page.locator(signup.enter_account_information_title).wait_for(state="visible", timeout=5000)
        assert page.locator(signup.enter_account_information_title).is_visible()
        allure.attach(page.screenshot(), "new_user", allure.attachment_type.PNG)

    with allure.step("Fill account information"):
        birthdate = faker.date_of_birth()
        signup.fill_account_info(
            faker.password(),
            str(birthdate.day),
            str(birthdate.month),
            str(faker.random_int(min=1900, max=2021)),
        )
        page.click(signup.newsletter)
        page.click(signup.optin)

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

    with allure.step("Verify account created"):
        page.click(signup.create_account_button)
        page.locator(home.account_created_title).wait_for(state="visible", timeout=5000)
        assert page.locator(home.account_created_title).is_visible()
        allure.attach(page.screenshot(), "account_created", allure.attachment_type.PNG)
        page.click(home.continue_button)

    with allure.step("Verify account deleted"):
        page.click(home.delete_account_button)
        page.locator(home.account_deleted_title).wait_for(state="visible", timeout=5000)
        assert page.locator(home.account_deleted_title).is_visible()
        allure.attach(page.screenshot(), "account_deleted", allure.attachment_type.PNG)
        page.click(home.continue_button)

