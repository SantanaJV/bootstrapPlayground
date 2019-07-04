import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  ngOnInit() {}
}
