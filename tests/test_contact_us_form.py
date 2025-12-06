import pytest
import allure

from pages.home_page import HomePage
from pages.contact_page import ContactUsPage
from faker import Faker
faker = Faker()

@allure.title("register_user")
def test_signup_flow(page, base_url):
    home = HomePage(page)
    contact = ContactUsPage(page)

    with allure.step("Launch browser and go to URL"):
        page.set_viewport_size({'width': 1920, 'height': 1080})
        page.goto(base_url)
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "homepage", allure.attachment_type.PNG)
    
    with allure.step("Click on 'Contact Us' button"):
        page.click(home.contact_us_button)
        assert page.locator(contact.get_in_touch_title).is_visible()
        allure.attach(page.screenshot(), "get_in_touch_title", allure.attachment_type.PNG)

    with allure.step("Enter name, email, subject and message upload file"):
        page.fill(contact.name_input, faker.first_name())
        assert page.locator(contact.name_input).input_value() != ""
        page.fill(contact.email_input, faker.email())
        assert page.locator(contact.email_input).input_value() != ""
        page.fill(contact.subject_input, "asdasd")
        assert page.locator(contact.subject_input).input_value() != ""
        page.fill(contact.message_textarea, "asdasdasdasd")
        assert page.locator(contact.message_textarea).input_value() != ""
        page.locator(contact.upload_file_input).set_input_files("data/test.png")
        files = page.locator(contact.upload_file_input).evaluate("input => input.files.length")
        assert files == 1
        allure.attach(page.screenshot(), "before_submit", allure.attachment_type.PNG)

        page.once("dialog", lambda dialog: dialog.accept())
        # page.click(contact.submit_button)
        page.locator(contact.submit_button).click(force=True)

        page.wait_for_timeout(10000)
        assert page.locator(contact.success_title).is_visible()

        allure.attach(page.screenshot(), "send", allure.attachment_type.PNG)

    with allure.step("Verify returned to home page"):
        page.click(contact.home_button)
        assert page.url == "https://automationexercise.com/"
        allure.attach(page.screenshot(), "home_page", allure.attachment_type.PNG)

# assert "display: block" in page.locator(contact.success_title).get_attribute("style")

# pytest --browser_name=chromium --browser_name=firefox -n auto --alluredir=allure-results

# python -m pytest tests/test_contact_us_form.py --alluredir=allure-results
# allure generate allure-results --clean -o allure-report 
# allure open allure-report
# pytest -n 5
# pytest --browser=chromium -n auto --alluredir=allure-results

# assert "display: block" in page.locator(contact.success_title)

# success = page.locator(contact.success_title)
# page.wait_for_function(
#     "el => el.style.display === 'block'",
#     success,
#     timeout=15000
# )
# assert success.is_visible()

# page.wait_for_function(
#     "el => el.getAttribute('style')?.includes('display: block')",
#     arg=page.locator(contact.success_title),
#     timeout=15000
# )
# assert page.locator(contact.success_title).is_visible()

# page.wait_for_timeout(3000)
# assert page.locator(contact.success_title).is_visible()

# page.locator(contact.success_title).wait_for(state="visible", timeout=50000)

# success = page.locator(contact.success_title)
# success.wait_for(state="visible", timeout=50000)
# assert success.is_visible()

# success = page.locator(contact.success_title)
# success_text = success.inner_text(timeout=10000)
# assert "Success! Your details have been submitted successfully." in success_text

# success = page.locator(contact.success_title)
# success.wait_for(state="visible", timeout=10000)  # ждем видимость
# assert "Success! Your details have been submitted successfully." in success.inner_text()