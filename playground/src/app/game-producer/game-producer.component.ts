import { Component, OnInit, Input } from "@angular/core";
import { GameService } from "../game.service";

export class Producer {
  amount = 0;
  generation = 1;

  baseNumberCost = 0;
  baseProducerCost = 0;
  numberCost = 0;
  producerCost = 0;
  upgradeCost = 10;

  constructor(numberCost, producerCost) {
    this.baseNumberCost = numberCost;
    this.baseProducerCost = producerCost;
    this.numberCost = this.baseNumberCost;
    this.producerCost = this.baseProducerCost;
  }

  getGeneration(): number {
    return this.generation * this.amount;
  }
}

@Component({
  selector: "app-game-producer",
  templateUrl: "./game-producer.component.html",
  styleUrls: ["./game-producer.component.css"]
})
export class GameProducerComponent implements OnInit {
  name: string;
  producer: Producer;
  @Input() tier = 0;

  constructor(private game: GameService) {}

  ngOnInit() {
    this.producer = new Producer(
      Math.pow(100, this.tier),
      this.tier == 0 ? 0 : 2 * Math.pow(10, this.tier)
    );
    this.game.producer.unshift(this.producer);
    setInterval(() => {
      if (this.tier == 0) this.game.number += this.producer.getGeneration();
      else
        this.game.producer[
          this.tier - 1
        ].amount += this.producer.getGeneration();
    }, 1000);
    this.name = this.game.getProducerName(this.tier);
  }

  buy(amount: number) {
    let numberCost = this.producer.numberCost * amount;
    let producerCost = this.producer.producerCost * amount;

    if (this.game.number < numberCost) return;
    if (producerCost > 0)
      if (this.game.producer[this.tier - 1].amount < producerCost) return;
      else this.game.producer[this.tier - 1].amount -= producerCost;

    this.game.number -= numberCost;
    this.producer.amount += amount;
    this.producer.numberCost += this.producer.baseNumberCost;
    this.producer.producerCost += this.producer.baseProducerCost;
  }

  private upgrade() {
    if (this.producer.amount < this.producer.upgradeCost) return;

    this.producer.amount -= this.producer.upgradeCost;
    this.producer.generation *= 2;
    this.producer.upgradeCost *= 10;
  }
}
