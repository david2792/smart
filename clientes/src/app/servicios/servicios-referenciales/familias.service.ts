import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{ Familia} from '../../componentes/referenciales-productos/modelos/familias';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FamiliasService {

 API_URI='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getFamilia(){
    return this.http.get(`${this.API_URI}/familias`);
  }
  getUnaFamilia(codigo:Number):any{
    return this.http.get(`${this.API_URI}/familias/${codigo}`);
  }
  guardarFamilia(familia:Familia){
    return this.http.post(`${this.API_URI}/familias`,familia);
  }

  eliminarFamilia(codigo:number){
    return this.http.delete(`${this.API_URI}/familias/${codigo}`);
  }
   
  actualizarFamilia(id:number, actualizarFamilia:Familia){
    return this.http.put(`${this.API_URI}/familias/${id}`,actualizarFamilia);
  }
}
