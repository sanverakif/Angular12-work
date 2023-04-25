import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent {
  person: Person = { firstName: 'akif', lastName: 'sanver', age: 23 };
  person2: any = { firstName: 'akife', lastName: 'sanver2', age: 24 };
  zaman = new Date();
  price: number = 12345;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
