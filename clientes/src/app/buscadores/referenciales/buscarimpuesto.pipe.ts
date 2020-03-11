import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarimpuesto'
})
export class BuscarimpuestoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
    for(const impuesto of value){
      if(impuesto.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(impuesto);
      };
    };
  return resul;
  }

}
