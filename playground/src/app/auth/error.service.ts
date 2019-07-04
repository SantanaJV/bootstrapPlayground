import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ErrorService {
  ErrorCode = {
    INVALIDCREDENTIALS: 1,
    ALREADYEXISTS: 2,
    NOTFOUND: 3
  };

  constructor() {}

  handle(code: number): string {
    switch (code) {
      case this.ErrorCode.INVALIDCREDENTIALS:
        return "Invalid Credentials.";
      case this.ErrorCode.ALREADYEXISTS:
        return "A user is already registered with this email.";
      case this.ErrorCode.NOTFOUND:
        return "User not found.";
    }
  }
}
