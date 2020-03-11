import { Component, OnInit } from '@angular/core';
import {PresentacionesService } from '../../../servicios/servicios-referenciales/presentaciones.service';

@Component({
  selector: 'app-presentaciones-lista',
  templateUrl: './presentaciones-lista.component.html',
  styleUrls: ['./presentaciones-lista.component.css']
})
export class PresentacionesListaComponent implements OnInit {
  presentaciones: any=[];
  filtroPresentaciones='';
  p:number=1;
  constructor(private servicioPresentacion:PresentacionesService) { }

  ngOnInit() {
    this.listaPresentacion();
  
  }
  listaPresentacion(){
    this.servicioPresentacion.getPresentacion().subscribe(
      res =>{
          this.presentaciones = res;
      } ,
      err => console.log(err)
    );
  }
  eliminarPresentacion(codigo:number){
    const confirmacion = window.confirm("Desea Eliminar La Presentacion");
    if(confirmacion){
      this.servicioPresentacion.eliminarPresentacion(codigo).subscribe(
        res=>{
          console.log(res);
          this.listaPresentacion();
        },
        err => console.log(err)
      )
    }

 }  

}