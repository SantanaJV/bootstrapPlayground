import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}
}
