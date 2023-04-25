import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  template: `<h1 class="h1">2.component</h1><p>{{email}}</p>`,
  styles: [
    `
      .h1 {
        color: red;
      }
    `,
  ],
})
export class Example2Component {
  email:string="akif@gmail.com"
  constructor() {}

  ngOnInit(): void {}
}
