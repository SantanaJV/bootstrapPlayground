import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { HttpClientModule } from "@angular/common/http";
import { GameModule } from "./game/game.module";
import { AuthModule } from "./auth/auth.module";
import { ShopModule } from "./shop/shop.module";
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GameModule,
    AuthModule,
    ShopModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faCartPlus);
    library.add(faShoppingCart);
    library.add(faHome);
    library.add(faCalculator);
    library.add(faGamepad);
    library.add(faStore);
  }
}
