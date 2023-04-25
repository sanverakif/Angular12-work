import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapass-input',
  templateUrl: './datapass-input.component.html',
  styleUrls: ['./datapass-input.component.css'],
})
export class DatapassInputComponent implements OnInit {
  //dışarıdan data alır ve transfer yapar.
  @Input() name: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
