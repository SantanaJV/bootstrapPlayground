import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ErrorService } from "../error.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    private error: ErrorService
  ) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.userData).subscribe(
      res => {
        console.log(res);
        if (res.errorCode) console.log(this.error.handle(res.errorCode));
        else {
          localStorage.setItem("token", res.token);
          this.router.navigate(["/home"]);
        }
      },
      err => console.log(err)
    );
  }
}
