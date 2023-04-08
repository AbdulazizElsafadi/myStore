import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/Cart';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

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
    private productService: ProductsService,
    private route: Router
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
    if (quantity == 0) alert('item is removed from the cart');
  }

  getCarts(): void {
    this.carts = this.cartService.getCarts();
  }

  getTotalPrice(): number {
    return this.cartService.calcPrice();
  }

  handleSubmit(): void {
    this.route.navigate(['conformation']);
  }

  OnlyNumbersAllowed(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    else return true;
  }
}
