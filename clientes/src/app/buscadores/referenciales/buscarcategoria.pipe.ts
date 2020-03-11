import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarcategoria'
})
export class BuscarcategoriaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
    for(const categoria of value){
      if(categoria.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(categoria);
      };
    };
  return resul;
  }
}
