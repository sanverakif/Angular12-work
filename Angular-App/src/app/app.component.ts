import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-App';
  name: string = 'akif';
  isUser: boolean = false;
  createdDate: Date = new Date();
  names: string[] = ['akif', 'emre'];
  isUsers: boolean[] = [true, false];


  constructor() {
    console.log(`name: ${this.name}`);
    console.log(`isUser: ${this.isUser}`);
  }

  Method1() {}
}

class Product {
  name: string;
  //field
  price: number;
  protected category: string;
  isPublish: boolean;
  //ctor
  constructor(
    name: string,
    price: number,
    category: string,
    isPublish: boolean
  ) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.isPublish = isPublish;
  }
  //method
  Sum(a1: number, a2: number): number {
    return a1 + a2;
  }
}

class Product2 extends Product {
  constructor(
    name: string,
    price: number,
    category: string,
    isPublish: boolean,
    parametre2: Date
  ) {
    super(name, price, category, isPublish);
  }
  Topla() {
    this.category = 'uieuie';
    this.name = 'Akif';
    this.Sum(5, 5);

    var a = new Product('u', 1, 'uu', false);
  }
}

interface IProduct {
  name: string;
  price: number;
  Hello: () => string;
  Hello2(): void;
  Hello3(): number;
}

class Car implements IProduct {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  Hello() {
    return 'selam';
  }
  Hello2(): void {
    throw new Error('Method not implemented.');
  }
  Hello3(): number {
    throw new Error('Method not implemented.');
  }
}

interface IProductService2 {
  Name: string;
  Price: number;
}

class Home {
  product: IProductService2 = { Name: 'uiuieuie', Price: 200 };

  constructor(product: IProductService2) {
    this.product = { Name: 'aiueuie', Price: 200 };
  }
}
