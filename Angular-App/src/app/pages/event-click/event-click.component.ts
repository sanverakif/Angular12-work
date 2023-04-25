import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css'],
})
export class EventClickComponent implements OnInit {
  count: number = 2;
  constructor() {
    console.log('ctor');
  }

  ngOnInit(): void {
    console.log('ngoninit');
  }

  WriteToConsole() {
    console.log('click');
  }
  SayaciArttir() {
    this.count++;
  }
}
