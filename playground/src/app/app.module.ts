import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { GameModule } from "./game/game.module";
import { AuthModule } from "./auth/auth.module";
import { TokenInterceptorService } from "./auth/token-interceptor.service";
import { AuthService } from "./auth/auth.service";
import { ShopModule } from "./shop/shop.module";
import { ShopService } from "./shop/shop.service";

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
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
