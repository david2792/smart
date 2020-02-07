import { Component, OnInit } from '@angular/core';
import {FamiliasService} from '../../../servicios/servicios-referenciales/familias.service';

@Component({
  selector: 'app-familia-lista',
  templateUrl: './familia-lista.component.html',
  styleUrls: ['./familia-lista.component.css']
})
export class FamiliaListaComponent implements OnInit {

  familias: any=[];
  filtroFamilia='';
  p:number=1;
  constructor(private familiaServicio:FamiliasService) { 

  }

  ngOnInit() {
    this.listaFamilia();
  
  }
  listaFamilia(){
  
    this.familiaServicio.getFamilia().subscribe(
      res =>{
          this.familias = res;
        
      } ,
      err => console.log(err)
    );
  }
  eliminarFamilia(codigo:number){
    const confirmacion = window.confirm("Desea Eliminar La Familia");
    if(confirmacion){
      this.familiaServicio.eliminarFamilia(codigo).subscribe(
        res=>{
          console.log(res);
          this.listaFamilia();
        },
        err => console.log(err)
      )
    }

 }  

}