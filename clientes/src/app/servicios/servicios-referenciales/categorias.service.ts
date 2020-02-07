import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{ Categorias} from '../../componentes/referenciales-productos/modelos/categorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  API_URI='http://localhost:3000/api';
  //API_URI='http://64.227.83.40:3000/api';
  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(`${this.API_URI}/categorias`);
  }
  getFamilia(){
    return this.http.get(`${this.API_URI}/categorias/familia`);
  }
  getUnaCategoria(codigo:Number):any{
    return this.http.get(`${this.API_URI}/categorias/${codigo}`);
  }
  guardarCategoria(categoria:Categorias){
    return this.http.post(`${this.API_URI}/categorias`,categoria);
  }

  eliminarCategoria(codigo:number){
    return this.http.delete(`${this.API_URI}/categorias/${codigo}`);
  }
   
  actualizarCategoria(id:number, actualizarCategoria:Categorias){
    return this.http.put(`${this.API_URI}/categorias/${id}`,actualizarCategoria);
  }
}
