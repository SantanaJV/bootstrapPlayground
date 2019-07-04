import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop.component";
import { ShopService } from "./shop.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CartComponent, ShopComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShopComponent, CartComponent],
  providers: [ShopService]
})
export class ShopModule {}
