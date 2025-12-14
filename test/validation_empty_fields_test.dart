import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/login_page.dart';

void main() {
  testWidgets('Validation on empty email/password fields', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: LoginPage(),
      ),
    );

    final loginButton = find.byKey(const Key('loginButton'));
    expect(loginButton, findsOneWidget);

    await tester.tap(loginButton);
    await tester.pumpAndSettle();

    expect(find.text('Please fill in all fields'), findsOneWidget);
  });
}