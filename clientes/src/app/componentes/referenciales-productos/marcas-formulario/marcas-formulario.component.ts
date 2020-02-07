import { Component, OnInit } from '@angular/core';
import {Marca} from '../modelos/marcas';
import {MarcasService} from '../../../servicios/servicios-referenciales/marcas.service';
import {ActivatedRoute,Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-marcas-formulario',
  templateUrl: './marcas-formulario.component.html',
  styleUrls: ['./marcas-formulario.component.css']
})
export class MarcasFormularioComponent implements OnInit {

  marca: Marca={
    codigo:0,
    nombre:''
  };

  editar: boolean = false;

  constructor(private marcaServicio:MarcasService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.marcaServicio.getUnaMarca(params.id).subscribe(
          res=>{
            console.log(res);
            this.marca =  res;
            this.editar = true;
          }
        )
    }
    
  }
  nuevaMarca(){
         delete this.marca.codigo;
          
          this.marcaServicio.guardarMarcas(this.marca)
        .subscribe(
          res =>{
            console.log(res);
            this.router.navigate(['/marcas'])
          },
          err => console.log(err)
        )
    
    
  }
  
  actualizarMarca(){
    const confirmacion = window.confirm("Desea Actualizar La Marca");
    if(confirmacion==true){
      this.marcaServicio.actualizarMarcas(this.marca.codigo, this.marca)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/marcas'])
      },
      err=> console.log(err)

    )
    }
    
  }
 

}