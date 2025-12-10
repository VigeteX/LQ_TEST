import pytest
import allure

from pages.home_page import HomePage

@allure.title("Verify Test Cases Page [{browser_type}]")
def test_signup_flow(page, base_url):
    home = HomePage(page)

    with allure.step("Launch browser and go to URL"):
        page.set_viewport_size({'width': 1920, 'height': 1080})
        page.goto(base_url)
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "home page", allure.attachment_type.PNG)
    
    with allure.step("Go to test cases"):
        page.click(home.test_cases_button)
        assert page.locator("body").is_visible()
        f"{base_url}/test_cases"
        assert page.url == f"{base_url}/test_cases"
        allure.attach(page.screenshot(), "test cases page", allure.attachment_type.PNG)
        