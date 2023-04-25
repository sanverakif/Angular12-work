import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  name: string[] = ['ahmet', 'akif', 'ali'];
  name1 = [
    { a: 'uieueuie', aaa: 2 },
    { a: 'eiiueu', aaa: 4 },
  ];
  userList: User[] = [];
  constructor() {
    this.userList.push(new User(1, 'akif', 'akif@gmail.com'));
    this.userList.push(new User(2, 'akif2', 'akif2@gmail.com'));
    this.userList.push(new User(3, 'akif3', 'akif3@gmail.com'));
  }
  ngOnInit(): void {}
}
