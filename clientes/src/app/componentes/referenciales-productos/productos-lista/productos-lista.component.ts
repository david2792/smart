import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../../../servicios/servicios-referenciales/productos.service';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Productos{
  codigoproducto: string;
  categoria: string;
  marca: string;
  medida: string;
  presentacion: string;
  impuesto: string;
  codigobarra: string;
  descripcion: string;
  cantidadpresentacion: string;
  perecedero: string;
 deposito: string;
  stockactual: string;
  stockminimo: string;
  stockmaximo: string;
  
  preciocompra: string;
  precioventaminorista: string;
  preciomayorista: string;
  limitedescuento: string;
};
@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  ELEMENT_DATA:Productos[] = [];
  displayedColumns: string[] = ['codigoproducto','codigobarra','descripcion','preciocompra','precioventaminorista','preciomayorista'
  ,'limitedescuento','stockactual','stockminimo','stockmaximo','cantidadpresentacion','categoria','marca',
  'medida','presentacion','impuesto','deposito','accion'];
  dataSource = new MatTableDataSource<Productos>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true })  sort: MatSort;


  productos: any=[];
  filtroProducto='';
  p:number=1;
  constructor(private productoServicios:ProductosService) { }

  ngOnInit() {
    this.listaProducto();
  }

  listaProducto(){
    this.productoServicios.getProductos().subscribe(
      res=>{
        this.dataSource.data = res as Productos[];
      },
      err=>console.log(err)
    );
  }

  eliminarProducto(codigoproducto:number){
    const confirmacion = window.confirm("Desea Eliminar el Producto?");
    if(confirmacion){
      this.productoServicios.eliminarProducto(codigoproducto).subscribe(
        res=>{
          console.log(res);
          this.listaProducto();
        },
        err => console.log(err)
      )
    }

 } 
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
