import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../classes/product.class";
import { ShopService } from "../shop.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  bol: Boolean;

  constructor(private shop: ShopService) {}

  ngOnInit() {}

  setToTrue() {
    this.bol = true;
  }
}
