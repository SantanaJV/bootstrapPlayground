import { Injectable } from "@angular/core";
import { Product } from "./classes/product.class";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  products: Product[] = [];
  cart: { product: Product; amount: number }[] = [];

  constructor() {
    let product = new Product();
    let otherProduct = new Product();
    product.name = "Notebook Gamer";
    product.description =
      "Notebook pika pra krl das galáxias perdidas do mundo de atlântida do norte";
    product.shortDescription = "Notebook pka pra krl";
    product.price = 9999.99;
    product.discount = 0;
    product.specifications = [
      "16GB de Memória Ram",
      "SSD WDGreen 480GB",
      "HD WDGreen 1TB",
      "Processador Octacore Intel i9",
      "GPU 4GB Ryzen"
    ];
    otherProduct.name = "Notebook Ordinário";
    otherProduct.description =
      "Notebook ordinário da Razer com tela Full HD, 2GB de memória, placa de vídeo integrada.";
    otherProduct.shortDescription = "Notebook ordinário da Razer";
    otherProduct.price = 1999.99;
    otherProduct.discount = 0;
    otherProduct.specifications = [
      "2GB de Memória Ram",
      "HD WDGreen 500GB",
      "Processador Pentium 3ª Geração",
      "GPU integrada"
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
