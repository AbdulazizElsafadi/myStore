export class Cart {
  productName: string;
  productPrice: number;
  quantity: number;
  url: string;
  constructor() {
    this.productName = '';
    this.productPrice = 0;
    this.quantity = 0;
    this.url = '';
  }
}
