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

  constructor(private shop: ShopService, private router: Router) {}

  ngOnInit() {
    this.products = this.shop.products;
  }

  selectProduct(product: Product) {
    this.selectedProduct = Product.clone(product);
  }

  showDetails(product: Product) {
    this.router.navigate(["/product", product.id]);
  }
}
