# Flutter Integration Tests
## Summary of Repository

This repository contains automated Flutter widget and integration tests for a sample Flutter application.
Tests are written using Flutter test framework and integration_test package.
Each automated test corresponds to a manual test case from the assignment.

---

## Requirements
- Before running the tests, make sure you have installed:
- Flutter SDK (3.22+ recommended)
- Dart SDK (comes with Flutter)
- Android Studio (for emulator)
- Android SDK & Emulator

---

## Steps to Install

1. Clone this repository:  
```bash
git clone https://github.com/VigeteX/LQ10.git
```

2. Open the project folder in VS Code.

3. Install dependencies:  
```bash
flutter pub get
```

---

## Steps to Launch Tests

1. Run all widget tests: 
```bash
flutter test
```
2. Run integration tests:
```bash
flutter test integration_test
```
## Project Structure

```
lib
    main.dart
    pages
        login_page.dart
        product_page.dart
        checkout_page.dart

test
    checkout_flow_test.dart
    enter_text_test.dart
    increment_counter_multiple_test.dart
    increment_counter_test.dart
    login_invalid_password_test.dart
    login_success_test.dart
    logout_test.dart
    multiple_add_to_cart_test.dart
    remove_and_return_text_test.dart
    scroll_until_visible_test.dart
    tab_test.dart
    temporary_text_test.dart
    text_field_clear_test.dart
    validation_empty_fields_test.dart
    wait_for_test.dart

integration_test
    checkout_flow_test.dart
    enter_text_test.dart
    increment_counter_multiple_test.dart
    increment_counter_test.dart
    login_invalid_password_test.dart
    login_success_test.dart
    logout_test.dart
    multiple_add_to_cart_test.dart
    remove_and_return_text_test.dart
    scroll_until_visible_test.dart
    tab_test.dart
    temporary_text_test.dart
    text_field_clear_test.dart
    validation_empty_fields_test.dart
    wait_for_test.dart

.gitignore
README.md
```

---

## GitHub Actions CI

Tests can be run in GitHub Actions on push or pull request to `main`.  
- Workflow uses **Ubuntu runner**.   
