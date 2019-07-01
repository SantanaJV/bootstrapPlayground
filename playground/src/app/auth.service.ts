import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _loginUrl = "http://localhost:3000/api/auth/login";

  constructor(private http: HttpClient, private _router: Router) {}

  login(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
