import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  name: string = 'akif';
  constructor() {}

  //componentin ctoru çalıştıktan sonra çalışan methottur.
  //component ayağa kalkarken ctordan sonra çalışır.
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
