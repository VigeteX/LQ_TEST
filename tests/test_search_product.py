import pytest
import allure

from pages.home_page import HomePage
from pages.products_page import ProductsPage

@allure.title("Search Product [{browser_type}]")
def test_signup_flow(page, base_url):
    home = HomePage(page)
    products = ProductsPage(page)

    with allure.step("Launch browser and go to URL"):
        page.set_viewport_size({'width': 1920, 'height': 1080})
        page.goto(base_url)
        assert page.locator("body").is_visible()
        allure.attach(page.screenshot(), "home page", allure.attachment_type.PNG)

    with allure.step("Click on 'Products' button"):
        page.click(home.products_button)
        assert page.locator(products.all_products_title).is_visible()
        assert page.locator(products.features_items).is_visible()
        allure.attach(page.screenshot(), "products page", allure.attachment_type.PNG)

    with allure.step("Enter product name in search input and click search button"):
        page.fill(products.search_input, "Blue Top")
        page.click(products.search_button)
        assert page.locator(products.searched_products_title).is_visible()
        
        products_list = page.locator(products.products_list)
        assert products_list.count() > 0
        for i in range(products_list.count()):
            assert "blue top" in products_list.nth(i).inner_text().lower()
        allure.attach(page.screenshot(), "search result", allure.attachment_type.PNG)
