import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartPlus,
  faShoppingCart,
  faHome,
  faCalculator,
  faGamepad,
  faStore,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop.component";
import { ShopService } from "./shop.service";
import { ProductComponent } from "./product/product.component";
import { AppModule } from "../app.module";

@NgModule({
  declarations: [CartComponent, ShopComponent, ProductComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [ShopComponent, CartComponent, ProductComponent],
  providers: [ShopService]
})
export class ShopModule {
  constructor() {
    library.add(faCartPlus);
    library.add(faShoppingCart);
  }
}
