import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  number = 10;
  style: any = { 'background-color': 'red' };
  constructor() {}
  ngOnInit(): void {}
}
