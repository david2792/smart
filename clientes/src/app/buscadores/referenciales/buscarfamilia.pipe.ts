import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarfamilia'
})
export class BuscarfamiliaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
    for(const familia of value){
      if(familia.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(familia);
      };
    };
  return resul;
  }

}
