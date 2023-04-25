import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ng-on-change-hook',
  templateUrl: './ng-on-change-hook.component.html',
  styleUrls: ['./ng-on-change-hook.component.css'],
})
export class NgOnChangeHookComponent implements OnInit, OnChanges {
  @Input() sayi: number | undefined;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {}
}
