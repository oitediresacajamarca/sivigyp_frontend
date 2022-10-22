import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionGestanteComponent } from './componentes/atencion/atencion-gestante/atencion-gestante.component';
import { ObservacionCitaComponent } from './componentes/atencion/atencion-gestante/programacion-citas/observacion-cita/observacion-cita.component';
import { AtencionPuerperioComponent } from './componentes/atencion/atencion-puerperio/atencion-puerperio.component';
import { NuevaGestanteComponent } from './componentes/gestante/nueva-gestante/nueva-gestante.component';
import { GestantesListadoComponent } from './componentes/gestantes-listado/gestantes-listado.component';
import { ModalNotificaacionesComponent } from './componentes/Notificaciones/modal-notificaaciones/modal-notificaaciones.component';
import { PrincipalNotificacionesComponent } from './componentes/Notificaciones/principal-notificaciones/principal-notificaciones.component';
import { RegistroPartoComponent } from './componentes/parto/registro-parto/registro-parto.component';
import { ListaPersonalComponent } from './componentes/personal/lista-personal/lista-personal.component';
import { ContenedorComponent } from './layouts/contenedor/contenedor.component';
import { PrincipalComponent } from './layouts/principal/principal.component';
import { AmbitoProfileSelectComponent } from './paginas/ambito-profile-select/ambito-profile-select.component';
import { LoginComponent } from './paginas/login/login.component';

import { ReporteGestanteGeneradorComponent } from './reportes/reporte-gestante-generador/reporte-gestante-generador.component';
import { ReporteGestantePadronComponent } from './reportes/reporte-gestante-padron/reporte-gestante-padron.component';

const routes: Routes = [
  {
    path: 'sivigyp', component: ContenedorComponent,

    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'principal', component: PrincipalComponent
        , children:
          [{ path: 'inicio', component: GestantesListadoComponent },
          { path: 'registro-gestante', component: GestantesListadoComponent },
          { path: 'atencion-gestante', component: AtencionGestanteComponent },
          { path: 'NuevoPaciente', component: NuevaGestanteComponent },
          { path: 'Personal', component: ListaPersonalComponent },
          { path: 'reporte-gestante', component: ReporteGestanteGeneradorComponent },
          { path: 'registrar_parto/:id_atencion', component: RegistroPartoComponent },
          { path: 'prueba', component: PrincipalNotificacionesComponent },
          { path: 'modal', component: ModalNotificaacionesComponent },
          { path: 'atencion-puerperio/:ID_ATENCION', component: AtencionPuerperioComponent },
          { path: 'reporte', component: ReporteGestantePadronComponent },
          { path: 'profile-ambito', component: AmbitoProfileSelectComponent }
          ]
      }]
  },


  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  /* { path: 'principal', component: PrincipalComponent ,children:[{path:'inicio', component:HijoComponent}]},
     { path: 'principal', component: PrincipalComponent
        , children:
          [{ path: 'inicio', component: GestantesListadoComponent },
          { path: 'registro-gestante', component: GestantesListadoComponent },
          { path: 'atencion-gestante', component: AtencionGestanteComponent },
          { path: 'NuevoPaciente', component: NuevaGestanteComponent },
          { path: 'Personal', component: ListaPersonalComponent },
          { path: 'reporte-gestante', component: ReporteGestanteGeneradorComponent },
          { path: 'registrar_parto/:id_atencion', component: RegistroPartoComponent },
          { path: 'prueba', component: PrincipalNotificacionesComponent },
          { path: 'modal', component: ModalNotificaacionesComponent },
          { path: 'atencion-puerperio/:ID_ATENCION', component: AtencionPuerperioComponent },
          { path: 'reporte', component: ReporteGestantePadronComponent }
          ]
      },*/





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
