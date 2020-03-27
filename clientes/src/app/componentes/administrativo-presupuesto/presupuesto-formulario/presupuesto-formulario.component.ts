import { Component, OnInit, ViewChild, Inject, Input, EventEmitter, Output } from '@angular/core';
import {Presupuesto} from '../../../componentes/administrativo-presupuesto/modelo/presupuesto'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PresupuestosService } from 'src/app/servicios/presupuestos/presupuestos.service';
import { BuscadorProductoComponent } from '../buscador-producto/buscador-producto.component';
import {ProductoBuscador} from '../buscador-producto/datosBuscadorProducto'
import { buildDriverProvider } from 'protractor/built/driverProviders';
export interface Transaction {
  cod: string;
  descripcion: string;
  precio:string;
  descuento:string;
  cantidad: string;
  subTotal:number
}
export interface RecuperarProductos{
  codigoProducto:string;
  descripcion:string;
}
@Component({
  selector: 'app-presupuesto-formulario',
  templateUrl: './presupuesto-formulario.component.html',
  styleUrls: ['./presupuesto-formulario.component.css']

})



export class PresupuestoFormularioComponent implements OnInit {
  datosBuscador: ProductoBuscador[] = []
  codigoP:string;
  bandera:number=1;
  tipodocumento: Presupuesto={
    numero: 0,
    fecha:'',
    estado:'',
    cliente:'',
    producto:'',
    cantidad:'',
    precio:'',
    impuesto:''
  };
 recuperarProducto:RecuperarProductos={
  codigoProducto:'',
  descripcion:'',
 }
  presupuestoFormulario: FormGroup = this._formBuilder.group({
    codigoproducto:new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    precio:new FormControl('',Validators.required),
    descuento:new FormControl('',Validators.required),
    cantidad:new FormControl('',Validators.required)
  });

   ELEMENT_DATA:Transaction[] = [];
    dataSource = new MatTableDataSource<Transaction>();
    displayedColumns: string[] = ['select','cod', 'descripcion','precio','cantidad','descuento','subTotal'];
    transactions: Transaction[] = [];
    selection = new SelectionModel<Transaction>(true, []);
    data = Object.assign( this.ELEMENT_DATA);
    valores:any;
    editar: boolean = true;
  
  constructor(private _formBuilder: FormBuilder, private dialog:MatDialog, private presupuestoServicio:PresupuestosService)  { }

  ngOnInit() {
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  removeSelectedRows() {

    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      console.log(this.data.findIndex(d => d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<Transaction>(this.data);
    });
    this.selection = new SelectionModel<Transaction>(true, []);
  }
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.dataSource.data.map(t => t.subTotal).reduce((acc, value) => acc + value, 0);
  }

  agregarDetalle() {
     var cod= this.presupuestoFormulario.get('codigoproducto').value;
     var descripcion = this.presupuestoFormulario.get('descripcion').value;
     var precio = this.presupuestoFormulario.get('precio').value;
     var cantidad = this.presupuestoFormulario.get('cantidad').value;
     var descuento= this.presupuestoFormulario.get('descuento').value;
     var des = (precio*cantidad)*(descuento/100);
     var subTota = (precio*cantidad)-des;
   //  this.buscadorIguales();
     this.dataSource.data.push({cod:cod,descripcion:descripcion,precio:precio,cantidad:cantidad,descuento:descuento,subTotal:subTota})  
    this.dataSource.filter = "";
   
    //console.log(this.dataSource.data);
  
    };
    buscadorIguales(){
      let cantidad;
      let limite = this.dataSource.data.length;
      for(let i=0;i<limite;i++)
      this.dataSource.data.filter((value,key)=>{
        if(value.cod.valueOf()==this.presupuestoFormulario.get('codigoproducto').value){
          key=i;
          cantidad=parseInt(value.cantidad)+parseInt(this.presupuestoFormulario.get('cantidad').value); 
          
         
        }
      })
        // console.log('total',this.dataSource.data[0].cod,limite)
    

    }
// buscador de productos

abrirBuscadorProducto(){
  const dialogoProducto = this.dialog.open(BuscadorProductoComponent,{
    width: '750px'
  });

    dialogoProducto.afterClosed().subscribe(cod => {
      this.presupuestoFormulario.get('codigoproducto').setValue(cod[0].codigoproducto);
      this.presupuestoFormulario.get('descripcion').setValue(cod[0].descripcion);
      this.presupuestoFormulario.get('precio').setValue(cod[0].precioventaminorista);
      console.log('el valor es',cod[0].descripcion);
      this.codigoP=cod[1];
    });
}
  getProductos(){
    this.presupuestoServicio.getUnProducto(this.codigoP).subscribe(
      res=>{
            this.recuperarProducto = res;
      }
    )
  }
}



