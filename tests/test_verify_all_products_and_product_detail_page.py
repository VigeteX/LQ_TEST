import pytest
import allure

from pages.home_page import HomePage
from pages.products_page import ProductsPage

@allure.title("Verify All Products And Product Detail Page")
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
    
    with allure.step("Click on 'View Product' of first product"):
        page.click(products.get_product(1))
        assert "product_details" in page.url
    
    with allure.step("Verify that detail detail is visible: product name, category, price, availability, condition, brand"):
        assert page.locator(products.name).is_visible()
        assert page.locator(products.category).is_visible()
        assert page.locator(products.price).is_visible()
        assert page.locator(products.availability).is_visible()
        assert page.locator(products.condition).is_visible()
        assert page.locator(products.brand).is_visible()
        allure.attach(page.screenshot(), "all visible", allure.attachment_type.PNG)
