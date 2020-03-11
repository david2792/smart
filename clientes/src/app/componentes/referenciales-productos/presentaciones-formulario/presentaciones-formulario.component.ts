import { Component, OnInit } from '@angular/core';
import {Presentacion} from '../modelos/presentaciones';
import {PresentacionesService} from '../../../servicios/servicios-referenciales/presentaciones.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-presentaciones-formulario',
  templateUrl: './presentaciones-formulario.component.html',
  styleUrls: ['./presentaciones-formulario.component.css']
})
export class PresentacionesFormularioComponent implements OnInit {
  presentacion: Presentacion={
    codigo:0,
    descripcion:''
  };

  editar: boolean = false;
  constructor(private presentacionServicio:PresentacionesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.presentacionServicio.getUnaPresentacion(params.id).subscribe(
          res=>{
            console.log(res);
            this.presentacion =  res;
            this.editar = true;
          }
        )
    }
  }
  nuevaPresentacion(){
         delete this.presentacion.codigo;
          
          this.presentacionServicio.guardarPresentacion(this.presentacion)
        .subscribe(
          res =>{
            console.log(res);
            this.router.navigate(['presentaciones'])
          },
          err => console.log(err)
        )
    
    
  }
  
  actualizarPresentacion(){
    const confirmacion = window.confirm("Desea Actualizar La Presentacion");
    if(confirmacion==true){
      this.presentacionServicio.actualizarPresentacion(this.presentacion.codigo, this.presentacion)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['presentaciones'])
      },
      err=> console.log(err)

    )
    }
    
  }

}