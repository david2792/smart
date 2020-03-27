import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductosService } from '../../../servicios/servicios-referenciales/productos.service';
import { Productos } from '../modelos/productos';
import {ActivatedRoute,Router} from '@angular/router';
//buscadores Interface
interface User {
  codigo:string;
  descripcion: string;
}
interface Marca{
  codigo:string;
  Descripcion: string;
}
interface Impuesto{
  codigo:string;
  Descripcion: string;
}
interface Deposito{
  codigo:string;
  Nombre: string;
}
//fin inferface

@Component({
  selector: 'app-productos-formulario',
  templateUrl: './productos-formulario.component.html',
  styleUrls: ['./productos-formulario.component.css'],
})
export class ProductosFormularioComponent implements OnInit {

  productos: Productos={
        CodigoProducto:'',
        Categoria:'',
        Marca:'',
        Impuesto:'',
        CodigoBarra:'',
        Descripcion:'',
        Deposito:0,
        StockActual:0,
        StockMinimo:0,

  };

  isLinear = false;
 // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tercerFromGroup: FormGroup;
  detallestock: FormGroup;
  formualrioProducto: FormGroup;

//buscador de categoria//
options: User[] = [];
filteredOptions: Observable<User[]>;
categoria:any=[];
valores:any=[];
//fin de buscador//
//buscador de marca//
optionsMarcas: Marca[] = [];
filteredOptionsMarcas: Observable<Marca[]>;
marca:any=[];
//fin de buscador//
//buscador de impuesto//
optionsImpuesto: Impuesto[] = [];
filteredOptionsImpuesto: Observable<Impuesto[]>;
impuesto:any=[];
//fin de buscador//
//buscador de deposito//
optionsDeposito: Deposito[] = [];
filteredOptionsDeposito: Observable<Deposito[]>;
deposito:any=[];
//fin de buscador//
public codigo='';
public _data: any;
editar: boolean = false;

//pruenas borrar

firstFormGroup: FormGroup = this._formBuilder.group({
  stateGroup: '',
  categoria:new FormControl('',Validators.required),
  marca:new FormControl('',Validators.required),
  impuesto:new FormControl('',Validators.required),
  deposito:new FormControl('',Validators.required),

});

  constructor(private _formBuilder: FormBuilder,private productoServicio:ProductosService, private router: Router, private activedRoute: ActivatedRoute, ) { }

  ngOnInit() {
   this.buscarCategoria();
   this.buscarMarca();
   this.buscarImpuesto();
   this.buscarDeposito();
   this.getCodigo();
    this.secondFormGroup = this._formBuilder.group({  
      codigobarra:new FormControl('',Validators.required),
      codigoproducto:new FormControl('',Validators.required),
      descripcion:new FormControl('',Validators.required),
    });
    this.tercerFromGroup = this._formBuilder.group({
        stockactual:new FormControl('',[Validators.pattern('^[0-9]+')]),
        stockminimo:new FormControl('',[Validators.pattern('^[0-9]+')]),
    });

    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.productoServicio.getUnProducto(params.id).subscribe(
          res=>{
           //primer grupo
           this.productos=  res;
           console.log(this.productos.Categoria);
           this.firstFormGroup.get('categoria').setValue(this.productos.Categoria);
           this.firstFormGroup.get('marca').setValue(this.productos.Marca);
           this.firstFormGroup.get('impuesto').setValue(this.productos.Impuesto);
           this.firstFormGroup.get('deposito').setValue(this.productos.Deposito);
           //segundo grupo
           this.secondFormGroup.get('codigobarra').setValue(this.productos.CodigoBarra);
           this.secondFormGroup.get('codigoproducto').setValue(this.productos.CodigoProducto);
           this.secondFormGroup.get('descripcion').setValue(this.productos.Descripcion);
           //tercer grupo stock
           this.tercerFromGroup.get('stockactual').setValue(this.productos.StockActual);
           this.tercerFromGroup.get('stockminimo').setValue(this.productos.StockMinimo);
           this.editar = true;
          }
        )
    }
  }
  getCodigo(){
    this.productoServicio.getCodigoProducto().subscribe( 
      res=>{
        const cod = res;
        console.log(cod);
        this.secondFormGroup.get('codigoproducto').setValue(cod);
    })
  }
  actualizarProducto(){
    const confirmacion = window.confirm("Desea Actualizar El Producto?");
    if(confirmacion==true){
      this.productos.Categoria=this.firstFormGroup.get('categoria').value;
      this.productos.Marca=this.firstFormGroup.get('marca').value;
      this.productos.Impuesto=this.firstFormGroup.get('impuesto').value;
      this.productos.Deposito = this.firstFormGroup.get('deposito').value;
      this.productos.CodigoProducto = this.secondFormGroup.get('codigoproducto').value;
      this.productos.CodigoBarra = this.secondFormGroup.get('codigobarra').value;
      this.productos.Descripcion = this.secondFormGroup.get('descripcion').value;  
      this.productos.StockActual = this.tercerFromGroup.get('stockactual').value;  
      this.productos.StockMinimo = this.tercerFromGroup.get('stockminimo').value;  
      this.productoServicio.actualizarProducto(this.productos.CodigoProducto, this.productos)
    .subscribe(
      res=>{
        console.log(res);
        const confirmacion = window.confirm("Desea Agregar La Lista De Precio?");
        if(confirmacion==true){
          this.router.navigate(['/listaprecio/',this.productos.CodigoProducto=this.secondFormGroup.get('codigoproducto').value]);
        }else{
          this.router.navigate(['/productos']);
        }
      },
      err=> console.log(err)

    )
    }
  }
  nuevoProductos(){
  this.productos.CodigoProducto=this.secondFormGroup.get('codigoproducto').value;
  this.productos.Categoria=this.firstFormGroup.get('categoria').value;
  this.productos.Marca=this.firstFormGroup.get('marca').value;
  this.productos.Impuesto=this.firstFormGroup.get('impuesto').value;
  this.productos.Deposito=this.firstFormGroup.get('deposito').value;
  this.productos.CodigoBarra = this.secondFormGroup.get('codigobarra').value;
  this.productos.Descripcion = this.secondFormGroup.get('descripcion').value;    
  this.productos.Deposito = this.firstFormGroup.get('deposito').value;
  this.productos.StockActual = this.tercerFromGroup.get('stockactual').value;  
  this.productos.StockMinimo = this.tercerFromGroup.get('stockminimo').value;   
  console.log(this.productos);

    this.productoServicio.guardarProductos(this.productos)
    .subscribe(
      res =>{
        console.log(res);
        const confirmacion = window.confirm("Desea Agregar La Lista De Precio?");
        if(confirmacion==true){
          this.router.navigate(['/listaprecio/',this.productos.CodigoProducto=this.secondFormGroup.get('codigoproducto').value]);
        }else{
        this.router.navigate(['/productos']);
        }
      },
      err => console.log(err)
    )
  }
 //Autocompletado Categoria
 displayFn(user: User[]): (codigo: string) => string | null {
  if(this.editar==false){
    return (codigo: string) => { 
      const correspondingOption = Array.isArray(this.options) ? this.options.find(option => option.codigo === codigo) : null;
      return correspondingOption ? correspondingOption.descripcion : '';
  }
    }else{
      return (codigo: string) => { 
        const correspondingOption = Array.isArray(this.options) ? this.options.find(option => option.codigo === codigo) : null;
        const v=  'jj';
        return correspondingOption ? correspondingOption.descripcion : 'JSON.stringify(v)';
    }
}
}

  private _filter(descripcion: string): User[] {
    const filterValue = descripcion.toLowerCase();

    return this.options.filter(option => option.descripcion.toLowerCase().indexOf(filterValue) === 0);
  }
  buscarCategoria(){
    this.productoServicio.getCategoria().subscribe(
        res=>{
          this.categoria = res;
          return this.options = this.categoria;
        },
        err => console.log(err)
      ); 

      this.filteredOptions = this.firstFormGroup.get('categoria').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.descripcion),
     map(descripcion => descripcion ? this._filter(descripcion) : this.options.slice())
   );
   
    }
//fin de autocompletado categoria
//Autocompletado Marcas
displayFnMarca(user: Marca[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsMarcas) ? this.optionsMarcas.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.Descripcion : '';
  }
  
}
private _filterMarca(Descripcion: string): Marca[] {
  const filterValue = Descripcion.toLowerCase();

  return this.optionsMarcas.filter(option => option.Descripcion.toLowerCase().indexOf(filterValue) === 0);
}

buscarMarca(){
  this.productoServicio.getMarca().subscribe(
      res=>{
        this.marca = res;
        return this.optionsMarcas = this.marca;
      },
      err => console.log(err)
    ); 
  
    this.filteredOptionsMarcas = this.firstFormGroup.get('marca').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.Descripcion),
     map(Descripcion => Descripcion ? this._filterMarca(Descripcion) : this.optionsMarcas.slice())
   );
  }
//fin de autocompletado marca

//fin de autocompletado presentacion
//Autocompletado Unidad de Medida
displayFnImpuesto(user: Impuesto[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsImpuesto) ? this.optionsImpuesto.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.Descripcion : '';
  }
  
}
private _filterImpuesto(Descripcion: string): Impuesto[] {
  const filterValue = Descripcion.toLowerCase();

  return this.optionsImpuesto.filter(option => option.Descripcion.toLowerCase().indexOf(filterValue) === 0);
}

buscarImpuesto(){
  this.productoServicio.getCImpuesto().subscribe(
      res=>{
        this.impuesto = res;
        return this.optionsImpuesto = this.impuesto;
      },
      err => console.log(err)
    ); 
  
    this.filteredOptionsImpuesto = this.firstFormGroup.get('impuesto').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.Descripcion),
     map(Descripcion => Descripcion ? this._filterImpuesto(Descripcion) : this.optionsImpuesto.slice())
   );
  }
//fin de autocompletado unidad de medida
//Autocompletado Deposito
displayFnDeposito(user: Deposito[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsDeposito) ? this.optionsDeposito.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.Nombre : '';
  }
  
}
private _filterDeposito(Nombre: string): Deposito[] {
  const filterValue = Nombre.toLowerCase();

  return this.optionsDeposito.filter(option => option.Nombre.toLowerCase().indexOf(filterValue) === 0);
}

buscarDeposito(){
  this.productoServicio.getDeposito().subscribe(
      res=>{
        this.deposito = res;
        return this.optionsDeposito = this.deposito;
      },
      err => console.log(err)
    ); 
  
    this.filteredOptionsDeposito = this.firstFormGroup.get('deposito').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.Nombre),
     map(Nombre => Nombre ? this._filterDeposito(Nombre) : this.optionsDeposito.slice())
   );
  }
//fin de autocompletado marca
prueba(){
  this.productoServicio.getPrueba().subscribe(
    result=>{
     this._data = result[0].nombre;  
   //  console.log(this._data)
     return  this.secondFormGroup.get('descripcion').setValue(this._data);;
    }
  );

}
milesCompra(){

    // var num =  this.tercerFromGroup.get('preciocompra').value.replace(/\./g,'');
    // if(!isNaN(num)){
    // num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    // num = num.split('').reverse().join('').replace(/^[\.]/,'');
    var numero = this.tercerFromGroup.get('preciocompra').value.replace(".","").replace(",",".");
    var numeroFormateado = new Intl.NumberFormat('es-ES').format(numero);
    this.tercerFromGroup.get('preciocompra').setValue(numeroFormateado);
 //replace(".","").replace(",",".")
 console.log(numero);
 console.log(numeroFormateado);

   //  this.tercerFromGroup.get('preciocompra').setValue(numeroFormateado);
   //console.log(this.tercerFromGroup.get('preciocompra').value.replace(".","").replace(",","."))
   // console.log( new Intl.NumberFormat("eu-ES").format(this.tercerFromGroup.get('preciocompra').value));
    //}
 

}
milesVenta(){
  var num =  this.tercerFromGroup.get('precioventaminorista').value.replace(/\./g,'');
  if(!isNaN(num)){
  num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
  num = num.split('').reverse().join('').replace(/^[\.]/,'').replace(/^[\.]/,'');
  this.tercerFromGroup.get('precioventaminorista').setValue(num);
  console.log(this.tercerFromGroup.get('precioventaminorista').value.replace(/(?=\d*\.?)(\d{3})/g,'$1.').replace(/^[\.]/,''))
  }
}
milesMayorista(){
  let amount=this.tercerFromGroup.get('preciomayorista').value
  let  decimals =0;

    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\,]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0; // por si la variable no fue fue pasada

    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0) 
        return parseFloat("decimals").toFixed(decimals);

    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split(','),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');

        this.tercerFromGroup.get('preciomayorista').setValue(amount_parts.join(','));
        console.log( this.tercerFromGroup.get('preciomayorista').value.replace(".",""))

}

}
