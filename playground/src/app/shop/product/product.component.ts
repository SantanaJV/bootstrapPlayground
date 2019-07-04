import { Component, OnInit } from "@angular/core";
import { Product } from "../classes/product.class";
import { ShopService } from "../shop.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  id: string;
  private sub: any;
  product: Product;

  constructor(
    private shop: ShopService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    for (let i = 0; i < this.shop.products.length; i++) {
      if (this.shop.products[i].id == this.id) {
        this.product = Product.clone(this.shop.products[i]);
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  return() {
    this.router.navigate(["/shop"]);
  }
}
