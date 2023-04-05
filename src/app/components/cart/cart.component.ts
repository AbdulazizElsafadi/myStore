import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/Cart';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  fullName: string;
  address: string;
  cardNumber: number;
  carts: Cart[];
  products: Product[];

  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {
    this.fullName = '';
    this.address = '';
    this.cardNumber = 0;
    this.carts = [];
    this.products = [];
  }

  ngOnInit(): void {
    this.carts = this.cartService.getCarts();
    this.productService.getProduct().subscribe((res) => (this.products = res));
  }

  AddCart(productName: string, quantity: number): void {
    const targetProduct = this.products.find(
      (product) => product.name === productName
    );
    this.cartService.editCart(targetProduct as Product, quantity);
  }

  getTotalPrice(): number {
    return this.cartService.calcPrice();
  }
}
