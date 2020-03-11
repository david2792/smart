import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductosService } from 'src/app/servicios/servicios-referenciales/productos.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogRef } from '@angular/material/dialog';

export interface Productos{
  codigoproducto: string;
  codigobarra: string;
  descripcion: string;
  preciocompra: string;
  precioventaminorista: string;
};

export interface Transaction {
  cod: string;
  descripcion: string;
  precio:string;
  descuento:string;
}

@Component({
  selector: 'app-buscat-producto',
  templateUrl: './buscat-producto.component.html',
  styleUrls: ['./buscat-producto.component.css']
})


export class BuscatProductoComponent implements OnInit {

  
  ELEMENT_DATA:Productos[] = [];
  displayedColumns: string[] = ['select','codigoproducto','codigobarra','descripcion','preciocompra','precioventaminorista'];
  dataSource = new MatTableDataSource<Productos>();

   ELEMENT_DATA1:Transaction[] = [];
    dataSource1 = new MatTableDataSource<Transaction>();
    //displayedColumns: string[] = ['select','cod', 'descripcion','precio','cantidad','descuento','subTotal'];
    transactions: Transaction[] = [];
  selection = new SelectionModel<Transaction>(true, []);
    data = Object.assign( this.ELEMENT_DATA);



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true })  sort: MatSort;

  productos: any=[];
  filtroProducto='';
  p:number=1;

  constructor( public dialogRef: MatDialogRef<BuscatProductoComponent>,private productoServicios:ProductosService) { }

  ngOnInit() {
    this.listaProducto()
  }

  listaProducto(){
    this.productoServicios.getProductos().subscribe(
      res=>{
        this.dataSource.data = res as Productos[];
      },
      err=>console.log(err)
    );
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource1.data.forEach(row => this.selection.select(row));
  }
  SelectedRows(){

    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      return (JSON.stringify(item));

    });
    this.dialogRef.close();
   // this.selection = new SelectionModel<Transaction>(true, []);
  }
  /** Gets the total cost of all transactions. */
}
