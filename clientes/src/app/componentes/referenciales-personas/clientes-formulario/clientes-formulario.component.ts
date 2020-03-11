import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelos/clientes';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../servicios/servicios-referenciales/clientes.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


interface Ciudad {
  codigo:string;
  nombre: string;
}  

@Component({
  selector: 'app-clientes-formulario',
  templateUrl: './clientes-formulario.component.html',
  styleUrls: ['./clientes-formulario.component.css']
})
export class ClientesFormularioComponent implements OnInit {
  
  cliente:Cliente={
    
    codigo:0,
    cedula:'',
    ruc:'',
    razonsocial:'',
    fechanacimiento:'',
    direccion:'',
    telefono:'',
    ciudad:'',
  };
  editar: boolean = false;

  clienteformulario: FormGroup = this._formBuilder.group({
    ciudad:new FormControl('',Validators.required),
    cedula:new FormControl('',Validators.required),
    ruc:new FormControl('',Validators.required),
    razonsocial:new FormControl('',Validators.required),
    fechanacimiento:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required)
  });

//buscador de ciudades//
options: Ciudad[] = [];
filteredOptions: Observable<Ciudad[]>;
ciudad:any=[];

  constructor(private _formBuilder: FormBuilder, private router: Router, private activedRoute: ActivatedRoute,private clienteservicio:ClientesService) { }

  ngOnInit() {
    this.buscarCiudad();
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.clienteservicio.getUnCliente(params.id).subscribe(
        res=>{
          this.cliente =  res;
          console.log(this.cliente);
          this.clienteformulario.get('cedula').setValue(this.cliente.cedula);
          this.clienteformulario.get('ruc').setValue(this.cliente.ruc);
          this.clienteformulario.get('razonsocial').setValue(this.cliente.razonsocial);
          this.clienteformulario.get('fechanacimiento').setValue(this.cliente.fechanacimiento);
          this.clienteformulario.get('telefono').setValue(this.cliente.telefono);
          this.clienteformulario.get('direccion').setValue(this.cliente.direccion);
          this.clienteformulario.get('ciudad').setValue(this.cliente.ciudad);
          this.editar = true;
        }
      )
  }
  }
 //Autocompletado ciudad
 private _filter(nombre: string): Ciudad[] {
 const filterValue = nombre.toLowerCase();

  return this.options.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
}
buscarCiudad(){
  this.clienteservicio.getCiudad().subscribe(
      res=>{
        this.ciudad = res;
        console.log(this.ciudad);
        return this.options = this.ciudad;
      },
      err => console.log(err)
    ); 

    this.filteredOptions = this.clienteformulario.get('ciudad').valueChanges
 .pipe(
   startWith(''),
   map(value => typeof value === 'string' ? value : value.nombre),
   map(nombre => nombre ? this._filter(nombre) : this.options.slice())
 );
  }
  nuevoCliente(){
    delete this.cliente.codigo;
    this.cliente.cedula=this.clienteformulario.get('cedula').value;
    this.cliente.ruc=this.clienteformulario.get('ruc').value;
    this.cliente.razonsocial=this.clienteformulario.get('razonsocial').value;
    this.cliente.fechanacimiento=this.clienteformulario.get('fechanacimiento').value;
    this.cliente.direccion=this.clienteformulario.get('direccion').value;
    this.cliente.telefono=this.clienteformulario.get('telefono').value;
    this.cliente.ciudad=this.clienteformulario.get('ciudad').value;
    this.clienteservicio.guardarCliente(this.cliente)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/empresas'])
      },
      err => console.log(err)
    )
  }
  actualizarCliente(){
    this.cliente.cedula=this.clienteformulario.get('cedula').value;
    this.cliente.ruc=this.clienteformulario.get('ruc').value;
    this.cliente.razonsocial=this.clienteformulario.get('razonsocial').value;
    this.cliente.fechanacimiento=this.clienteformulario.get('fechanacimiento').value;
    this.cliente.direccion=this.clienteformulario.get('direccion').value;
    this.cliente.telefono=this.clienteformulario.get('telefono').value;
    this.cliente.ciudad=this.clienteformulario.get('ciudad').value;
    this.clienteservicio.actualizarCliente(this.cliente.codigo, this.cliente)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/empresas'])
      },
      err=> console.log(err)
    )
  }
}
