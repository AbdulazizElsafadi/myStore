import { Injectable, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  carts: Cart[];
  fullName: string;
  address: string;
  cardNumber: Number;
  constructor() {
    this.carts = [];
    this.fullName = '';
    this.address = '';
    this.cardNumber = 0;
  }
  ngOnInit(): void {}

  addProduct(product: Product, quantity: number): void {
    this.carts.map((cart) => {
      cart.productName === product.name
        ? (cart.quantity = quantity)
        : this.carts.push({
            productName: product.name,
            productPrice: product.price,
            quantity,
          });

      console.log('carts:', this.carts);
    });
  }
}
