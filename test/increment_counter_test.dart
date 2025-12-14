import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/pages/counter_page.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('incrementCounter() increases counter by 1', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: CounterPage(title: 'Counter App Home Page'),
      ),
    );

    final counterText = find.byKey(const Key('counterText'));
    expect(counterText, findsOneWidget);
    expect(find.text('Counter: 0'), findsOneWidget);

    final incrementButton = find.byKey(const Key('increment'));
    expect(incrementButton, findsOneWidget);
    await tester.tap(incrementButton);

    await tester.pumpAndSettle();

    expect(find.text('Counter: 1'), findsOneWidget);
  });
}