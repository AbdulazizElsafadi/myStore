import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductsService } from 'src/app/services/products.service';

//this.productId = Number(this.route.snapshot.paramMap.get('id'));

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number;
  productDetails: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.id = 0;
    this.productDetails = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.productService.getProduct().subscribe((res) => {
      this.productDetails = res.find(
        (product) => product.id == this.id
      ) as Product;
    });
  }
}
