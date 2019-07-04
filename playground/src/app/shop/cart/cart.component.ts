import { Component, OnInit } from "@angular/core";
import { Product } from "../classes/product.class";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor() {}

  ngOnInit() {}
}
