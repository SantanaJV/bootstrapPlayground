import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"]
})
export class ShopComponent implements OnInit {
  item_1 = {
    product: "Airpods",
    description: "Airpods Iphone com alta qualidade de som",
    price: 54.99,
    discount: 10
  };

  item_2 = {
    product: "Notebook Gamer",
    description:
      "Notebook Gamer Asus com GPU 4GB, tela Full HD, 16GB RAM, SSD Kingston 480GB + HD WDGreen 1TB",
    price: 4799.99,
    discount: 8
  };

  item_3 = {
    product: "Mouse Multilaser",
    description:
      "Mouse indestrutível de 6ª Geração, transparente com Led Vermelho, carapaça prateada, durabilidade de décadas garnatida.",
    price: 14.99,
    discount: 0
  };

  items = [];

  constructor() {}

  ngOnInit() {
    this.items.push(this.item_1);
    this.items.push(this.item_2);
    this.items.push(this.item_3);

    this.items.forEach(item => {
      item.correctPrice = (
        item.price -
        (item.price * item.discount) / 100
      ).toFixed(2);
    });
  }
}
