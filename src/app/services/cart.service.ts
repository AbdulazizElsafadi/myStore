import { Injectable, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  carts: Cart[];

  constructor() {
    this.carts = [];
  }

  // TODO: may not be needed
  ngOnInit(): void {}

  getCarts(): Cart[] {
    return this.carts;
  }

  editCart(product: Product, quantity: number): void {
    const targetCart = this.carts.find(
      (cart) => cart.productName === product.name
    );
    targetCart
      ? (targetCart.quantity = quantity)
      : this.carts.push(this.addProduct(product, quantity));

    console.log('carts:', this.carts);
  }

  private addProduct(product: Product, quantity: number): Cart {
    return {
      productName: product.name,
      productPrice: product.price,
      quantity,
      url: product.url,
    };
  }

  getQuantity(product: Product): number {
    const targetCart = this.carts.find(
      (cart) => cart.productName === product.name
    );

    return targetCart?.quantity as number;
  }

  calcPrice(): number {
    const totalPrice: number = this.carts.reduce(
      (previousValue, currentValue) => {
        return (
          currentValue.productPrice * currentValue.quantity + previousValue
        );
      },
      0
    );

    console.log('totalPrice:', totalPrice);

    return totalPrice;
  }
}
