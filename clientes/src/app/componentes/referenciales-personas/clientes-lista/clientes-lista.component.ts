import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClientesService } from 'src/app/servicios/servicios-referenciales/clientes.service';

export interface Cliente {
  codigo: number;
  cedula: string;
  ruc: string;
  razonsocial:string;
  fechanacimiento: string;
  direccion: string;
  telefono: string;
 // calificacion: string;
 //lineacredito:string
 ciudad: string;
}

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  ELEMENT_DATA:Cliente[] = [];
  displayedColumns: string[] = ['codigo','cedula','ruc','razonsocial','fechanacimiento','direccion','telefono','ciudad'];
  dataSource = new MatTableDataSource<Cliente>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true })  sort: MatSort;
  clientes: any=[];
  filtroCliente=''
  constructor(private clienteSericio :ClientesService ) { }

  ngOnInit() {
    this.listarCliente()
}
      listarCliente(){
        this.clienteSericio.getCliente().subscribe(
          res =>{
              this.dataSource.data = res as Cliente[];

            // return (this.dataSource=this.empresas);
              
          } ,
          err => console.log(err)
        );
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
