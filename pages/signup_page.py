import random

class SignupPage:
    def __init__(self, page):
        self.page = page

        # Account info
        self.enter_account_information_title = "b:has-text('Enter Account Information')"
        self.gender1 = "div[id=uniform-id_gender1]"
        self.name_input = "input[data-qa='name']"
        self.email_input = "input[data-qa='email']"
        self.password_input = "input[id='password']"

        self.day_select = "select[id='days']"
        self.month_select = "select[id='months']"
        self.year_select = "select[id='years']"
        self.newsletter = "input[id='newsletter']"
        self.optin = "input[id='optin']"

        # Address info
        self.first_name_input = "input[id='first_name']"
        self.last_name_input = "input[id='last_name']"
        self.company_input = "input[id='company']"
        self.address1_input = "input[id='address1']"
        self.address2_input = "input[id='address2']"
        self.country_option = "select[id='country']"
        self.state_input = "input[id='state']"
        self.city_input = "input[id='city']"
        self.zipcode_input = "input[id='zipcode']"
        self.mobile_number_input = "input[id='mobile_number']"

        self.create_account_button = "button[data-qa='create-account']"

    # --- Actions ---

    def fill_account_info(self, password, day, month, year):
        self.page.locator(self.gender1).click(force=True)
        self.page.fill(self.password_input, password)
        self.page.select_option(self.day_select, day)
        self.page.select_option(self.month_select, month)
        self.page.select_option(self.year_select, str(year))

    def fill_address_info(self, first_name, last_name, company, address1, address2, country, state, city, zipcode, mobile):
        self.page.fill(self.first_name_input, first_name)
        self.page.fill(self.last_name_input, last_name)
        self.page.fill(self.company_input, company)
        self.page.fill(self.address1_input, address1)
        self.page.fill(self.address2_input, address2)
        allowed_countries = ["India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"]
        if country not in allowed_countries:
            country = random.choice(allowed_countries)
        self.page.select_option(self.country_option, country)
        self.page.fill(self.state_input, state)
        self.page.fill(self.city_input, city)
        self.page.fill(self.zipcode_input, zipcode)
        self.page.fill(self.mobile_number_input, mobile)
