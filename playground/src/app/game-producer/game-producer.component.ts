import { Component, OnInit, Input } from "@angular/core";
import { GameService } from "../game.service";

export class Producer {
  amount = 0;
  generation = 1;
  level = 1;

  baseNumberCost = 0;
  baseProducerCost = 0;

  get numberCost() {
    return this.baseNumberCost * (this.amount + 1);
  }
  get producerCost() {
    return this.baseProducerCost * (this.amount + 1);
  }
  get upgradeCost() {
    return Math.pow(10, this.level);
  }

  constructor(numberCost, producerCost) {
    this.baseNumberCost = numberCost;
    this.baseProducerCost = producerCost;
  }

  getGeneration(): number {
    return this.generation * this.amount;
  }

  upgrade() {
    this.amount -= this.upgradeCost;
    this.level++;
    this.generation *= 2;
  }

  increaseAmount(number, preProducer: Producer): number {
    if (number >= this.numberCost) {
      if (preProducer != undefined) {
        if (preProducer.amount >= this.producerCost)
          preProducer.amount -= this.producerCost;
        else return number;
      }
      number -= this.numberCost;
      this.amount++;
    }
    return number;
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
  preview: boolean;

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

  buy() {
    this.game.number = this.producer.increaseAmount(
      this.game.number,
      this.game.producer[this.tier - 1]
    );
  }

  buyMax() {
    let number = this.producer.increaseAmount(
      this.game.number,
      this.game.producer[this.tier - 1]
    );
    while (number != this.game.number) {
      this.game.number = number;
      number = this.producer.increaseAmount(
        this.game.number,
        this.game.producer[this.tier - 1]
      );
    }
  }

  previewBuyMax() {
    let _producer = new Producer(
      Math.pow(100, this.tier),
      this.tier == 0 ? 0 : 2 * Math.pow(10, this.tier)
    );

    let _preProducer =
      this.tier == 0
        ? undefined
        : new Producer(Math.pow(100, this.tier - 1), Math.pow(10, this.tier));

    _producer.amount = this.producer.amount;
    _producer.generation = this.producer.generation;
    if (_preProducer)
      _preProducer.amount = this.game.producer[this.tier - 1].amount;

    let _number = this.game.number;
    let _currentNumber = _number;
    _currentNumber = _producer.increaseAmount(_number, _preProducer);
    while (_number != _currentNumber) {
      _number = _currentNumber;
      _currentNumber = _producer.increaseAmount(_number, _preProducer);
    }

    return _producer;
  }

  private upgrade() {
    if (this.producer.amount >= this.producer.upgradeCost)
      this.producer.upgrade();
  }
}
