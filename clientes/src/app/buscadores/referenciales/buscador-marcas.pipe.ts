import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorMarcas'
})
export class BuscadorMarcasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
    for(const marca of value){
      if(marca.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(marca);
      };
    };
  return resul;
  }

}
