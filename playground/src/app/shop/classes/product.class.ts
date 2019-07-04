export class Product {
  name: string;
  price: number;
  discount: number;
  discountExpiringDate: Date;
  shortDescripton: string;
  description: string;
  specifications: string[];

  constructor() {}

  correctedPrice() {
    return this.price - (this.price * this.discount) / 100;
  }
}
