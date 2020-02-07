import { Component, OnInit } from '@angular/core';
import {MarcasService} from '../../../servicios/servicios-referenciales/marcas.service';


@Component({
  selector: 'app-marcas-lista',
  templateUrl: './marcas-lista.component.html',
  styleUrls: ['./marcas-lista.component.css']
})
export class MarcasListaComponent implements OnInit {
  marcas: any=[];
  filtroMarcas='';
  p:number=1;
  constructor(private marcasServicio:MarcasService) { }

  ngOnInit() {
    this.listaMarca();
  }
  listaMarca(){
    this.marcasServicio.getMarcas().subscribe(
      res =>{
          this.marcas = res;
      } ,
      err => console.log(err)
    );
  }
  eliminarMarca(codigo:number){
    const confirmacion = window.confirm("Desea Eliminar La Marca");
    if(confirmacion){
      this.marcasServicio.eliminarMarcas(codigo).subscribe(
        res=>{
          console.log(res);
          this.listaMarca();
        },
        err => console.log(err)
      )
    }

 }  

}
