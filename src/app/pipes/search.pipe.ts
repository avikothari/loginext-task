import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(codes: any[], searchText: any): any[] {

    if (codes) {
      if (!codes && !searchText) {
        return codes
      } else if (searchText === undefined || searchText === null) {
        return [];
      }

      return codes.filter(code =>
        code.location.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        code.pincode.indexOf(searchText) !== -1

      );
    }else 
      return []

  }

}
