import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarempresa'
})
export class BuscarempresaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
    for(const empresa of value){
      if(empresa.razonsocial.toUpperCase().indexOf(arg.toUpperCase()) > -1){
        resul.push(empresa);
      };
    };
  return resul;
  }

}
