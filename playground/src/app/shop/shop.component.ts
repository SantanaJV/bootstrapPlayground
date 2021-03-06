import { Component, OnInit } from "@angular/core";
import { Product } from "./classes/product.class";
import { ShopService } from "./shop.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"]
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product = new Product();
  viewingDetails: boolean = false;

  constructor(private shop: ShopService, private router: Router) {}

  ngOnInit() {}

  selectProduct(product: Product) {
    this.selectedProduct = Product.clone(product);
  }

  showDetails(product: Product) {
    this.selectProduct(product);
    this.viewingDetails = true;
  }

  hideDetails() {
    this.viewingDetails = false;
  }

  getCart() {
    this.shop.getCart().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
