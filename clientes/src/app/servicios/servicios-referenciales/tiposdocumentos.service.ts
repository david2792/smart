import { Injectable } from '@angular/core';
import {TipoDocumentos} from './../../componentes/referenciales-facturas/modelo/tipodocumentos';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiposdocumentosService {
  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getTipoDocumento(){
    return this.http.get(`${this.API_URI}/tipodocumentos`);
  }
  getUnTipoDocumento(codigo:Number):any{
    return this.http.get(`${this.API_URI}/tipodocumentos/${codigo}`);
  }
  guardarTipoDocumento(tipodocumento:TipoDocumentos){
    return this.http.post(`${this.API_URI}/tipodocumentos`,tipodocumento);
  }

  eliminarTipoDocumento(codigo:number){
    return this.http.delete(`${this.API_URI}/tipodocumentos/${codigo}`);
  }
   
  actualizarTipoDocumento(id:number, actualizarTipoDocumento:TipoDocumentos){
    return this.http.put(`${this.API_URI}/tipodocumentos/${id}`,actualizarTipoDocumento);
  }
}
