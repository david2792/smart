import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarProducto'
})
export class BuscarProductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul = [];
  for(const producto of value){
    if(producto.descripcion.toUpperCase().indexOf(arg.toUpperCase()) > -1){
      resul.push(producto);
    };
  };
return resul;

}
}