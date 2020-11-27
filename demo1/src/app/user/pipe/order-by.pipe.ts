import { Pipe, PipeTransform } from '@angular/core';
import { data } from '../model/data.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(dataList: data[], args?: any): any {
    console.log(args);
    return  dataList.sort((a, b) => (typeof a[args] == 'string') ? a[args].localeCompare(b[args]) : a[args] - b[args]);
  }

}
