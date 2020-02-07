import { Component, OnInit } from '@angular/core';
import {Familia} from '../modelos/familias';
import {FamiliasService} from '../../../servicios/servicios-referenciales/familias.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-familia-formulario',
  templateUrl: './familia-formulario.component.html',
  styleUrls: ['./familia-formulario.component.css']
})
export class FamiliaFormularioComponent implements OnInit {
  familia: Familia={
    codigo:0,
    nombre:''
  };
  editar: boolean = false;
  constructor(private familiaServicio:FamiliasService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.familiaServicio.getUnaFamilia(params.id).subscribe(
          res=>{
            console.log(res);
            this.familia =  res;
            this.editar = true;
          }
        )
    }
  }
  nuevaFamilia(){
         delete this.familia.codigo;
          
          this.familiaServicio.guardarFamilia(this.familia)
        .subscribe(
          res =>{
            console.log(res);
            this.router.navigate(['/familias'])
          },
          err => console.log(err)
        )
    
    
  }
  
  actualizarFamilia(){
    const confirmacion = window.confirm("Desea Actualizar La Familia");
    if(confirmacion==true){
      this.familiaServicio.actualizarFamilia(this.familia.codigo, this.familia)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/familias'])
      },
      err=> console.log(err)

    )
    }
    
  }
}