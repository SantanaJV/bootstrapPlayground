import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css", "../app.component.css"]
})
export class CalculatorComponent implements OnInit {
  input = "";
  result = 0;

  constructor() {}

  ngOnInit() {}

  digit(digit) {
    this.input += digit;
  }

  equals() {
    let exp = Function("return " + this.input)();
    this.result = exp ? exp : "Error";
  }

  clear() {
    this.input = "";
    this.result = 0;
  }

  erase() {
    let exp = this.input;
    exp = exp.substring(0, exp.length - 1);
    this.input = exp;
  }
}
