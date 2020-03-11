import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarpresentacion'
})
export class BuscarpresentacionPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resul = [];
    for(const presentacion of value){
      if(presentacion.descripcion.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(presentacion);
      };
    };
  return resul;
  }

}
