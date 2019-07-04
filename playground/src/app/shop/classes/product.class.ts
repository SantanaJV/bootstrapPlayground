export class Product {
  id: string;
  name: string;
  price: number;
  amount: number;
  category: string;
  discount: number;
  discountExpiringDate: Date;
  shortDescription: string;
  description: string;
  specifications: string[];

  constructor() {
    this.amount = 1;
  }

  static clone(product) {
    if (product == null || typeof product != "object") return product;

    var temp = new product.constructor();
    for (var key in product) temp[key] = this.clone(product[key]);

    return temp;
  }

  correctedPrice(): number {
    return this.price - (this.price * this.discount) / 100;
  }

  fullPrice() {
    return this.correctedPrice() * this.amount;
  }
}
