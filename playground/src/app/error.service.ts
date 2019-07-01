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
        return "invalid credentials";
      case this.ErrorCode.ALREADYEXISTS:
        return "already exists";
      case this.ErrorCode.NOTFOUND:
        return "not found";
    }
  }
}
