import { Injectable } from "@angular/core";
import { Product } from "./classes/product.class";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  products: Product[];
  cart: { product: Product; amount: number }[];

  constructor() {
    let product = new Product();
    let otherProduct = new Product();
    product.name = "Notebook Gamer";
    product.description =
      "Notebook pika pra krl das galáxias perdidas do mundo de atlântida do norte";
    product.shortDescripton = "Notebook pka pra krl";
    product.price = 9999.99;
    product.discount = 0;
    product.specifications = [
      "16GB de Memória Ram",
      "SSD WDGreen 480GB",
      "HD WDGreen 1TB",
      "Processador Octacore Intel i9",
      "GPU 4GB Ryzen"
    ];
    otherProduct.name = "Notebook Gamer";
    otherProduct.description =
      "Notebook pika pra krl das galáxias perdidas do mundo de atlântida do norte";
    otherProduct.shortDescripton = "Notebook pka pra krl";
    otherProduct.price = 9999.99;
    otherProduct.discount = 0;
    otherProduct.specifications = [
      "16GB de Memória Ram",
      "SSD WDGreen 480GB",
      "HD WDGreen 1TB",
      "Processador Octacore Intel i9",
      "GPU 4GB Ryzen"
    ];

    this.products.push(product);
    this.products.push(otherProduct);
  }

  addToCart(product: Product) {
    let productFound = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product == product) {
        this.cart[i].amount++;
        productFound = true;
        break;
      }
    }
    if (!productFound) this.products.push(product);
  }

  removeOneFromCart(product: Product) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product == product) {
        this.cart[i].amount--;

        if (this.cart[i].amount == 0) this.cart.splice(i, 1);
        break;
      }
    }
  }
}
