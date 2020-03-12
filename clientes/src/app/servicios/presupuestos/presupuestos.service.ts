import { Injectable, ViewChild } from '@angular/core';
import {BuscatProductoComponent} from '../../componentes/administrativo-presupuesto/buscat-producto/buscat-producto.component'
import { HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  hijo:BuscatProductoComponent
  constructor(){ }

  getPoductoDatos(){
    return this.hijo.listaProducto();
  }
}
