import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent {
  isLarge = true;
  isRedBox = true;
  isBlueBorder = true;
  dynamicCss: any = { large: true, redBox: true, blueOrder: true };
  ApplyCss() {
    this.isLarge = !this.isLarge;
    this.isRedBox = !this.isRedBox;
    this.isBlueBorder = !this.isBlueBorder;
  }
}
