import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModulos } from './componentes/referenciales-productos/productos.modulos';
import { MenuComponent } from './componentes/inicio/pantalla-principal/menu/menu.component';
import { LoginComponent } from './componentes/inicio/login/login/login.component';
import { NopagefoundComponent } from './componentes/inicio/pantalla-principal/nopagefound/nopagefound.component';
import { ContenidoComponent } from './componentes/inicio/pantalla-principal/contenido/contenido.component';
import { PaginasComponent } from './componentes/inicio/pantalla-principal/paginas/paginas.component';
import { RegistrarUsuarioComponent } from './componentes/inicio/login/registrar-usuario/registrar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { HeaderComponent } from './componentes/inicio/pantalla-principal/header/header.component';
import { PaginaBienvenidaComponent } from './componentes/inicio/pantalla-principal/pagina-bienvenida/pagina-bienvenida.component';
import { EmpresasModulos } from './componentes/referenciales-empresas/empresas.modulos';
import { PersonasModulos } from './componentes/referenciales-personas/personas.modulos';
import { ReferencialesFacturasModulos } from './componentes/referenciales-facturas/referencialesfacturas.modulos';
import { AdministrativoPresupuesto } from './componentes/administrativo-presupuesto/presupuesto.modulos';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    NopagefoundComponent,
    ContenidoComponent,
    PaginasComponent,
    RegistrarUsuarioComponent,
    HeaderComponent,
    PaginaBienvenidaComponent,
    
  
      
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductosModulos,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    EmpresasModulos,
    PersonasModulos,
    ReferencialesFacturasModulos,
    AdministrativoPresupuesto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
