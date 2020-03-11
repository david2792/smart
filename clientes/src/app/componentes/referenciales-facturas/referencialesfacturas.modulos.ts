import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DemoMaterialModule } from '../inicio/pantalla-principal/material-module';
import{TipodocumentoListaComponent} from './tipodocumento-lista/tipodocumento-lista.component'
import { TipodocumentoFormularioComponent } from './tipodocumento-formulario/tipodocumento-formulario.component';
@NgModule({
    declarations:[
       TipodocumentoListaComponent,
       TipodocumentoFormularioComponent
    ],
    exports:[ 
     
      
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgxPaginationModule,
        AutocompleteLibModule,
        MatNativeDateModule,
        FormsModule,ReactiveFormsModule,
        DemoMaterialModule
      ],
})
export class ReferencialesFacturasModulos{}