import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{ Unidad} from '../../componentes/referenciales-productos/modelos/unidadMedida'


@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getUnidad(){
    return this.http.get(`${this.API_URI}/unidades`);
  }
  getUnaUnidad(codigo:Number):any{
    return this.http.get(`${this.API_URI}/unidades/${codigo}`);
  }
  guardarUnidad(unidad:Unidad){
    return this.http.post(`${this.API_URI}/unidades`,unidad);
  }

  eliminarUnidad(codigo:number){
    return this.http.delete(`${this.API_URI}/unidades/${codigo}`);
  }
   
  actualizarUnidad(id:number, actualizarUnidad:Unidad){
    return this.http.put(`${this.API_URI}/tipodocumentos/${id}`,actualizarUnidad);
  }
}
