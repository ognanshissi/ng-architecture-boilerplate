import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, size: number): string {
    if (value && value.length > size) {
      return `${value.substr(0, size)}...`;
    }
    return value;
  }

}
