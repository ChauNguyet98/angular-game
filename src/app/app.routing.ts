import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/memory-game/memory-game.module').then(
        (m) => m.MemoryGameModule
      ),
  },
];
