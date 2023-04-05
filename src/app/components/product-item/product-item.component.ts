import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  cartQuantity: number;

  constructor(private cartService: CartService) {
    this.product = { id: 0, name: '', price: 0, url: '', description: '' };
    this.cartQuantity = 0;
  }

  ngOnInit(): void {
    this.cartQuantity = this.getQuantity();
  }

  AddCart(): void {
    this.cartService.editCart(this.product, this.cartQuantity);
    alert('item is added to cart');
  }

  getQuantity(): number {
    return this.cartService.getQuantity(this.product);
  }
}
