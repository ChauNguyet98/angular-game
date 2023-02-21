import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent implements OnInit {
  cardList: Card[] = [];
  flippedCards: Card[] = [];
  matchedCount = 0;

  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0',
  ];

  constructor() {}

  ngOnInit(): void {
    this.setupCardList();
  }

  setupCardList(): void {
    this.cardList = [];
    this.cardImages.forEach((image) => {
      const card: Card = {
        imageId: image,
        state: 'default',
      };

      this.cardList.push({ ...card });
      this.cardList.push({ ...card });
    });

    this.cardList = this.shuffleArray(this.cardList);
  }

  shuffleArray(arr: any[]): any[] {
    return arr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cardList[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
      }
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState =
        cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;
      console.log(this.cardList);

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          console.log('complete');

          // const dialogRef = this.dialog.open(RestartDialogComponent, {
          //   disableClose: true
          // });

          // dialogRef.afterClosed().subscribe(() => {
          //   this.restart();
          // });
        }
      }
    }, 1000);
  }
}
