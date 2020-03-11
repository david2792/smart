import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sucursal } from '../../componentes/referenciales-empresas/modelos/sucursales';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  API_URI='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getEmpresa(){
    return this.http.get(`${this.API_URI}/empresas`);
  }
  getSucursal(){
    return this.http.get(`${this.API_URI}/sucursales`);
  }
  getUnaSucursal(codigo:string):any{
    return this.http.get(`${this.API_URI}/sucursales/${codigo}`);
  }
  guardarSucursal(sucursal:Sucursal){
    return this.http.post(`${this.API_URI}/sucursales`,sucursal);
  }
   
  actualizarSucursal(id:number, actualizarSucursal:Sucursal){
    return this.http.put(`${this.API_URI}/sucursales/${id}`,actualizarSucursal);
  }
}