import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { CartService } from "../cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private cart: CartService) {}

  ngOnInit() {}
}
