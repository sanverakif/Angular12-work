import { ITodoItem } from '../todoItem';

export class Model {
  name: string;
  items: ITodoItem[];

  constructor() {
    this.name = 'akif';
    this.items = [
      {
        description: 'samsung',
        action: true,
      },
      {
        description: 'tesla',
        action: true,
      },
      {
        description: 'gs',
        action: false,
      },
    ];
  }
}
