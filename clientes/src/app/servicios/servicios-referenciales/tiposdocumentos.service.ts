import { Injectable } from '@angular/core';
import {TipoDocumentos} from './../../componentes/referenciales-facturas/modelo/tipodocumentos';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TiposdocumentosService {
  private userUrl = 'http://localhost:5000';  // URL to REST API
  constructor(private http: HttpClient) { }

   /** GET users from the server */
   getTipoDocumentos(): Observable<TipoDocumentos[]> {
    return this.http.get<TipoDocumentos[]>(this.userUrl + '/tipodocumentos');
  }
}
