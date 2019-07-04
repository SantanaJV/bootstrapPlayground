import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { GameComponent } from "./game/game.component";
import { GameProducerComponent } from "./game-producer/game-producer.component";
import { GameService } from "./game.service";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { RegisterComponent } from "./register/register.component";
import { ShopComponent } from "./shop/shop.component";
import { CartComponent } from "./cart/cart.component";
import { CartService } from "./cart.service";
import { GameModule } from "./game/game.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CalculatorComponent,
    GameComponent,
    GameProducerComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GameModule
  ],
  providers: [
    GameService,
    AuthService,
    ErrorService,
    CartService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
