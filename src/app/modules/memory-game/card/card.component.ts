import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'matched',
        style({
          visibility: 'false',
          transform: 'scale(0.05)',
          opacity: 0,
        })
      ),
      transition('default => flipped', [animate('800ms')]),
      transition('flipped => default', [animate('800ms')]),
      transition('* => matched', [animate('800ms')]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() data: Card = {
    imageId: 'pDGNBK9A0sk',
    state: 'default',
  };

  @Output() cardClicked: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {}
}
