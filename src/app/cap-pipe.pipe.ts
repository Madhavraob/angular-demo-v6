import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capPipe'
})
export class CapPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
