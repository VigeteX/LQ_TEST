import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/main.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('loginSuccess test', (tester) async {
    await tester.pumpWidget(const MyApp());

    // Находим поля ввода
    final emailField = find.byKey(const Key('emailField'));
    final passwordField = find.byKey(const Key('passwordField'));
    final loginButton = find.byKey(const Key('loginButton'));

    // Вводим данные
    await tester.enterText(emailField, 'test@example.com');
    await tester.enterText(passwordField, 'password123');

    // Нажимаем кнопку логина
    await tester.tap(loginButton);

    // Ждем завершения анимаций и перехода
    await tester.pumpAndSettle();

    // Проверяем, что попали на HomePage
    expect(find.text('Home Page'), findsOneWidget);
  });
}