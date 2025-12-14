import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lq10/pages/product_page.dart'; 

void main() {
  testWidgets('Checkout flow', (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: ProductPage(),
      ),
    );
    await tester.pumpAndSettle();

    final addToCartButton = find.byKey(const Key('addToCart_1'));
    expect(addToCartButton, findsOneWidget);
    await tester.tap(addToCartButton);
    await tester.pumpAndSettle();

    final cartBadge = find.text('1');
    expect(cartBadge, findsOneWidget);

    final goToCartButton = find.byKey(const Key('goToCartButton'));
    expect(goToCartButton, findsOneWidget);
    await tester.tap(goToCartButton);
    await tester.pumpAndSettle();

    final checkoutText = find.byKey(const Key('checkoutSuccessText'));
    expect(checkoutText, findsOneWidget);
    expect(find.text('Checkout successful!'), findsOneWidget);
  });
}