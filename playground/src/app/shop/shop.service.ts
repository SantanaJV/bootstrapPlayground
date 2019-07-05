import { Injectable } from "@angular/core";
import { Product } from "./classes/product.class";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  products: Product[] = [];
  cart: Product[] = [];
  installments: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

  constructor(private http: HttpClient) {
    http.get<any>("http://localhost:3000/api/shop/products").subscribe(
      res => {
        res.products.forEach(p => {
          let product: Product = new Product();
          product.id = p._id;
          product.name = p.name;
          product.description = p.description;
          product.price = p.price;
          product.discount = p.discount;
          product.shortDescription = p.shortDescription;
          product.specifications = p.specifications;
          this.products.push(product);
        });
        console.log(this.products);
      },
      err => {
        console.log(err);
      }
    );
  }

  getProducts() {
    return this.http.get<any>("http://localhost:3000/api/shop/products");
  }

  addToCart(product: Product, amount: number = 1) {
    let productFound = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == product.id) {
        this.cart[i].amount += amount;
        productFound = true;
        break;
      }
    }
    if (!productFound) {
      product.amount = amount;
      this.cart.push(product);
    }
  }

  removeOneFromCart(product: Product) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == product.id) {
        this.cart[i].amount--;

        if (this.cart[i].amount == 0) this.cart.splice(i, 1);
        break;
      }
    }
  }

  getCartPrice(): number {
    let price = 0;

    for (let i = 0; i < this.cart.length; i++) {
      price += this.cart[i].fullPrice();
    }

    return price;
  }

  getCart() {
    return this.http.get("http://localhost:3000/api/shop/cart");
  }
}
