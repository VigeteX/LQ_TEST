import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:lq10/pages/product_page.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('multipleAddToCart', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: ProductPage(),
      ),
    );

    final addToCartButton = find.byKey(const Key('addToCart_1'));

    await tester.tap(addToCartButton);
    await tester.pump();
    expect(find.text('1'), findsOneWidget);

    await tester.tap(addToCartButton);
    await tester.pump();
    expect(find.text('2'), findsOneWidget);

    await tester.tap(addToCartButton);
    await tester.pump();
    expect(find.text('3'), findsOneWidget);
  });
}