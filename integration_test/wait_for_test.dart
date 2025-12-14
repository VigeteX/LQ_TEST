import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/counter_page.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('waitFor', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: CounterPage(title: 'Counter App Home Page')),
    );

    // Ждем появления элемента с ключом 'delayedElement'
    final delayedText = find.byKey(const Key('delayedText'));

    await tester.pumpAndSettle(const Duration(seconds: 2));

    expect(delayedText, findsOneWidget);
  });
}
