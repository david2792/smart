import { Component, OnInit } from '@angular/core';
import { ImpuestosService} from '../../../servicios/servicios-referenciales/impuestos.service';
@Component({
  selector: 'app-impuesto-lista',
  templateUrl: './impuesto-lista.component.html',
  styleUrls: ['./impuesto-lista.component.css']
})
export class ImpuestoListaComponent implements OnInit {
  impuestos: any=[];
  filtroImpuesto='';
  p:number=1;
  constructor(private impuestoServicio:ImpuestosService) { }
  ngOnInit() {
    this.listaImpuesto();
  
  }
  listaImpuesto(){
    this.impuestoServicio.getImpuesto().subscribe(
      res =>{
          this.impuestos = res;
      } ,
      err => console.log(err)
    );
  }
  eliminarImpuesto(codigo:number){
    const confirmacion = window.confirm("Desea Eliminar El Impuesto?");
    if(confirmacion){
      this.impuestoServicio.eliminarImpuesto(codigo).subscribe(
        res=>{
          console.log(res);
          this.listaImpuesto();
        },
        err => console.log(err)
      )
    }

 }  

}

