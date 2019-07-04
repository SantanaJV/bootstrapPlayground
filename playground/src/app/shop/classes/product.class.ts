export class Product {
  name: string;
  price: number;
  discount: number;
  discountExpiringDate: Date;
  shortDescription: string;
  description: string;
  specifications: string[];

  constructor() {}

  correctedPrice() {
    return (this.price - (this.price * this.discount) / 100).toFixed(2);
  }
}
