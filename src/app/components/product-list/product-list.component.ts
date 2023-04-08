import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  quantity: number;
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.products = [];
    this.quantity = 0;
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => (this.products = res));
  }

  AddCart(product: Product, quantity: number): void {
    this.cartService.editCart(product, quantity);
    quantity == 0
      ? alert('item is removed from the cart')
      : alert(`${quantity ? quantity : 1} item(s) is added to cart`);
  }
}
