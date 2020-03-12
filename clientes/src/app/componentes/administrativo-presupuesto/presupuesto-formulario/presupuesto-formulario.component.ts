import { Component, OnInit, ViewChild, Inject, Input, EventEmitter, Output } from '@angular/core';
import {Presupuesto} from '../../../componentes/administrativo-presupuesto/modelo/presupuesto'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PresupuestosService } from 'src/app/servicios/presupuestos/presupuestos.service';
import { BuscadorProductoComponent } from '../buscador-producto/buscador-producto.component';




export interface Transaction {
  cod: string;
  descripcion: string;
  precio:string;
  descuento:string;
  cantidad: string;
  subTotal:number
}


export interface Productos{
  codigoproducto: string;
  codigobarra: string;
  descripcion: string;
  preciocompra: string;
  precioventaminorista: string;
};
@Component({
  selector: 'app-presupuesto-formulario',
  templateUrl: './presupuesto-formulario.component.html',
  styleUrls: ['./presupuesto-formulario.component.css']

})



export class PresupuestoFormularioComponent implements OnInit {

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

  productosDatos(produ:string){
    console.log(produ)
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
openDialog1(){
  this.dialog.open(BuscadorProductoComponent)
}

openDialog(): void {
  const dialogRef = this.dialog.open(BuscadorProductoComponent, {
  
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

// fin buscador




}


