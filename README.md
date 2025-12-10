# Playwright - Pytest

## Summary of Repository

This repository contains automated UI tests for various pages of the Automation Exercise website (https://www.automationexercise.com/).  
Tests are written using Python + Pytest, following the **Page Object Model (POM)** structure.  
Each test corresponds to a manual test case defined in the https://www.automationexercise.com/test_cases.  
Tests run inside Docker, supporting **Chromium** and **Firefox** browsers.  

---

## Requirements

Before running the tests, make sure you have installed the following:

- Python 3.10+
- pip 23+
- Docker Desktop (with Linux containers)
- Pytest 8+
- Allure reporter (optional, for test reports)

---

## Steps to Install

1. Clone this repository:  
```bash
git clone https://github.com/VigeteX/LQ9.git
```

2. Open the project folder in VS Code.

3. Install dependencies:  
```bash
pip install -r requirements.txt
```

---

## Steps to Launch Tests

1. Run All Tests Locally:  
```bash
pytest -v
```
2. Run all tests in Docker (with Allure results):  
```bash
pytest --alluredir=allure-results
```
3. Run One Test File:  
```bash
pytest -m pytest tests/test_contact_us_form.py
```
5. Run Tests parallel:  
```bash
pytest -n 
```
6. Run Tests in chromium(firefox):  
```bash
pytest --browser=chromium 
```
7. Generate allure-report:  
```bash
allure generate allure-results --clean -o allure-report 
```
8. Open allure-report:  
```bash
allure open allure-report
```
## Project Structure

```
configs
    wdio.conf.ts
    wdio.edge.conf.ts
    wdio.firefox.conf.ts
allure-results
data
    test.png
pages
    contact_page.py
    home_page.py
    login_page.py
    products_page.py
    signup_page.py
tests
    test_contact_us_form.py
    test_login_user_with_correct_email_and_password.py
    test_login_user_with_incorrect_email_and_password.py
    test_logout_user.py
    test_register_user_with_existing_email.py
    test_register_user.py
    test_search_product.py
    test_verify_all_products_and_product_detail_page.py
    test_verify_subscription_in_home_page.py
    test_verify_test_cases_page.py
    utils
.gitignore
conftest.py
Pipfile
Pipfile.lock
pytest.ini
README.md
```

Environment variables
Project requires the following environment variables to run tests:

TEST_EMAIL=<your test email>
TEST_PASSWORD=<your test password>
BASE_URL=<url under test>
TEST_EMAIL_PREFIX=<prefix for registration tests>

- **pages** – Page Object Models for the project.  
- **tests** – Test scripts.  
- **allure-results** – Allure test reports (generated after tests).  

---

## GitHub Actions CI

Tests can be run in GitHub Actions on push or pull request to `main`.  
- Workflow uses **Ubuntu runner**.   
- Uploads **Allure results** as artifacts.
