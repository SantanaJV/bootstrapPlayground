import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css", "../app.component.css"]
})
export class CalculatorComponent implements OnInit {
  result = 0;
  input = 0;
  previous = 0; // 1 = ADD, 2 = SUBTRACT, 3 = MULTIPLY, 4 = DIVIDE
  equalsWasPressed = false;

  constructor() {}

  ngOnInit() {}

  clearInput() {
    this.input = 0;
  }

  clear() {
    this.input = 0;
    this.result = 0;
    this.previous = 0;
  }

  erase() {
    this.input = Math.floor(this.input / 10);
  }

  digit(digit) {
    this.input *= 10;
    this.input += digit;
  }

  operate() {
    switch (this.previous) {
      case 0:
        this.result += this.input;
        break;
      case 1:
        this.result += this.input;
        break;
      case 2:
        this.result -= this.input;
        break;
      case 3:
        this.result *= this.input;
        break;
      case 4:
        this.result = this.input != 0 ? this.result / this.input : 0;
    }
  }

  add() {
    if (this.equalsWasPressed) {
      this.equalsWasPressed = false;
    } else {
      this.operate();
    }
    this.previous = 1;
    this.input = 0;
  }

  subtract() {
    if (this.equalsWasPressed) {
      this.equalsWasPressed = false;
    } else {
      this.operate();
    }
    this.previous = 2;
    this.input = 0;
  }

  multiply() {
    if (this.equalsWasPressed) {
      this.equalsWasPressed = false;
    } else {
      this.operate();
    }
    this.previous = 3;
    this.input = 0;
  }

  divide() {
    if (this.equalsWasPressed) {
      this.equalsWasPressed = false;
    } else {
      this.operate();
    }
    this.previous = 4;
    this.input = 0;
  }

  equals() {
    this.operate();
    this.equalsWasPressed = true;
  }
}
