import pytest
import allure

from pages.home_page import HomePage
from faker import Faker
faker = Faker()

@allure.title("register_user")
def test_signup_flow(page, base_url):
    home = HomePage(page)

    with allure.step("Launch browser and go to URL"):
        page.set_viewport_size({'width': 1920, 'height': 1080})
        page.goto(base_url)
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "homepage", allure.attachment_type.PNG)

    with allure.step("Enter email address in input and click arrow button"):
        page.fill(home.susbscribe_email_input, faker.email())
        page.click(home.subscribe_button)
        assert page.locator(home.success_subscribe_title).is_visible()
        allure.attach(page.screenshot(), "success_subscribe", allure.attachment_type.PNG)

        