import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductosService } from 'src/app/servicios/servicios-referenciales/productos.service';
import{ProductoBuscador} from '../../administrativo-presupuesto/buscador-producto/datosBuscadorProducto'
import { SelectionModel } from '@angular/cdk/collections';

export interface Productos{
  codigo: string;
  descripcion: string;
  precioventaminorista:string;
  stockactual:string;
};

@Component({
  selector: 'app-buscador-producto',
  templateUrl: './buscador-producto.component.html',
  styleUrls: ['./buscador-producto.component.css']
})


export class BuscadorProductoComponent implements OnInit {
  ELEMENT_DATA:Productos[] = [];
  displayedColumns: string[] = ['select','codigoproducto','descripcion','precioventaminorista','stockactual'];
  dataSource = new MatTableDataSource<Productos>();
  selection = new SelectionModel<Productos>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true })  sort: MatSort;


  productos: any=[];
  filtroProducto='';
  p:number=1;
  codigoproducto:any=[];
  presupuesto: any;
  data = Object.assign( this.ELEMENT_DATA);
  constructor(public dialogRef: MatDialogRef<BuscadorProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: ProductoBuscador,private productoServicios:ProductosService) { }

  ngOnInit() {
    this.listaProducto();
  }
  cancelar() {
    this.dialogRef.close();
    
  }
  confirmar(){
    let select:boolean=true;
    let cod:any=[];
    if(this.selection.selected.length>0){
      select=true;
      cod= this.getCodigo();;
      console.log("confirmar",cod);
    }else{
      select=false;
    }
    this.dialogRef.close(cod)
    
  }
  getCodigo() {

    this.selection.selected.forEach(item => {
      //let index: number = this.data.findIndex(d => d === item);
      this.codigoproducto= this.selection.selected;
    });
   //this.selection = new SelectionModel<ProductoBuscador>(true, []);
   return this.codigoproducto
  }
  
  listaProducto(){
    this.productoServicios.getProductos().subscribe(
      res=>{
        this.dataSource.data = res as   [];
      },
      err=>console.log(err)
    );
  }

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


  // paginador y buscador
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
