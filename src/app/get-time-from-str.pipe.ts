import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'getTimeFromStr',
  standalone: true
})
export class GetTimeFromStrPipe implements PipeTransform {


  transform(value: string): string {
    return moment(value).format('HH:mm')
  }

}
