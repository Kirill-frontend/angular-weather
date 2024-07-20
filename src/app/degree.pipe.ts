import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree',
  standalone: true
})
export class DegreePipe implements PipeTransform {

  transform(value: number): string {
    return (value - 273.15).toFixed(0) + 'º';
  }

}
