import { Injectable, OnInit } from "@angular/core";
import { Producer } from "./game-producer/game-producer.component";

@Injectable({
  providedIn: "root"
})
export class GameService {
  producer: Producer[] = [];
  number: number = 1;

  constructor() {}

  getProducerName(tier) {
    switch (tier) {
      case 0:
        return "One";
      case 1:
        return "Two";
      case 2:
        return "Four";
      case 3:
        return "Eight";
      case 4:
        return "Sixteen";
      default:
        break;
    }
  }
}
