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

    this.http
      .post("http://192.168.3.149:3000/api/game/save", {
        number: this.number,
        producer: producer
      })
      .subscribe(
        res => {
          console.log("Succesfully saved game.");
        },
        err => {
          console.log(err);
        }
      );
  }

  load() {
    this.http.get<any>("http://192.168.3.149:3000/api/game/load").subscribe(
      res => {
        this.number = res.number;
        for (let i = 0; i < 5; i++) {
          let producer = res.producer[i];
          this.producer[i].amount = producer.amount;
          this.producer[i].level = producer.level;
        }
      },
      err => {
        console.log("Error while trying to load data.");
      }
    );
  }
}
