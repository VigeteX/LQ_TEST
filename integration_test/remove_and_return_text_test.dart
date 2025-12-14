import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/pages/counter_page.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('hides and shows temporary text', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: CounterPage(title: 'Counter App Home Page'),
      ),
    );

    final temporaryText = find.byKey(const Key('temporaryText'));
    final removeButton = find.byKey(const Key('removeTextButton'));

    expect(temporaryText, findsOneWidget);
    expect(removeButton, findsOneWidget);

    await tester.tap(removeButton);
    await tester.pumpAndSettle();

    expect(temporaryText, findsNothing);
    final returnButton = find.byKey(const Key('returnTextButton'));
    expect(returnButton, findsOneWidget);

    await tester.tap(returnButton);
    await tester.pumpAndSettle();

    expect(temporaryText, findsOneWidget);
  });
}