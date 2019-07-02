import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";
import { Producer } from "../game-producer/game-producer.component";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  array = ["a", "b", "c", "d"];
  constructor(private game: GameService) {}

  ngOnInit() {}

  generateArray(count: number): Array<number> {
    let indexes = [];
    for (let i = count - 1; i >= 0; i--) {
      indexes.push(i);
    }
    return indexes;
  }

  save() {
    this.game.save().subscribe(
      res => {
        console.log("Succesfully saved game.");
      },
      err => {
        console.log(err);
      }
    );
  }
}
