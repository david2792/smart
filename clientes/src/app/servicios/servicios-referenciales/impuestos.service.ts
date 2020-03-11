import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Impuestos} from '../../componentes/referenciales-productos/modelos/impuestos'
@Injectable({
  providedIn: 'root'
})
export class ImpuestosService {

  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getImpuesto(){
    return this.http.get(`${this.API_URI}/impuestos`);
  }
  getUnImpuesto(codigo:Number):any{
    return this.http.get(`${this.API_URI}/impuestos/${codigo}`);
  }
  guardarImpuesto(impuesto:Impuestos){
    return this.http.post(`${this.API_URI}/impuestos`,impuesto);
  }

  eliminarImpuesto(codigo:number){
    return this.http.delete(`${this.API_URI}/impuestos/${codigo}`);
  }
   
  actualizarImpuesto(id:number, actualizarImpuesto:Impuestos){
    return this.http.put(`${this.API_URI}/impuestos/${id}`,actualizarImpuesto);
  }
}
