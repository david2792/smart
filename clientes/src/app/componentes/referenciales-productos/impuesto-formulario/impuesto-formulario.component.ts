import { Component, OnInit } from '@angular/core';
import {Impuestos} from '../modelos/impuestos';
import {ImpuestosService} from '../../../servicios/servicios-referenciales/impuestos.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-impuesto-formulario',
  templateUrl: './impuesto-formulario.component.html',
  styleUrls: ['./impuesto-formulario.component.css']
})
export class ImpuestoFormularioComponent implements OnInit {
  impuesto: Impuestos={
    codigo:0,
    nombre:'',
    porcentaje:''
  };
  editar: boolean = false;
  constructor(private impuestoServicio:ImpuestosService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.impuestoServicio.getUnImpuesto(params.id).subscribe(
          res=>{
            console.log(res);
            this.impuesto =  res;
            this.editar = true;
          }
        )
    }
  }
  nuevoImpuesto(){
         delete this.impuesto.codigo;
          this.impuestoServicio.guardarImpuesto(this.impuesto)
        .subscribe(
          res =>{
            console.log(res);
            this.router.navigate(['impuestos'])
          },
          err => console.log(err)
        )
    
    
  }
  
  actualizarImpuesto(){
    const confirmacion = window.confirm("Desea Actualizar El Impuesto");
    if(confirmacion==true){
      this.impuestoServicio.actualizarImpuesto(this.impuesto.codigo, this.impuesto)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['impuestos'])
      },
      err=> console.log(err)

    )
    }
    
  }
 
}