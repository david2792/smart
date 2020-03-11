import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{Presentacion} from '../../componentes/referenciales-productos/modelos/presentaciones'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PresentacionesService {

  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getPresentacion(){
    return this.http.get(`${this.API_URI}/presentaciones`);
  }
  getUnaPresentacion(codigo:Number):any{
    return this.http.get(`${this.API_URI}/presentaciones/${codigo}`);
  }
  guardarPresentacion(marca:Presentacion){
    return this.http.post(`${this.API_URI}/presentaciones`,marca);
  }

  eliminarPresentacion(codigo:number){
    return this.http.delete(`${this.API_URI}/presentaciones/${codigo}`);
  }
   
  actualizarPresentacion(id:number, actualizarPresentaciones:Presentacion){
    return this.http.put(`${this.API_URI}/presentaciones/${id}`,actualizarPresentaciones);
  }
}

