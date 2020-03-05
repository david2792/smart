import { Component, OnInit } from '@angular/core';
import { TiposdocumentosService } from 'src/app/servicios/servicios-referenciales/tiposdocumentos.service';
import { TipoDocumentos } from '../modelo/tipodocumentos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipodocumento-lista',
  templateUrl: './tipodocumento-lista.component.html',
  styleUrls: ['./tipodocumento-lista.component.css']
})
export class TipodocumentoListaComponent implements OnInit {
  tipodocumentos: TipoDocumentos[] = [];
  constructor(private tipodocumentoservicio:TiposdocumentosService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers():void{
    this.tipodocumentoservicio.getTipoDocumentos().subscribe(
     // tipodocumento => this.tipodocumento = tipodocumento
     res =>{
      this.tipodocumentos = res;
      console.log(this.tipodocumentos)
   // return (this.tipodocumento);
      
  } ,
  err => console.log(err)
      );
	}
}
