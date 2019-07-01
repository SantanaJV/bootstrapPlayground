import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData = {};

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.userData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/home"]);
      },
      err => console.log(err)
    );
  }
}
