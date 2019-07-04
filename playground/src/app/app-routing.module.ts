import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { GameComponent } from "./game/game.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { RegisterComponent } from "./auth/register/register.component";
import { ShopComponent } from "./shop/shop.component";
import { CartComponent } from "./shop/cart/cart.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "calculator",
    component: CalculatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "game",
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
