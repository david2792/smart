import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarunidad'
})
export class BuscarunidadPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
    for(const unidad of value){
      if(unidad.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(unidad);
      };
    };
  return resul;
  }

}
