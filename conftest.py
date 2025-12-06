from dotenv import load_dotenv
import os

load_dotenv()

TEST_EMAIL = os.getenv("TEST_EMAIL")
TEST_PASSWORD = os.getenv("TEST_PASSWORD")

import pytest
from playwright.sync_api import sync_playwright

def pytest_addoption(parser):
    parser.addoption(
        "--browser_name",
        action="store",
        default="chromium",
        help="Browser name: chromium, firefox"
    )
    
@pytest.fixture(scope="session")
def base_url():
    return os.getenv("BASE_URL")
    
@pytest.fixture(scope="session")
def browser_type(pytestconfig):
    return pytestconfig.getoption("--browser_name")

@pytest.fixture()
def page(browser_type):
    with sync_playwright() as p:
        browser = p[browser_type].launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        yield page
        browser.close()