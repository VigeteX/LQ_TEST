import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/pages/counter_page.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('increases counter multiple times', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: CounterPage(title: 'Counter App Home Page')),
    );

    final incrementButton = find.byKey(const Key('increment'));
    expect(find.text('Counter: 0'), findsOneWidget);

    await tester.tap(incrementButton);
    await tester.pump();
    expect(find.text('Counter: 1'), findsOneWidget);

    await tester.tap(incrementButton);
    await tester.pump();
    expect(find.text('Counter: 2'), findsOneWidget);

    await tester.tap(incrementButton);
    await tester.pump();
    expect(find.text('Counter: 3'), findsOneWidget);
  });
}