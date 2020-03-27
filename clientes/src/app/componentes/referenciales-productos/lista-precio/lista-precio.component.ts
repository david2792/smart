import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductosService } from 'src/app/servicios/servicios-referenciales/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Lista } from '../modelos/listaPrecio';

export interface DatosLista {
  select:string;
  CodigoProducto:string;
  codigoDeposito:string;
  Codigo:string;
  Descripcion:string;
  Porcentaje:string;
  cuotas:string;
  producto:string;
  PrecioCompra:string;
  Deposito:string;
}

export interface Producto{
  CodigoProducto:string;
  Descripcion:string;
  PrecioCompra:string;
  
}

@Component({
  selector: 'app-lista-precio',
  templateUrl: './lista-precio.component.html',
  styleUrls: ['./lista-precio.component.css']
})


export class ListaPrecioComponent implements OnInit {
  listaprecio: Lista={
    codigoDeposito:'',
    CodigoProducto:'',
    Descripcion:'',
    Precio:'',
    Porcentaje:'',
    PrecioCompra:'',
    Cuotas:''

};

  ELEMENT_DATA: DatosLista[] = [];
  displayedColumns: string[] = ['select', 'Codigo', 'Descripcion', 'cuotas', 'Porcentaje'];
  dataSource = new MatTableDataSource<DatosLista>();
  selection = new SelectionModel<DatosLista>(true, []);
  //data = Object.assign( this.ELEMENT_DATA);
  
  firstFormGroup: FormGroup = this._formBuilder.group({
    CodigoProducto:new FormControl(),
    Producto:new FormControl('',Validators.required),
    PrecioCompra:new FormControl('',Validators.required),
    codigoDeposito: new FormControl('',Validators.required),
    Deposito: new FormControl('',Validators.required),
    Descripcion: new FormControl('',Validators.required),
    Porcentaje: new FormControl('',Validators.required),
    Cuota: new FormControl('',Validators.required),
    Precio  : new FormControl('',Validators.required),
  });
  
  constructor(private productoServicios:ProductosService, private router: Router, private activedRoute: ActivatedRoute,private _formBuilder: FormBuilder) { }

  ngOnInit() {
   this.lista();
  }

  lista(){
  const params = this.activedRoute.snapshot.params;
  if(params.id){
        this.productoServicios.getUnaLista(params.id).subscribe(
          res=>{
            this.dataSource.data = res as DatosLista[];
            this.firstFormGroup.get('CodigoProducto').setValue(this.dataSource.data[0].CodigoProducto);
            this.firstFormGroup.get('Producto').setValue(this.dataSource.data[0].producto);
            this.firstFormGroup.get('PrecioCompra').setValue(this.dataSource.data[0].PrecioCompra);
            this.firstFormGroup.get('codigoDeposito').setValue(this.dataSource.data[0].codigoDeposito);
            this.firstFormGroup.get('Deposito').setValue(this.dataSource.data[0].Deposito);
            console.log(this.dataSource.data);
          },
          err=>{
           // this.listaProducto();
            console.log(err)
          }
        );
   }
  }
  nuevoProductos(){
    //delete this.listaprecio.Codigo;
    this.listaprecio.codigoDeposito=this.firstFormGroup.get('codigoDeposito').value;
    this.listaprecio.CodigoProducto=this.firstFormGroup.get('CodigoProducto').value;
    this.listaprecio.Descripcion=this.firstFormGroup.get('Descripcion').value;
    this.listaprecio.Precio=this.firstFormGroup.get('Precio').value;
    this.listaprecio.Porcentaje=this.firstFormGroup.get('Porcentaje').value;
    this.listaprecio.PrecioCompra=this.firstFormGroup.get('PrecioCompra').value;
    this.listaprecio.Cuotas=this.firstFormGroup.get('Cuota').value;
      this.productoServicios.guardarLista(this.listaprecio.CodigoProducto,this.listaprecio)
      .subscribe(
        res =>{
          console.log(res);
         // this.router.navigate(['/listaprecio/',this.listaprecio.CodigoProducto=this.firstFormGroup.get('CodigoProducto').value]);
         this.lista();
        },
        err => console.log(err)
      )
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

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DatosLista): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Codigo + 1}`;
  }

}
