import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/counter_page.dart';

void main() {
  testWidgets('Button Submit reacts to tap', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: CounterPage(title: 'Counter App Home Page',
      enableDelayedText: false,)),
    );
    final submitButton = find.byKey(const Key('submitButton'));

    expect(submitButton, findsOneWidget);

    await tester.tap(submitButton);

    await tester.pumpAndSettle();
    final temporaryText = find.byKey(const Key('temporaryText'));
    expect(temporaryText, findsOneWidget);
  });
}
