import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposdocumentosService } from 'src/app/servicios/servicios-referenciales/tiposdocumentos.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface TipoDocumentos 
{ 
    codigo?: number;
    descripcion: string
 } 

@Component({
  selector: 'app-tipodocumento-lista',
  templateUrl: './tipodocumento-lista.component.html',
  styleUrls: ['./tipodocumento-lista.component.css']
})
export class TipodocumentoListaComponent implements OnInit {
  
  ELEMENT_DATA:TipoDocumentos[] = [];
  displayedColumns: string[] = ['codigo','descripcion','accion'];
  dataSource = new MatTableDataSource<TipoDocumentos>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true })  sort: MatSort;
  tipodocumento: any=[];
  filtroTipoDocumento='';
  p:number=1;



  constructor(private tipodocumentoservicio:TiposdocumentosService) { }

  ngOnInit() {
    this.listarTipoDocumento();
  }
  listarTipoDocumento(){
    this.tipodocumentoservicio.getTipoDocumento().subscribe(
      res =>{
          this.dataSource.data = res as TipoDocumentos[];
          console.log(this.dataSource.data)
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
