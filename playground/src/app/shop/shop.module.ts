import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop.component";
import { ShopService } from "./shop.service";
import { FormsModule } from "@angular/forms";
import { ProductComponent } from "./product/product.component";

@NgModule({
  declarations: [CartComponent, ShopComponent, ProductComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShopComponent, CartComponent, ProductComponent],
  providers: [ShopService]
})
export class ShopModule {}
