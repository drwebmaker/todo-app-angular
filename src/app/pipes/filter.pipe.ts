import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(substance: any[], searchValue: {}): any {
    return filter(substance, searchValue);
  }
}
