import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop.component";
import { ShopService } from "./shop.service";

@NgModule({
  declarations: [CartComponent, ShopComponent],
  imports: [CommonModule],
  exports: [ShopComponent, CartComponent],
  providers: [ShopService]
})
export class ShopModule {}
