import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionGestanteComponent } from './componentes/atencion/atencion-gestante/atencion-gestante.component';
import { AtencionPuerperioComponent } from './componentes/atencion/atencion-puerperio/atencion-puerperio.component';
import { NuevaGestanteComponent } from './componentes/gestante/nueva-gestante/nueva-gestante.component';
import { GestantesListadoComponent } from './componentes/gestantes-listado/gestantes-listado.component';
import { PrincipalNotificacionesComponent } from './componentes/Notificaciones/principal-notificaciones/principal-notificaciones.component';
import { RegistroPartoComponent } from './componentes/parto/registro-parto/registro-parto.component';
import { ListaPersonalComponent } from './componentes/personal/lista-personal/lista-personal.component';
import { ListaUsuariosComponent } from './componentes/usuarios/lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './componentes/usuarios/nuevo-usuario/nuevo-usuario.component';
import { BuscarPersonaHcComponent } from './controles/busquedas/buscar-persona-hc/buscar-persona-hc.component';
import { SelectorRedComponent } from './controles/comunes/selector-red/selector-red.component';
import { SelectorRiesgosGestanteComponent } from './controles/comunes/selector-riesgos-gestante/selector-riesgos-gestante.component';
import { ContenedorComponent } from './layouts/contenedor/contenedor.component';
import { PrincipalComponent } from './layouts/principal/principal.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { ReporteGestanteGeneradorComponent } from './reportes/reporte-gestante-generador/reporte-gestante-generador.component';

const routes: Routes = [
  {
    path: 'sivigyp', component: ContenedorComponent, children: [{ path: 'login', component: LoginComponent }, {
      path: 'principal', component: PrincipalComponent
      , children: [{ path: 'inicio', component: AtencionGestanteComponent }, { path: 'registro-gestante', component: GestantesListadoComponent }, { path: 'atencion-gestante', component: AtencionGestanteComponent },
      { path: 'NuevoPaciente', component: NuevaGestanteComponent },{ path: 'Personal', component: ListaPersonalComponent }
      ,{ path: 'reporte-gestante', component: ReporteGestanteGeneradorComponent },{path:'registrar_parto',component:RegistroPartoComponent}]


    }]
  },

  { path: 'inicio', component: InicioComponent },
  { path: 'registro-gestante', component: GestantesListadoComponent },
  { path: 'atencion-puerperio', component: AtencionPuerperioComponent },
  { path: 'Notificaciones', component: PrincipalNotificacionesComponent },
  { path: 'usuarios/nuevo', component: NuevoUsuarioComponent },

  { path: 'controles/red-selector', component: SelectorRedComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'pru', component: SelectorRiesgosGestanteComponent },
  { path: '', component: GestantesListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
