import { Injectable, OnInit } from "@angular/core";
import { Producer } from "./game-producer/game-producer.component";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GameService {
  producer: Producer[] = [];
  number: number = 1;

  constructor(private http: HttpClient) {}

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

  save() {
    let producer = [];
    this.producer.forEach(p => {
      let producerObject = { amount: 0, level: 1 };
      producerObject.amount = p.amount;
      producerObject.level = p.level;
      producer.push(producerObject);
    });

    console.log(producer);

    return this.http.post("http://localhost:3000/api/game/save", {
      number: this.number,
      producer: producer
    });
  }

  load() {}
}
