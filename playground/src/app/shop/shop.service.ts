import { Injectable } from "@angular/core";
import { Product } from "./classes/product.class";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  products: Product[] = [];
  cart: Product[] = [];
  installments: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {
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
      },
      err => {
        console.log("Shop service constructor get products: " + err);
      }
    );
    if (auth.isLoggedIn())
      http.get<any>("http://localhost:3000/api/shop/cart").subscribe(
        res => {
          res.products.forEach(p => {
            let product: Product = new Product();
            product.id = p._id;
            product.name = p.name;
            product.description = p.description;
            product.price = p.price;
            product.discount = p.discount;
            product.amount = p.amount;
            product.shortDescription = p.shortDescription;
            product.specifications = p.specifications;
            this.cart.push(product);
          });
        },
        err => {
          console.log("Shop service constructor get cart: " + err);
        }
      );
  }

  getProducts() {
    return this.http.get<any>("http://localhost:3000/api/shop/products");
  }

  addToCart(product: Product, amount: number = 1) {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
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

  addToCartAndUpdate(product: Product, amount: number = 1) {
    this.addToCart(product, amount);
    this.updateCart();
  }

  removeFromCart(product: Product, amount: number = 1) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == product.id) {
        if (this.cart[i].amount > 0) this.cart[i].amount -= amount;
        break;
      }
    }
  }

  removeFromCartAndUpdate(product: Product, amount: number = 1) {
    this.removeFromCart(product, amount);
    this.updateCart();
  }

  isOnCart(product: Product): boolean {
    this.cart.forEach(p => {
      if (p.id == product.id) {
        console.log(true);
        return true;
      }
    });
    console.log(false);
    return false;
  }

  updateCart() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    let products = [];

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].amount == 0) {
        this.cart.splice(i, 1);
        i--;
      }
    }

    this.cart.forEach(p => {
      let product = { productId: "", amount: 0 };
      product.productId = p.id;
      product.amount = p.amount;
      products.push(product);
    });
    this.http
      .post<any>("http://localhost:3000/api/shop/cart", products)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
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
