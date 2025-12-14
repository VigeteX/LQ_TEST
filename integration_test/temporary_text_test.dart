import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/counter_page.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('Button Submit reacts to tap (integration)', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: CounterPage(title: 'Counter App Home Page')),
    );
    final submitButton = find.byKey(const Key('submitButton'));

    expect(submitButton, findsOneWidget);

    await tester.tap(submitButton);

    await tester.pumpAndSettle();
    final temporaryText = find.byKey(const Key('temporaryText'));
    expect(temporaryText, findsOneWidget);
  });
}
