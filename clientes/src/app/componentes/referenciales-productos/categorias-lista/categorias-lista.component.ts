import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../servicios/servicios-referenciales/categorias.service';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.css']
})
export class CategoriasListaComponent implements OnInit {
  categorias: any=[];
  filtroCategoria='';
  p:number=1;
  constructor(private categoriaServicio:CategoriasService) { }

  ngOnInit() {
    this.listaCategoria();
  }
  listaCategoria(){
    this.categoriaServicio.getCategorias().subscribe(
      res =>{
          this.categorias = res;
      } ,
      err => console.log(err)
    );
  }
  eliminarCategoria(codigo:number){
    const confirmacion = window.confirm("Desea Eliminar La Categoria?");
    if(confirmacion){
      this.categoriaServicio.eliminarCategoria(codigo).subscribe(
        res=>{
          console.log(res);
          this.listaCategoria();
        },
        err => console.log(err)
      )
    }
  }

}
