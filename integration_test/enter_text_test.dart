import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/main.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Enter text in TextField (integration)', (tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pumpWidget(const MyApp());

    final emailField = find.byKey(const Key('emailField'));
    await tester.enterText(emailField, 'test@example.com');
    await tester.pumpAndSettle();

    expect(find.text('test@example.com'), findsOneWidget);
    
  });
}
    