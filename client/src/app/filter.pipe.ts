import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'type_filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {

      transform(types: any, value: string): any[] {
      if (!types) return [];
    //  return types.filter(it => it[field] == value);
 }

}