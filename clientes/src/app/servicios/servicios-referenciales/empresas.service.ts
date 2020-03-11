import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa} from '../../componentes/referenciales-empresas/modelos/empresas'

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  API_URI='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getEmpresa(){
    return this.http.get(`${this.API_URI}/empresas`);
  }
  getUnaEmpresa(codigo:string):any{
    return this.http.get(`${this.API_URI}/empresas/${codigo}`);
  }
  guardarEmpresa(familia:Empresa){
    return this.http.post(`${this.API_URI}/empresas`,familia);
  }

  eliminarEmpresa(codigo:number){
    return this.http.delete(`${this.API_URI}/empresas/${codigo}`);
  }
   
  actualizarEmpresa(id:number, actualizarFamilia:Empresa){
    return this.http.put(`${this.API_URI}/empresas/${id}`,actualizarFamilia);
  }
}