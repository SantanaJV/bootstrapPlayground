import { Component, OnInit } from "@angular/core";
import { Product } from "../classes/product.class";
import { ShopService } from "../shop.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  isEditing: boolean;

  constructor(private shop: ShopService) {}

  ngOnInit() {}

  updateCart() {
    this.isEditing = false;
    this.shop.updateCart();
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }
}
