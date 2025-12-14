import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/long_list_page.dart';

void main() {
  testWidgets('scrollUntilVisible', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: LongListPage(
          items: List<String>.generate(10000, (i) => 'Item $i'),
        ),
      ),
    );

    final targetItem = find.text('Item 9999');

    await tester.scrollUntilVisible(
      targetItem,
      20000.0,
      scrollable: find.byType(Scrollable),
    );

    expect(targetItem, findsOneWidget);
  });
}