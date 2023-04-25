import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
    element.nativeElement.style.Color = 'white';
  }
}
