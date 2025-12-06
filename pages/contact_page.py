import random

class ContactUsPage:
    def __init__(self, page):
        self.page = page
        
        self.contact_title = "h2:has-text('Contact ')"
        self.get_in_touch_title = "h2:has-text('Get In Touch ')"
        
        self.name_input = "input[data-qa='name']"
        self.email_input = "input[data-qa='email']"
        self.subject_input = "input[data-qa='subject']"
        self.message_textarea = "textarea[id='message']"
        self.upload_file_input = "input[name='upload_file']"

        self.submit_button = "input[data-qa='submit-button']"
        
        self.success_title = "div[class='status alert alert-success']"
        
        self.home_button = "a[class='btn btn-success']"
