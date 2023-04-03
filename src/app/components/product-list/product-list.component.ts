import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => (this.products = res));
  }
}
