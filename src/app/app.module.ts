import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './layouts/principal/principal.component';
import { MenuPaginaComponent } from './componentes/menu-pagina/menu-pagina.component';
import { GestantesListadoComponent } from './componentes/gestantes-listado/gestantes-listado.component';
import { ListadoAtencionesComponent } from './componentes/atencion/listado-atenciones/listado-atenciones.component';
import { AtencionGestanteComponent } from './componentes/atencion/atencion-gestante/atencion-gestante.component';
import { FormsModule } from '@angular/forms';
import { SelecionaFilaDirective } from './directivas/seleciona-fila.directive';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AtencionPuerperioComponent } from './componentes/atencion/atencion-puerperio/atencion-puerperio.component';
import { PrincipalNotificacionesComponent } from './componentes/Notificaciones/principal-notificaciones/principal-notificaciones.component';
import { NuevoUsuarioComponent } from './componentes/usuarios/nuevo-usuario/nuevo-usuario.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorRedComponent } from './controles/comunes/selector-red/selector-red.component';
import { SelectorMicroredComponent } from './controles/comunes/selector-microred/selector-microred.component';
import { SelectorIpressComponent } from './controles/comunes/selector-ipress/selector-ipress.component';
import { ContenedorComponent } from './layouts/contenedor/contenedor.component';
import { LoginComponent } from './paginas/login/login.component';
import { ListaUsuariosComponent } from './componentes/usuarios/lista-usuarios/lista-usuarios.component';
import { BuscarPersonaHcComponent } from './controles/busquedas/buscar-persona-hc/buscar-persona-hc.component';
import { NuevaGestanteComponent } from './componentes/gestante/nueva-gestante/nueva-gestante.component';
import { SelectorProvinciaComponent } from './controles/comunes/selector-provincia/selector-provincia.component';
import { SelectorDistritoComponent } from './controles/comunes/selector-distrito/selector-distrito.component';
import { SelectorCentroPobladoComponent } from './controles/comunes/selector-centro-poblado/selector-centro-poblado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuPaginaComponent,
    GestantesListadoComponent,
    ListadoAtencionesComponent,
    AtencionGestanteComponent,
    SelecionaFilaDirective,
    InicioComponent,
    AtencionPuerperioComponent,
    PrincipalNotificacionesComponent,
    NuevoUsuarioComponent,
    SelectorRedComponent,
    SelectorMicroredComponent,
    SelectorIpressComponent,
    ContenedorComponent,
    LoginComponent,
    ListaUsuariosComponent,
    BuscarPersonaHcComponent,
    NuevaGestanteComponent,
    SelectorProvinciaComponent,
    SelectorDistritoComponent,
    SelectorCentroPobladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
