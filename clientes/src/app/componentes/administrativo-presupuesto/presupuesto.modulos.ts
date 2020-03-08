import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DemoMaterialModule } from '../inicio/pantalla-principal/material-module';
import {PresupuestoFormularioComponent} from '../administrativo-presupuesto/presupuesto-formulario/presupuesto-formulario.component'
@NgModule({
    declarations:[
        PresupuestoFormularioComponent,
       
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
export class AdministrativoPresupuesto{}