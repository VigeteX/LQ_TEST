import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/main.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('loginInvalidPassword', (tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pumpAndSettle();

    await tester.enterText(
      find.byKey(const Key('emailField')),
      'test@example.com',
    );
    await tester.enterText(
      find.byKey(const Key('passwordField')),
      'wrongpassword',
    );

    await tester.tap(find.byKey(const Key('loginButton')));
    await tester.pumpAndSettle();
    
    expect(find.text('Invalid password'), findsOneWidget);
  });
}