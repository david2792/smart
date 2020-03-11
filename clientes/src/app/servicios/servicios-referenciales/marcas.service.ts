import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{ Marca} from '../../componentes/referenciales-productos/modelos/marcas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
 API_URI='http://localhost:3000/api';
 //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getMarcas(){
    return this.http.get(`${this.API_URI}/marcas`);
  }
  getUnaMarca(codigo:Number):any{
    return this.http.get(`${this.API_URI}/marcas/${codigo}`);
  }
  guardarMarcas(marca:Marca){
    return this.http.post(`${this.API_URI}/marcas`,marca);
  }

  eliminarMarcas(codigo:number){
    return this.http.delete(`${this.API_URI}/marcas/${codigo}`);
  }
   
  actualizarMarcas(id:number, actualizarMarcas:Marca){
    return this.http.put(`${this.API_URI}/marcas/${id}`,actualizarMarcas);
  }
}
Observable