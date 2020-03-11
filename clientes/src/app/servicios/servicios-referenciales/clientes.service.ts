import { Injectable } from '@angular/core';
import { Cliente } from '../../componentes/referenciales-personas/modelos/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCiudad(){
    return this.http.get(`${this.API_URI}/ciudades`);
  }
  getCliente(){
    return this.http.get(`${this.API_URI}/clientes`);
  }
  getUnCliente(codigo:string):any{
    return this.http.get(`${this.API_URI}/clientes/${codigo}`);
  }
  guardarCliente(cliente:Cliente){
    return this.http.post(`${this.API_URI}/clientes`,cliente);
  }
   
  actualizarCliente(codigo:number, actualizarCliente:Cliente){
    return this.http.put(`${this.API_URI}/clientes/${codigo}`,actualizarCliente);
  }
}
