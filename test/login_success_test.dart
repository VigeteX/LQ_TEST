import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/main.dart';

void main() {
  testWidgets('loginSuccess test', (tester) async {
    await tester.pumpWidget(const MyApp());

    final emailField = find.byKey(const Key('emailField'));
    final passwordField = find.byKey(const Key('passwordField'));
    final loginButton = find.byKey(const Key('loginButton'));

    await tester.enterText(emailField, 'test@example.com');
    await tester.enterText(passwordField, 'password123');

    await tester.tap(loginButton);

    await tester.pumpAndSettle();

    expect(find.text('Home Page'), findsOneWidget);
  });
}