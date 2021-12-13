import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    if(arg === '' ) return value
    const resultMovie = [];
    for(const movies of value) {
      if(movies.title.toLowerCase().indexOf(arg) > -1) {
        resultMovie.push(movies)
      }
    }
    return resultMovie;
  }

}
