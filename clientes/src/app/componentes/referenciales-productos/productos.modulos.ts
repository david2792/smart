import { NgModule } from '@angular/core';
import { MarcasFormularioComponent } from './marcas-formulario/marcas-formulario.component';
import { MarcasListaComponent } from './marcas-lista/marcas-lista.component';
import { CategoriasFormularioComponent } from './categorias-formulario/categorias-formulario.component';
import { UnidaFormularioComponent } from './unida-formulario/unida-formulario.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { FamiliaFormularioComponent } from './familia-formulario/familia-formulario.component';
import { FamiliaListaComponent } from './familia-lista/familia-lista.component';
import { ImpuestoFormularioComponent } from './impuesto-formulario/impuesto-formulario.component';
import { ImpuestoListaComponent } from './impuesto-lista/impuesto-lista.component';
import { PresentacionesFormularioComponent } from './presentaciones-formulario/presentaciones-formulario.component';
import { PresentacionesListaComponent } from './presentaciones-lista/presentaciones-lista.component';
import { ProductosFormularioComponent } from './productos-formulario/productos-formulario.component';
import { UnidaListaComponent } from './unidad-lista/unida-lista.component';

import { BuscadorMarcasPipe } from '../../buscadores/referenciales/buscador-marcas.pipe';
import { BuscarcategoriaPipe } from '../../buscadores/referenciales/buscarcategoria.pipe';
import { BuscarfamiliaPipe } from '../../buscadores/referenciales/buscarfamilia.pipe';
import { BuscarimpuestoPipe } from '../../buscadores/referenciales/buscarimpuesto.pipe';
import { BuscarpresentacionPipe } from '../../buscadores/referenciales/buscarpresentacion.pipe';
import { BuscarunidadPipe } from '../../buscadores/referenciales/buscarunidad.pipe';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { MatNativeDateModule } from '@angular/material/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DemoMaterialModule } from '../inicio/pantalla-principal/material-module';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { BuscarProductoPipe } from '../../buscadores/referenciales/buscar-producto.pipe';



@NgModule({
    declarations:[
        MarcasFormularioComponent,
        MarcasListaComponent,
        CategoriasFormularioComponent,
        CategoriasListaComponent,
        FamiliaFormularioComponent,
        FamiliaListaComponent,
        ImpuestoFormularioComponent,
        ImpuestoListaComponent,
        PresentacionesFormularioComponent,
        PresentacionesListaComponent,
        ProductosFormularioComponent,
        ProductosListaComponent,
        UnidaListaComponent,
        UnidaFormularioComponent,
        BuscadorMarcasPipe,
        BuscarcategoriaPipe,
        BuscarfamiliaPipe,
        BuscarimpuestoPipe,
        BuscarpresentacionPipe,
        BuscarunidadPipe,
        BuscarProductoPipe,
    
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
export class ProductosModulos{}