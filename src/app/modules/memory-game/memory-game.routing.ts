import { Routes } from '@angular/router';
import { SYSTEM_CONST } from 'src/app/core';
import { MemoryGameComponent } from './memory-game/memory-game.component';

export const memoryGameRoutes: Routes = [
  {
    path: SYSTEM_CONST.ROUTE.MEMORY_GAME,
    component: MemoryGameComponent,
  },
];
