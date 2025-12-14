import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/counter_page.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('textFieldClear clears the input field', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: CounterPage(title: 'Counter App Home Page')),
    );

    final textField = find.byKey(const Key('textField'));

    await tester.enterText(textField, 'Hello');
    expect(find.text('Hello'), findsOneWidget);

    await tester.enterText(textField, '');
    expect(find.text('Hello'), findsNothing);
    expect(find.byWidgetPredicate(
      (widget) => widget is TextField && widget.controller!.text.isEmpty
    ), findsOneWidget);
  });
}