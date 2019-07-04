import { Component, OnInit } from "@angular/core";
import { Product } from "./classes/product.class";
import { ShopService } from "./shop.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"]
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private shop: ShopService) {}

  ngOnInit() {
    this.products = this.shop.products;
  }
}
