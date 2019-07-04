import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ErrorService } from "../error.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userData = {};
  errorMessage = "";
  constructor(
    private auth: AuthService,
    private error: ErrorService,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    this.auth.register(this.userData).subscribe(
      res => {
        if (res.errorCode) {
          this.errorMessage = this.error.handle(res.errorCode);
        } else {
          localStorage.setItem("token", res.token);
          this.router.navigate(["/home"]);
        }
      },
      err => console.log(err)
    );
  }
}
