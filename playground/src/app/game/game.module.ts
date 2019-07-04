import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameComponent } from "./game.component";
import { GameService } from "./game.service";
import { GameProducerComponent } from "./game-producer/game-producer.component";

@NgModule({
  declarations: [GameComponent, GameProducerComponent],
  imports: [CommonModule],
  exports: [GameComponent],
  providers: [GameService]
})
export class GameModule {}
