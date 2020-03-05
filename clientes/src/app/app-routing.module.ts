import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasFormularioComponent } from './componentes/referenciales-productos/marcas-formulario/marcas-formulario.component';
import {MarcasListaComponent} from './componentes/referenciales-productos/marcas-lista/marcas-lista.component';

import {UnidaFormularioComponent} from './componentes/referenciales-productos/unida-formulario/unida-formulario.component';
import {UnidaListaComponent} from './componentes/referenciales-productos/unidad-lista/unida-lista.component';

import {ImpuestoFormularioComponent} from './componentes/referenciales-productos/impuesto-formulario/impuesto-formulario.component';
import {ImpuestoListaComponent } from './componentes/referenciales-productos/impuesto-lista/impuesto-lista.component';

import {PresentacionesFormularioComponent} from './componentes/referenciales-productos/presentaciones-formulario/presentaciones-formulario.component';
import {PresentacionesListaComponent} from './componentes/referenciales-productos/presentaciones-lista/presentaciones-lista.component';

import {CategoriasFormularioComponent} from './componentes/referenciales-productos/categorias-formulario/categorias-formulario.component';
import {CategoriasListaComponent} from './componentes/referenciales-productos/categorias-lista/categorias-lista.component'

import {FamiliaFormularioComponent} from './componentes/referenciales-productos/familia-formulario/familia-formulario.component';
import {FamiliaListaComponent} from './componentes/referenciales-productos/familia-lista/familia-lista.component';

import {ProductosFormularioComponent} from  './componentes/referenciales-productos/productos-formulario/productos-formulario.component';
import {ProductosListaComponent} from  './componentes/referenciales-productos/productos-lista/productos-lista.component';

import { LoginComponent } from './componentes/inicio/login/login/login.component';
import { PaginasComponent } from './componentes/inicio/pantalla-principal/paginas/paginas.component';
import { RegistrarUsuarioComponent } from './componentes/inicio/login/registrar-usuario/registrar-usuario.component';
import { PaginaBienvenidaComponent } from './componentes/inicio/pantalla-principal/pagina-bienvenida/pagina-bienvenida.component';
import { EmpresasFormularioComponent } from './componentes/referenciales-empresas/empresas-formulario/empresas-formulario.component';
import { EmpresasListaComponent } from './componentes/referenciales-empresas/empresas-lista/empresas-lista.component';
import { SucursalesFormularioComponent } from './componentes/referenciales-empresas/sucursales-formulario/sucursales-formulario.component';
import { ClientesFormularioComponent } from './componentes/referenciales-personas/clientes-formulario/clientes-formulario.component';
import { ClientesListaComponent } from './componentes/referenciales-personas/clientes-lista/clientes-lista.component';
import { TipodocumentoListaComponent } from './componentes/referenciales-facturas/tipodocumento-lista/tipodocumento-lista.component';

const routes: Routes = [

{
  path:'',
  component:PaginasComponent,
  children:[
    {
      path: 'marcas',
      component:MarcasListaComponent
    },
    {
      path:'bienvenida',
      component: PaginaBienvenidaComponent
    },
    {
      path: 'marcas/agregar',
      component:MarcasFormularioComponent
    },
    
    {
      path: 'marcas/editar/:id',
      component:MarcasFormularioComponent
    },
    
    {
      path: 'unidades/agregar',
      component:UnidaFormularioComponent
    },
    
    {
      path: 'unidades',
      component:UnidaListaComponent
    },
    {
      path: 'unidades/editar/:id',
      component:UnidaFormularioComponent
    },
    {
      path: 'impuestos/agregar',
      component:ImpuestoFormularioComponent
    },
    {
      path: 'impuestos',
      component:ImpuestoListaComponent
    },
    {
      path: 'impuestos/editar/:id',
      component:ImpuestoFormularioComponent
    },
    {
      path: 'presentaciones/agregar',
      component:PresentacionesFormularioComponent
    },
    
    {
      path: 'presentaciones',
      component:PresentacionesListaComponent
    },
    {
      path: 'presentaciones/editar/:id',
      component:PresentacionesFormularioComponent
    },
    {
      path: 'categorias/familia',
      component:CategoriasFormularioComponent
    },
    {
      path: 'categorias/agregar',
      component:CategoriasFormularioComponent
    },
    {
      path: 'categorias',
      component:CategoriasListaComponent
    },
    {
      path: 'categorias/editar/:id',
      component:CategoriasFormularioComponent
    },
    {
      path: 'familias/agregar',
      component:FamiliaFormularioComponent
    },
    {
      path: 'familias',
      component:FamiliaListaComponent
    },
    {
      path: 'familias/editar/:id',
      component:FamiliaFormularioComponent
    },
    {
      path: 'productos/editar/:id',
      component:ProductosFormularioComponent
    },
    {
      path: 'productos/agregar',
      component:ProductosFormularioComponent
    },
    {
      path: 'productos',
      component:ProductosListaComponent
    },

    //referenciales empresas
    {
      path: 'empresas',
      component:EmpresasListaComponent
    },
    {
      path: 'empresas/agregar',
      component:EmpresasFormularioComponent
    },
    {
      path: 'empresas/editar/:id',
      component:EmpresasFormularioComponent
    },
    
    {
      path: 'sucursales/editar/:id',
      component:SucursalesFormularioComponent
    },

    {
      path: 'sucursales/agregar',
      component:SucursalesFormularioComponent
    },
    {
      path: 'clientes/agregar',
      component:ClientesFormularioComponent
    },
    {
      path: 'clientes',
      component:ClientesListaComponent
    },
    //referenciales facturas
    {
      path: 'tipodocumentos',
      component:TipodocumentoListaComponent
    },
    
  ]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path:'registrarusuario',
  component: RegistrarUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
