import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../servicios/servicios-referenciales/categorias.service';
import {Categorias} from '../modelos/categorias';
import {ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias-formulario',
  templateUrl: './categorias-formulario.component.html',
  styleUrls: ['./categorias-formulario.component.css']
})
export class CategoriasFormularioComponent implements OnInit {
  categoria: Categorias={
    codigo:0,
    familia:'',
    nombre:''
  };
  familias:any=[];
  
  editar: boolean = false;
  ///
  valores:any=[]
  familias2: any=[];

  // autocompletar
  nombre = '';
  /**
   * Form
   */
  reactiveForm: FormGroup;
    //
  public placeholder: string = 'Ingrese un nombre';
  public keyword = 'nombre';
  public historyHeading: string = 'Ultima Familia Seleccionada';
  
  public countriesTemplate=[];

  public countriesReactive = [];
    //
  constructor(private categoriaServicio:CategoriasService, private router: Router, private activedRoute: ActivatedRoute, private _fb: FormBuilder) { }

  ngOnInit() {
    this.buscarFamilia();
    const params = this.activedRoute.snapshot.params;
    if(params.id){
        this.categoriaServicio.getUnaCategoria(params.id).subscribe(
          res=>{
            console.log(res);
            this.categoria =  res;
            this.editar = true;
          }
        )
    }
    
  }
  nuevaCategoria(){
         delete this.categoria.codigo;
          this.categoriaServicio.guardarCategoria(this.categoria)
        .subscribe(
          res =>{
            console.log(res);
            this.router.navigate(['categorias'])
          },
          err => console.log(err)
        )
    
    
  }
  
  actualizarCategoria(){
    const confirmacion = window.confirm("Desea Actualizar La Categoria");
    if(confirmacion==true){
      this.categoriaServicio.actualizarCategoria(this.categoria.codigo, this.categoria)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['categorias'])
      },
      err=> console.log(err)

    )
    }
    
  }

  buscarFamilia(){
    console.log("paso por aca");
    this.categoriaServicio.getFamilia().subscribe(
      res =>{
          this.familias = res;
          
          this.valores =  this.familias.map(item=>item.nombre);
          // return this.valores;
          return this.countriesTemplate=this.valores;
        //   console.log(this.valores)
      } ,
      err => console.log(err)
    );
  }

//
 /**
 * Submit template form
 */
submitTemplateForm(value) {
  console.log(value);
}

/**
 * Submit reactive form
 */
submitReactiveForm() {
  if (this.reactiveForm.valid) {
    console.log(this.reactiveForm.value);
  }
}

}

