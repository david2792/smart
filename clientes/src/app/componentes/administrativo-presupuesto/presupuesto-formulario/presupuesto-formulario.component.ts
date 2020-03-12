import { Component, OnInit, ViewChild, Inject, Input, EventEmitter, Output } from '@angular/core';
import {Presupuesto} from '../../../componentes/administrativo-presupuesto/modelo/presupuesto'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PresupuestosService } from 'src/app/servicios/presupuestos/presupuestos.service';
import { BuscadorProductoComponent } from '../buscador-producto/buscador-producto.component';


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
 
 
  
  constructor()  { }

  ngOnInit() {
  }

  



}


