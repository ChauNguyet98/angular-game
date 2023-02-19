export interface Card {
  id?: number;
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}
