import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/main.dart';

void main() {
  testWidgets('Enter text in TextField', (tester) async {
    await tester.pumpWidget(const MyApp());

    final emailField = find.byKey(const Key('emailField'));

    await tester.enterText(emailField, 'test@example.com');

    expect(find.text('test@example.com'), findsOneWidget);
  });
}