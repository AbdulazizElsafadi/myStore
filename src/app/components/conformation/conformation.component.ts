import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css'],
})
export class ConformationComponent {
  constructor(private cartService: CartService) {}

  getTotalPrice(): number {
    return this.cartService.calcPrice();
  }
}
