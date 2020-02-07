import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/servicios-referenciales/empresas.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ElementSchemaRegistry } from '@angular/compiler';

export interface Empresa {
  codigo: number;
  ruc: string;
  razonsocial:string;
  nombrefantasia: string;
  web: string;
}
 

@Component({
  selector: 'app-empresas-lista',
  templateUrl: './empresas-lista.component.html',
  styleUrls: ['./empresas-lista.component.css']
})


export class EmpresasListaComponent implements OnInit {
  ELEMENT_DATA:Empresa[] = [];
  displayedColumns: string[] = ['codigo','ruc','razonsocial','nombrefantasia','web','accion'];
  dataSource = new MatTableDataSource<Empresa>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true })  sort: MatSort;
  empresas: any=[];
  filtroEmpresa='';
  p:number=1;

  
  

  constructor(private empresaServicio:EmpresasService) { 
  
  }

  ngOnInit() {

    this.listarEmpresa()
  }
  listarEmpresa(){
    this.empresaServicio.getEmpresa().subscribe(
      res =>{
          this.dataSource.data = res as Empresa[];

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
