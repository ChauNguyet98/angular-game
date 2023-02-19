import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent implements OnInit {
  cardList: Card[] = [
    {
      id: 1,
      imageId: 'fYDrhbVlV1E',
      state: 'default',
    },
    {
      id: 2,
      imageId: 'b9drVB7xIOI',
      state: 'default',
    },
    {
      id: 3,
      imageId: 'TQ-q5WAVHj0',
      state: 'default',
    },
    {
      id: 4,
      imageId: 'pDGNBK9A0sk',
      state: 'default',
    },
    {
      id: 5,
      imageId: 'qoXgaF27zBc',
      state: 'default',
    },
    {
      id: 6,
      imageId: 'fYDrhbVlV1E',
      state: 'default',
    },
    {
      id: 7,
      imageId: 'b9drVB7xIOI',
      state: 'default',
    },
    {
      id: 8,
      imageId: 'TQ-q5WAVHj0',
      state: 'default',
    },
    {
      id: 9,
      imageId: 'pDGNBK9A0sk',
      state: 'default',
    },
    {
      id: 10,
      imageId: 'qoXgaF27zBc',
      state: 'default',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onCardChange(): void {}
}
