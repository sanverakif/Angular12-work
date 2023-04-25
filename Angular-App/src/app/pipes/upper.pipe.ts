import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var res = value as string;
    return res.toUpperCase();
  }

}
