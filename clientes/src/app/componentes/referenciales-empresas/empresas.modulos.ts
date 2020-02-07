import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { EmpresasFormularioComponent } from './empresas-formulario/empresas-formulario.component';
import { DemoMaterialModule } from '../inicio/pantalla-principal/material-module';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';
import { BuscarempresaPipe } from '../../buscadores/referenciales/buscarempresa.pipe';
import { SucursalesListaComponent } from './sucursales-lista/sucursales-lista.component';
import { SucursalesFormularioComponent } from './sucursales-formulario/sucursales-formulario.component';
import { DepositosListaComponent } from './depositos-lista/depositos-lista.component';
import { DepositosFormularioComponent } from './depositos-formulario/depositos-formulario.component';



@NgModule({
    declarations:[
        EmpresasFormularioComponent,
        EmpresasListaComponent,
        BuscarempresaPipe,
        SucursalesListaComponent,
        SucursalesFormularioComponent,
        DepositosListaComponent,
        DepositosFormularioComponent,
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
export class EmpresasModulos{}