import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
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
  cartQuantity: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.id = 0;
    this.productDetails = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
    this.cartQuantity = 0;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.productService.getProduct().subscribe((res) => {
      this.productDetails = res.find(
        (product) => product.id == this.id
      ) as Product;
      this.cartQuantity = this.getQuantity();
    });
  }

  getQuantity(): number {
    return this.cartService.getQuantity(this.productDetails);
  }

  AddCart(): void {
    this.cartService.editCart(this.productDetails, this.cartQuantity);
    alert(
      `${this.cartQuantity ? this.cartQuantity : 1} item(s) is added to cart`
    );
  }
}
