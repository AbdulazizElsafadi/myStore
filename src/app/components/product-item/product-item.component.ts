import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addProduct = new EventEmitter();
  productQuantity: number;

  constructor(private cartService: CartService) {
    this.product = { id: 0, name: '', price: 0, url: '', description: '' };
    this.productQuantity = 0;
  }

  ngOnInit(): void {
    this.productQuantity = this.getQuantity();
  }

  getQuantity(): number {
    return this.cartService.getQuantity(this.product);
  }
}
