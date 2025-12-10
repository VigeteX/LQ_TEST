class ProductsPage:
    def __init__(self, page):
        self.all_products_title = "h2:has-text('All Products')"
        self.searched_products_title = "h2:has-text('Searched Products')"
        self.features_items = "div[ class='features_items']"
        self.search_input = "input[id='search_product']"
        self.search_button = "button[id='submit_search']"
        
        self.products_list = "div.productinfo.text-center p"

        self.name = "div.product-information h2"
        self.category = "div.product-information p:nth-of-type(1)"
        self.price = "div.product-information span span"
        self.availability = "div.product-information p:has(b:has-text('Availability'))"
        self.condition = "div.product-information p:has(b:has-text('Condition'))"
        self.brand = "div.product-information p:has(b:has-text('Brand'))"

    def get_product(self, number) -> str:
        return "a[href='/product_details/" + str(number) + "']"