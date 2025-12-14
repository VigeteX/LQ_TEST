import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/counter_page.dart';

void main() {
  testWidgets('waitFor', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(home: CounterPage(title: 'Counter App Home Page')),
    );

    final delayedText = find.byKey(const Key('delayedText'));

    await tester.pumpAndSettle(const Duration(seconds: 2));

    expect(delayedText, findsOneWidget);
  });
}
