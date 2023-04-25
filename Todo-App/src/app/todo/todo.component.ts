import { Component, OnInit } from '@angular/core';
import { Akif, ITodoItem } from '../todoItem';
import { Model } from './model';
import { __values } from 'tslib';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  displayAll: boolean = false;
  inputText: string = '';

  constructor() {
    this.model.items = this.getFromLs();
  }

  ngOnInit(): void {}
  public akif = (): number => {
    return 5;
  };
  // private name: string = 'akif';
  //items = ['item', 'item2', 'item3'];
  // items: ITodoItem[] = [
  //   { description: 'iueiue', action: 'yes' },
  //   { description: 'iueiue', action: 'yes' },
  //   { description: 'iueiue', action: 'yes' },
  //   // new TodoItem('tv', 'yes'),
  //   // new TodoItem('car', 'yes'),
  //   // new TodoItem('mobil', 'no'),
  //   // new TodoItem('mobil', 'no'),
  // ];
  model = new Model();
  addItem() {
    if (this.inputText != '') {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);
      let items = this.getFromLs();
      items.push(data);
      localStorage.setItem('akif', JSON.stringify(items));
      this.inputText = '';
    } else {
      alert('bilgi giriniz');
    }
  }
  getFromLs() {
    let a: Array<Akif> = [];
    console.log(a.push({ name: 'akif' }));
    console.log(a);
    let items: ITodoItem[] = [];
    console.log(items.push({ description: 'uieuieuie', action: true }));
    console.log(items);
    let val = localStorage.getItem('akif');
    if (val != null) {
      items = JSON.parse(val);
    }
    return items;
  }
  onActionChanged(item: ITodoItem) {
    let items = this.getFromLs();
    localStorage.clear();
    items.forEach((i) => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    });
    localStorage.setItem('akif', JSON.stringify(items));
  }
  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0,
    };
  }
}
