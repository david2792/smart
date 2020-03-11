import { Component, OnInit } from '@angular/core';
import { TipoDocumentos } from '../modelo/tipodocumentos';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {TiposdocumentosService} from './../../../servicios/servicios-referenciales/tiposdocumentos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipodocumento-formulario',
  templateUrl: './tipodocumento-formulario.component.html',
  styleUrls: ['./tipodocumento-formulario.component.css']
})
export class TipodocumentoFormularioComponent implements OnInit {

  tipodocumento: TipoDocumentos={
    codigo:0,
    descripcion:''
  };
  editar: boolean = false;

  tipodocumentoformulario: FormGroup = this._formBuilder.group({
    descripcion:new FormControl('',Validators.required),
  });

  constructor(private _formBuilder: FormBuilder,private tipodocumentoServicio: TiposdocumentosService,private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.tipodocumentoServicio.getUnTipoDocumento(params.id).subscribe(
          res=>{
            this.tipodocumento =  res;
            console.log(this.tipodocumento);
            // this.tipodocumentoformulario.get('codigo').setValue(this.tipodocumento.codigo);
            this.tipodocumentoformulario.get('descripcion').setValue(this.tipodocumento.descripcion);
            this.editar = true;
          }
        )
    }
  }

  nuevoTipoDocumento(){    
    delete this.tipodocumento.codigo;
    this.tipodocumento.descripcion = this.tipodocumentoformulario.get('descripcion').value;
    this.tipodocumentoServicio.guardarTipoDocumento(this.tipodocumento).subscribe(
      res=>{
        this.router.navigate(['/tipodocumentos'])
      },
      err=> console.log(err)
    )
  }
  actualizarTipoDocumento(){
    this.tipodocumento.codigo=this.tipodocumentoformulario.get('descripcion').value;
    this.tipodocumentoServicio.actualizarTipoDocumento(this.tipodocumento.codigo, this.tipodocumento)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/tipodocumentos'])
      },
      err=> console.log(err)
    )
  }


}
