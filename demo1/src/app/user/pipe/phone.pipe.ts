import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return undefined;
    }
    
    return `(+84)${value.replace(/-/g, '')}`;
  }

}
