import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Presupuesto} from '../../../componentes/administrativo-presupuesto/modelo/presupuesto'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog} from '@angular/material/dialog';
import { BuscatProductoComponent } from '../buscat-producto/buscat-producto.component';
import { PresupuestosService } from 'src/app/servicios/presupuestos/presupuestos.service';

export interface Transaction {
  cod: string;
  descripcion: string;
  precio:string;
  descuento:string;
  cantidad: string;
  subTotal:number
}

export class RecuperarProductos{
  codigo:string;
  descripcion:string;
  precio:string;
}



@Component({
  selector: 'app-presupuesto-formulario',
  templateUrl: './presupuesto-formulario.component.html',
  styleUrls: ['./presupuesto-formulario.component.css']

})



export class PresupuestoFormularioComponent implements OnInit {
  recuperarProducto: RecuperarProductos[]=[];
@ViewChild(BuscatProductoComponent,{ static: true }) hijo: BuscatProductoComponent;
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

  presupuestoFormulario: FormGroup = this._formBuilder.group({
    codigo:new FormControl('',Validators.required),
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
    bandera=1;
  constructor(private _formBuilder: FormBuilder, private dialog:MatDialog, private presupuestoServicio:PresupuestosService)  { }

  ngOnInit() {
    
  }
  productosDatos(){
    const valor =this.hijo.descripcionproducto;
    console.log(valor)
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
     var cod= this.presupuestoFormulario.get('codigo').value;
     var descripcion = this.presupuestoFormulario.get('descripcion').value;
     var precio = this.presupuestoFormulario.get('precio').value;
     var cantidad = this.presupuestoFormulario.get('cantidad').value;
     var descuento= this.presupuestoFormulario.get('descuento').value;
     var des = (precio*cantidad)*(descuento/100);
     var subTota = (precio*cantidad)-des;
    this.dataSource.data.push({cod:cod,descripcion:descripcion,precio:precio,cantidad:cantidad,descuento:descuento,subTotal:subTota})  
    this.dataSource.filter = "";
    };

  
  eliminarDetalle(){
  
  }
// buscador producto
openDialog(){
  this.dialog.open(BuscatProductoComponent)

}
// fin buscador
}
