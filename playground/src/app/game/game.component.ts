import { Component, OnInit } from "@angular/core";

class Producer {
  amount = 0;
  generation = 1;

  numberCost = 0;
  producerCost = 0;

  constructor(numberCost, producerCost) {
    this.numberCost = numberCost;
    this.producerCost = producerCost;
  }

  getGeneration(): number {
    return this.generation * this.amount;
  }
}

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  producer = [];
  number = 10;

  constructor() {}

  ngOnInit() {
    this.producer = [
      new Producer(1, 0),
      new Producer(100, 2),
      new Producer(10000, 200),
      new Producer(1000000, 20000),
      new Producer(100000000, 2000000)
    ];

    setInterval(() => {
      this.number += this.producer[0].generation * this.producer[0].amount;
    }, 1000);
    setInterval(() => {
      this.producer[0].amount +=
        this.producer[1].generation * this.producer[1].amount;
    }, 1000);
    setInterval(() => {
      this.producer[1].amount +=
        this.producer[2].generation * this.producer[2].amount;
    }, 1000);
    setInterval(() => {
      this.producer[2].amount +=
        this.producer[3].generation * this.producer[3].amount;
    }, 1000);
    setInterval(() => {
      this.producer[3].amount +=
        this.producer[4].generation * this.producer[4].amount;
    }, 1000);

    /*
    for (var i = 0; i < 5; i++) {
      if (i == 0) {
        setInterval(() => {
          this.number += this.producer[i].generation * this.producer[i].amount;
        }, 1000);
      } else {
        setInterval(() => {
          this.producer[i - 1].amount +=
            this.producer[i].generation * this.producer[i].amount;
        }, 1000);
      }
    }*/
  }

  buy(tier: number) {
    if (this.number < this.producer[tier].numberCost) return;

    if (this.producer[tier].producerCost > 0) {
      if (this.producer[tier - 1].amount < this.producer[tier].producerCost)
        return;

      this.producer[tier - 1].amount -= this.producer[tier].producerCost;
    }
    this.number -= this.producer[tier].numberCost;
    this.producer[tier].amount++;
    this.producer[tier].numberCost *= 2;
    this.producer[tier].producerCost *= 2;
  }
}
