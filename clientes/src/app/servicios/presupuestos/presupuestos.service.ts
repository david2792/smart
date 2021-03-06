import { Injectable, ViewChild } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { Productos } from 'src/app/componentes/referenciales-productos/modelos/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/presupuesto`);
  }
  getUnProducto(codigoproducto:string):any{
    return this.http.get(`${this.API_URI}/presupuesto/agregar/${codigoproducto}`);
  }
  getCategoria(){
    return this.http.get(`${this.API_URI}/productos/categoria`);
  }
  getMarca(){
    return this.http.get(`${this.API_URI}/productos/marca`);
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
  actualizarProducto(id:number, actualizarProducto:Productos){
    return this.http.put(`${this.API_URI}/productos/${id}`,actualizarProducto);
  }
//prueba
getPrueba():Observable<any>{
  const valores= this.http.get(`${this.API_URI}/productos/categoria`);
  return valores;
}
}
