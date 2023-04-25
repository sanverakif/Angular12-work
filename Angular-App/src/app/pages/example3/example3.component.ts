import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  template: `<h1 class="h1">3.component</h1>`,
  styles: [
    `
      .h1 {
        color: green;
      }
    `,
  ],
})
export class Example3Component {
  email:string="akif@gmail.com"
  constructor() {}

  ngOnInit(): void {}
}
