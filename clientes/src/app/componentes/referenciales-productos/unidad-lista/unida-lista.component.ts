import { Component, OnInit } from '@angular/core';
import {UnidadService} from '../../../servicios/servicios-referenciales/unidad-medida.service'

@Component({
  selector: 'app-unida-lista',
  templateUrl: './unida-lista.component.html',
  styleUrls: ['./unida-lista.component.css']
})
export class UnidaListaComponent implements OnInit {
  unidades: any=[];
  filtroUnidad='';
  p:number=1;
  constructor(private unidadServicio:UnidadService) { }

  ngOnInit() {
    this.listaUnidad();
  
  }
  listaUnidad(){
    this.unidadServicio.getUnidad().subscribe(
      res =>{
          this.unidades = res;
      } ,
      err => console.log(err)
    );
  }
  eliminarUnidad(codigo:number){
    const confirmacion = window.confirm("Desea Eliminar La Unidad de Medida?");
    if(confirmacion){
      this.unidadServicio.eliminarUnidad(codigo).subscribe(
        res=>{
          console.log(res);
          this.listaUnidad();
        },
        err => console.log(err)
      )
    }

 }  

}
