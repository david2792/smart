import { Component, OnInit } from '@angular/core';
import { Empresa } from '../modelos/empresas';
import { EmpresasService } from '../../../servicios/servicios-referenciales/empresas.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas-formulario',
  templateUrl: './empresas-formulario.component.html',
  styleUrls: ['./empresas-formulario.component.css']
})
export class EmpresasFormularioComponent implements OnInit {
  empresa: Empresa={
    codigo:0,
    ruc:'',
    razonsocial:'',
    nombrefantasia:'',
    web:''
  };
  editar: boolean = false;

  empresaformulario: FormGroup = this._formBuilder.group({
    ruc:new FormControl('',Validators.required),
    razonsocial:new FormControl('',Validators.required),
    nombrefantasia:new FormControl('',Validators.required),
    web:new FormControl('',Validators.required)
  });
  constructor(private _formBuilder: FormBuilder,private empresaServicio:EmpresasService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.empresaServicio.getUnaEmpresa(params.id).subscribe(
          res=>{
            this.empresa =  res;
            this.empresaformulario.get('ruc').setValue(this.empresa.ruc);
            this.empresaformulario.get('razonsocial').setValue(this.empresa.razonsocial);
            this.empresaformulario.get('nombrefantasia').setValue(this.empresa.nombrefantasia);
            this.empresaformulario.get('web').setValue(this.empresa.web);
            this.editar = true;
          }
        )
    }
  
  }

  nuevaEmpresa(){
    delete this.empresa.codigo;
    this.empresa.ruc=this.empresaformulario.get('ruc').value;
    this.empresa.razonsocial=this.empresaformulario.get('razonsocial').value;
    this.empresa.nombrefantasia=this.empresaformulario.get('nombrefantasia').value;
    this.empresa.web=this.empresaformulario.get('web').value;
  
    this.empresaServicio.guardarEmpresa(this.empresa)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/empresas'])
      },
      err => console.log(err)
    )
  }
actualizarEmpresa(){
    this.empresa.ruc=this.empresaformulario.get('ruc').value;
    this.empresa.razonsocial=this.empresaformulario.get('razonsocial').value;
    this.empresa.nombrefantasia=this.empresaformulario.get('nombrefantasia').value;
    this.empresa.web=this.empresaformulario.get('web').value;
    this.empresaServicio.actualizarEmpresa(this.empresa.codigo, this.empresa)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/empresas'])
      },
      err=> console.log(err)

    )
}

}
