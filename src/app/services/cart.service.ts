import { Injectable } from '@angular/core';
import { Cart } from '../Models/Cart';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[];

  constructor() {
    this.carts = [];
  }

  getCarts(): Cart[] {
    return this.carts;
  }

  editCart(product: Product, quantity: number): void {
    if (quantity === undefined) quantity = 1;
    if (quantity == 0) return;
    const targetCart = this.carts.find(
      (cart) => cart.productName === product.name
    );
    targetCart
      ? quantity <= 0
        ? (this.carts = this.carts.filter(
            (cart) => cart.productName !== targetCart.productName
          ))
        : (targetCart.quantity = quantity)
      : this.carts.push(this.addProduct(product, quantity));
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

    return totalPrice;
  }
}
