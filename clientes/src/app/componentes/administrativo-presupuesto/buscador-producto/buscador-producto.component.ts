import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buscador-producto',
  templateUrl: './buscador-producto.component.html',
  styleUrls: ['./buscador-producto.component.css']
})

export class RecuperarProductos{
  codigo:string;
  descripcion:string;
  precio:string;
}

export class BuscadorProductoComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {
  }

}
