import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Sucursal } from '../modelos/sucursales';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SucursalesService } from '../../../servicios/servicios-referenciales/sucursales.service';
import { Router, ActivatedRoute } from '@angular/router';

interface Empresa {
  codigo:string;
  razonsocial: string;
}  
@Component({
  selector: 'app-sucursales-formulario',
  templateUrl: './sucursales-formulario.component.html',
  styleUrls: ['./sucursales-formulario.component.css']
})



export class SucursalesFormularioComponent implements OnInit {
  sucursal: Sucursal={
    codigosucursal:0,
    codigo:'',
    nombre:'',
    telefono:'',
    empresa:''
  };
  editar: boolean = false;

  sucursalformulario: FormGroup = this._formBuilder.group({
    codigo:new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    empresa:new FormControl('',Validators.required)
  });

  //buscador de empresa//
options: Empresa[] = [];
filteredOptions: Observable<Empresa[]>;
empresa:any=[];
  constructor(private _formBuilder: FormBuilder,private sucursalServicio:SucursalesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.buscarEmpresa();
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.sucursalServicio.getUnaSucursal(params.id).subscribe(
          res=>{
            this.sucursal =  res;
            console.log(this.sucursal);
            this.sucursalformulario.get('codigo').setValue(this.sucursal.codigo);
            this.sucursalformulario.get('nombre').setValue(this.sucursal.nombre);
            this.sucursalformulario.get('telefono').setValue(this.sucursal.telefono);
            this.sucursalformulario.get('empresa').setValue(this.sucursal.empresa);
            this.editar = true;
          }
        )
    }
  }

  //Autocompletado Categoria
  private _filter(razonsocial: string): Empresa[] {
    const filterValue = razonsocial.toLowerCase();

    return this.options.filter(option => option.razonsocial.toLowerCase().indexOf(filterValue) === 0);
  }
  buscarEmpresa(){
    this.sucursalServicio.getEmpresa().subscribe(
        res=>{
          this.empresa = res;
          return this.options = this.empresa;
        },
        err => console.log(err)
      ); 

      this.filteredOptions = this.sucursalformulario.get('empresa').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.nombre),
     map(nombre => nombre ? this._filter(nombre) : this.options.slice())
   );
   
    }
//fin de autocompletado categoria
nuevaSucursal(){
  delete this.empresa.codigo;
  this.sucursal.codigo=this.sucursalformulario.get('codigo').value;
  this.sucursal.nombre=this.sucursalformulario.get('nombre').value;
  this.sucursal.telefono=this.sucursalformulario.get('telefono').value;
  this.sucursal.empresa=this.sucursalformulario.get('empresa').value;

  this.sucursalServicio.guardarSucursal(this.sucursal)
  .subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/empresas'])
    },
    err => console.log(err)
  )
}
actualizarSucursal(){
  this.sucursal.codigo=this.sucursalformulario.get('codigo').value;
  this.sucursal.nombre=this.sucursalformulario.get('nombre').value;
  this.sucursal.telefono=this.sucursalformulario.get('telefono').value;
  this.sucursal.empresa=this.sucursalformulario.get('empresa').value;
  this.sucursalServicio.actualizarSucursal(this.sucursal.codigosucursal, this.sucursal)
  .subscribe(
    res=>{
      console.log(res);
      this.router.navigate(['/empresas'])
    },
    err=> console.log(err)
  )
}

}
