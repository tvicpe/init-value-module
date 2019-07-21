import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initValue'
})
export class InitValuePipe implements PipeTransform {

  transform(value: any, defaultValue: any): any {
    return value !== null ? value : defaultValue;
  }

}
