import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { ErrorService } from "./error.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./token-interceptor.service";
import { AuthGuard } from "./auth.guard";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthService, ErrorService, AuthGuard]
})
export class AuthModule {}
