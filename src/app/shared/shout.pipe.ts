import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any, suffix: string = '!!!'): any {
    return `${value.toString().toUpperCase()}${suffix}`;
  }

}
