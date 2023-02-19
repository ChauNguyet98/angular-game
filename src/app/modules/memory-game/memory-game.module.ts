import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { memoryGameRoutes } from './memory-game.routing';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    MemoryGameComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(memoryGameRoutes),
  ]
})
export class MemoryGameModule { }
