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
  nombre: string;
}
interface Marca{
  codigo:string;
  nombre: string;
}
interface Medida{
  codigo:string;
  nombre: string;
}
interface Presentacion{
  codigo:string;
  descripcion: string;
}
interface Impuesto{
  codigo:string;
  nombre: string;
}
//fin inferface

@Component({
  selector: 'app-productos-formulario',
  templateUrl: './productos-formulario.component.html',
  styleUrls: ['./productos-formulario.component.css'],
})
export class ProductosFormularioComponent implements OnInit {

  productos: Productos={
        codigoproducto:0,
        categoria:'',
        marca:'',
        medida:'',
        presentacion:'',
        impuesto:'',
        codigobarra:'',
        descripcion:'',
        cantidadpresentacion:'',
        perecedero:'',
       // imagen:'',
       // estado:'',
        
       codigodeposito:0,
      
        stockactual:0,
        stockminimo:0,
        stockmaximo:0,
        preciocompra:0,
        precioventaminorista:0,
        preciomayorista:0,
        limitedescuento:0,
        // fechacreacion:'',
        // fechamodificacion:'',
        // fechaultimaventa:'',
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
//buscador de unidad de medida//
optionsMedida: Medida[] = [];
filteredOptionsMedida: Observable<Medida[]>;
medida:any=[];
//fin de buscador//
//buscador de presentacion//
optionsPresentacion: Presentacion[] = [];
filteredOptionsPresentacion: Observable<Presentacion[]>;
presentacion:any=[];
//fin de buscador//
//buscador de impuesto//
optionsImpuesto: Impuesto[] = [];
filteredOptionsImpuesto: Observable<Impuesto[]>;
impuesto:any=[];
//fin de buscador//
public codigo='';
public _data: any;
editar: boolean = false;

//pruenas borrar

firstFormGroup: FormGroup = this._formBuilder.group({
  stateGroup: '',
  categoria:new FormControl('',Validators.required),
  marca:new FormControl('',Validators.required),
  medida:new FormControl('',Validators.required),
  presentacion:new FormControl('',Validators.required),
  impuesto:new FormControl('',Validators.required),

});

  constructor(private _formBuilder: FormBuilder,private productoServicio:ProductosService, private router: Router, private activedRoute: ActivatedRoute, ) { }

  ngOnInit() {
   this.buscarCategoria();
   this.buscarMarca();
   this.buscarMedida();
   this.buscarPresentacion();
   this.buscarImpuesto();

    this.secondFormGroup = this._formBuilder.group({  
      codigobarra:new FormControl('',Validators.required),
      descripcion:new FormControl('',Validators.required),
      cantidadpresentacion:new FormControl('',[Validators.pattern('^[0-9]+')]),
      perecedero:new FormControl('',Validators.required)

    });
    this.tercerFromGroup = this._formBuilder.group({
        stockactual:new FormControl('',[Validators.pattern('^[0-9]+')]),
        stockminimo:new FormControl('',[Validators.pattern('^[0-9]+')]),
        stockmaximo:new FormControl('',[Validators.pattern('^[0-9]+')]),
        preciocompra:new FormControl('',[Validators.pattern('^[0-9.]+')]),
        precioventaminorista:new FormControl('',[Validators.pattern('^[0-9.]+')]),
        preciomayorista:new FormControl('',[Validators.pattern('^[0-9.]+')]),
        limitedescuento:new FormControl('',[Validators.pattern('^[0-9.]+')]),
    });

    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.productoServicio.getUnProducto(params.id).subscribe(
          res=>{
           //primer grupo
           this.productos=  res;
           this.firstFormGroup.get('categoria').setValue(this.productos.categoria);
           this.firstFormGroup.get('marca').setValue(this.productos.marca);
           this.firstFormGroup.get('medida').setValue(this.productos.medida);
           this.firstFormGroup.get('presentacion').setValue(this.productos.presentacion);
           this.firstFormGroup.get('impuesto').setValue(this.productos.impuesto);
           //segundo grupo
           this.secondFormGroup.get('codigobarra').setValue(this.productos.codigobarra);
           this.secondFormGroup.get('descripcion').setValue(this.productos.descripcion);
           this.secondFormGroup.get('cantidadpresentacion').setValue(this.productos.cantidadpresentacion);
           this.secondFormGroup.get('perecedero').setValue(this.productos.perecedero);
           //tercer grupo stock
           this.tercerFromGroup.get('stockactual').setValue(this.productos.stockactual);
           this.tercerFromGroup.get('stockminimo').setValue(this.productos.stockminimo);
           this.tercerFromGroup.get('stockmaximo').setValue(this.productos.stockmaximo);
           this.tercerFromGroup.get('preciocompra').setValue(this.productos.preciocompra);
           this.tercerFromGroup.get('precioventaminorista').setValue(this.productos.precioventaminorista);
           this.tercerFromGroup.get('preciomayorista').setValue(this.productos.preciomayorista);
           this.tercerFromGroup.get('limitedescuento').setValue(this.productos.limitedescuento);
           this.editar = true;
          }
        )
    }
  }
  actualizarProducto(){
    const confirmacion = window.confirm("Desea Actualizar El Producto?");
    if(confirmacion==true){
      this.productos.categoria=this.firstFormGroup.get('categoria').value;
      this.productos.marca=this.firstFormGroup.get('marca').value;
      this.productos.medida=this.firstFormGroup.get('medida').value;
      this.productos.presentacion=this.firstFormGroup.get('presentacion').value;
      this.productos.impuesto=this.firstFormGroup.get('impuesto').value;
      this.productos.codigobarra = this.secondFormGroup.get('codigobarra').value;
      this.productos.descripcion = this.secondFormGroup.get('descripcion').value;  
      this.productos.cantidadpresentacion = this.secondFormGroup.get('cantidadpresentacion').value;  
      this.productos.perecedero = this.secondFormGroup.get('perecedero').value;  
      this.productos.codigodeposito = 1;
      this.productos.stockactual = this.tercerFromGroup.get('stockactual').value;  
      this.productos.stockminimo = this.tercerFromGroup.get('stockminimo').value;  
      this.productos.stockmaximo = this.tercerFromGroup.get('stockmaximo').value;  
      this.productos.preciocompra = this.tercerFromGroup.get('preciocompra').value;  
      this.productos.precioventaminorista = this.tercerFromGroup.get('precioventaminorista').value;  
      this.productos.preciomayorista = this.tercerFromGroup.get('preciomayorista').value;  
      this.productos.limitedescuento = this.tercerFromGroup.get('limitedescuento').value;
      this.productoServicio.actualizarProducto(this.productos.codigoproducto, this.productos)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/productos'])
      },
      err=> console.log(err)

    )
    }
  }
  nuevoProductos(){
  delete this.productos.codigoproducto;
  this.productos.categoria=this.firstFormGroup.get('categoria').value;
  this.productos.marca=this.firstFormGroup.get('marca').value;
  this.productos.medida=this.firstFormGroup.get('medida').value;
  this.productos.presentacion=this.firstFormGroup.get('presentacion').value;
  this.productos.impuesto=this.firstFormGroup.get('impuesto').value;
  this.productos.codigobarra = this.secondFormGroup.get('codigobarra').value;
  this.productos.descripcion = this.secondFormGroup.get('descripcion').value;  
  this.productos.cantidadpresentacion = this.secondFormGroup.get('cantidadpresentacion').value;  
  this.productos.perecedero = this.secondFormGroup.get('perecedero').value;  
  this.productos.codigodeposito = 1;
  this.productos.stockactual = this.tercerFromGroup.get('stockactual').value;  
  this.productos.stockminimo = this.tercerFromGroup.get('stockminimo').value;  
  this.productos.stockmaximo = this.tercerFromGroup.get('stockmaximo').value;  
  this.productos.preciocompra = this.tercerFromGroup.get('preciocompra').value;  
  this.productos.precioventaminorista = this.tercerFromGroup.get('precioventaminorista').value;  
  this.productos.preciomayorista = this.tercerFromGroup.get('preciomayorista').value;  
  this.productos.limitedescuento = this.tercerFromGroup.get('limitedescuento').value;  
  

    this.productoServicio.guardarProductos(this.productos)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/productos'])
      },
      err => console.log(err)
    )
  }
 //Autocompletado Categoria
 displayFn(user: User[]): (codigo: string) => string | null {
  if(this.editar==false){
    return (codigo: string) => { 
      const correspondingOption = Array.isArray(this.options) ? this.options.find(option => option.codigo === codigo) : null;
      return correspondingOption ? correspondingOption.nombre : '';
  }
    }else{
      return (codigo: string) => { 
        const correspondingOption = Array.isArray(this.options) ? this.options.find(option => option.codigo === codigo) : null;
        const v=  'jj';
        return correspondingOption ? correspondingOption.nombre : 'JSON.stringify(v)';
    }
}
}

  private _filter(nombre: string): User[] {
    const filterValue = nombre.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
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
     map(value => typeof value === 'string' ? value : value.nombre),
     map(nombre => nombre ? this._filter(nombre) : this.options.slice())
   );
   
    }
//fin de autocompletado categoria
//Autocompletado Marcas
displayFnMarca(user: Marca[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsMarcas) ? this.optionsMarcas.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.nombre : '';
  }
  
}
private _filterMarca(nombre: string): Marca[] {
  const filterValue = nombre.toLowerCase();

  return this.optionsMarcas.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
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
     map(value => typeof value === 'string' ? value : value.nombre),
     map(nombre => nombre ? this._filterMarca(nombre) : this.optionsMarcas.slice())
   );
  }
//fin de autocompletado marca
//Autocompletado Unidad de Medida
displayFnMedida(user: Medida[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsMedida) ? this.optionsMedida.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.nombre : '';
  }
  
}
private _filterMedida(nombre: string): Medida[] {
  const filterValue = nombre.toLowerCase();

  return this.optionsMedida.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
}

buscarMedida(){
  this.productoServicio.getMedida().subscribe(
      res=>{
        this.medida = res;
        return this.optionsMedida = this.medida;
      },
      err => console.log(err)
    ); 
  
    this.filteredOptionsMedida = this.firstFormGroup.get('medida').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.nombre),
     map(nombre => nombre ? this._filterMedida(nombre) : this.optionsMedida.slice())
   );
  }
//fin de autocompletado unidad de medida
//Autocompletado presentacion
displayFnPresentacion(user: Presentacion[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsPresentacion) ? this.optionsPresentacion.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.descripcion : '';
  }
  
}
private _filterPresentacion(descripcion: string): Presentacion[] {
  const filterValue = descripcion.toLowerCase();

  return this.optionsPresentacion.filter(option => option.descripcion.toLowerCase().indexOf(filterValue) === 0);
}

buscarPresentacion(){
  this.productoServicio.getPresentacion().subscribe(
      res=>{
        this.presentacion = res;
       // console.log(this.presentacion);
        return this.optionsPresentacion = this.presentacion;
      },
      err => console.log(err)
    ); 
  
    this.filteredOptionsPresentacion = this.firstFormGroup.get('presentacion').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.descripcion),
     map(descripcion => descripcion ? this._filterPresentacion(descripcion) : this.optionsPresentacion.slice())
   );
  }
//fin de autocompletado presentacion
//Autocompletado Unidad de Medida
displayFnImpuesto(user: Impuesto[]): (codigo: string) => string | null {
  return (codigo: string) => { 
    const correspondingOption = Array.isArray(this.optionsImpuesto) ? this.optionsImpuesto.find(option => option.codigo === codigo) : null;
    return correspondingOption ? correspondingOption.nombre : '';
  }
  
}
private _filterImpuesto(nombre: string): Medida[] {
  const filterValue = nombre.toLowerCase();

  return this.optionsImpuesto.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
}

buscarImpuesto(){
  this.productoServicio.getCImpuesto().subscribe(
      res=>{
        this.medida = res;
        return this.optionsImpuesto = this.medida;
      },
      err => console.log(err)
    ); 
  
    this.filteredOptionsImpuesto = this.firstFormGroup.get('impuesto').valueChanges
   .pipe(
     startWith(''),
     map(value => typeof value === 'string' ? value : value.nombre),
     map(nombre => nombre ? this._filterImpuesto(nombre) : this.optionsImpuesto.slice())
   );
  }
//fin de autocompletado unidad de medida

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
