import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { GameComponent } from "./game/game.component";
import { GameProducerComponent } from "./game-producer/game-producer.component";
import { GameService } from "./game.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CalculatorComponent,
    GameComponent,
    GameProducerComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
