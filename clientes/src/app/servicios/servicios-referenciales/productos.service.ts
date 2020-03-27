import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Productos } from '../../componentes/referenciales-productos/modelos/productos';
import { Observable } from 'rxjs';
import {Lista } from '../../componentes/referenciales-productos/modelos/listaPrecio';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }
  getCodigoProducto(){
    return this.http.get(`${this.API_URI}/productos/agregar`);
  }
  getUnProducto(codigobarra:Number):any{
    return this.http.get(`${this.API_URI}/productos/${codigobarra}`);
  }
  getCategoria(){
    return this.http.get(`${this.API_URI}/productos/categoria`);
  }
  getMarca(){
    return this.http.get(`${this.API_URI}/productos/marca`);
  }
  getDeposito(){
    return this.http.get(`${this.API_URI}/productos/deposito`);
  }
  getMedida(){
    return this.http.get(`${this.API_URI}/productos/unidades`);
  }
  getPresentacion(){
    return this.http.get(`${this.API_URI}/productos/presentacion`);
  }
  getCImpuesto(){
    return this.http.get(`${this.API_URI}/productos/impuesto`);
  }
  guardarProductos(producto:Productos){
    return this.http.post(`${this.API_URI}/productos`,producto);
  }
  eliminarProducto(codigoproducto:number){
    return this.http.delete(`${this.API_URI}/productos/${codigoproducto}`);
  }
  actualizarProducto(id:string, actualizarProducto:Productos){
    return this.http.put(`${this.API_URI}/productos/${id}`,actualizarProducto);
  }
  // aca comienza la parte de lista de precio
  getUnaLista(id:string):any{
    return this.http.get(`${this.API_URI}/listaprecio/${id}`);
  }
  getUnProductoLista(id:string):any{
    return this.http.get(`${this.API_URI}/listaprecio/${id}`);
  }
  guardarLista(id:string,listaprecio:Lista):any{
    return this.http.post(`${this.API_URI}/listaprecio/${id}`,listaprecio);
  }
//prueba
getPrueba():Observable<any>{
  const valores= this.http.get(`${this.API_URI}/productos/categoria`);
  return valores;
}
}
