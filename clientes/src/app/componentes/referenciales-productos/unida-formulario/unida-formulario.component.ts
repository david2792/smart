
import { Component, OnInit } from '@angular/core';
import {Unidad} from '../modelos/unidadMedida';
import {UnidadService} from '../../../servicios/servicios-referenciales/unidad-medida.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-unida-formulario',
  templateUrl: './unida-formulario.component.html',
  styleUrls: ['./unida-formulario.component.css']
})
export class UnidaFormularioComponent implements OnInit {
  unidad: Unidad={
    codigo:0,
    nombre:'',
    simbolo:''
  };

  editar: boolean = false;

  constructor(private unidadServicio:UnidadService, private router: Router, private activedRoute: ActivatedRoute ) { }

  
  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.unidadServicio.getUnaUnidad(params.id).subscribe(
          res=>{
            console.log(res);
            this.unidad =  res;
            this.editar = true;
          }
        )
    }
  }
  nuevaUnidad(){
         delete this.unidad.codigo;
          this.unidadServicio.guardarUnidad(this.unidad)
        .subscribe(
          res =>{
            console.log(res);
            this.router.navigate(['unidades'])
          },
          err => console.log(err)
        )
    
    
  }
  
  actualizarUidad(){
    const confirmacion = window.confirm("Desea Actualizar La Unidad");
    if(confirmacion==true){
      this.unidadServicio.actualizarUnidad(this.unidad.codigo, this.unidad)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['unidades'])
      },
      err=> console.log(err)

    )
    }
    
  }
  
}
