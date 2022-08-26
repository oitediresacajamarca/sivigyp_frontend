import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionGestanteComponent } from './componentes/atencion/atencion-gestante/atencion-gestante.component';
import { AtencionPuerperioComponent } from './componentes/atencion/atencion-puerperio/atencion-puerperio.component';
import { GestantesListadoComponent } from './componentes/gestantes-listado/gestantes-listado.component';
import { PrincipalNotificacionesComponent } from './componentes/Notificaciones/principal-notificaciones/principal-notificaciones.component';
import { NuevoUsuarioComponent } from './componentes/usuarios/nuevo-usuario/nuevo-usuario.component';
import { SelectorRedComponent } from './controles/comunes/selector-red/selector-red.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {path: 'atencion-gestante',component:AtencionGestanteComponent},
  {path: 'inicio',component:InicioComponent},
  {path: 'registro-gestante',component:GestantesListadoComponent},
  {path: 'atencion-puerperio',component:AtencionPuerperioComponent},
  {path: 'Notificaciones',component:PrincipalNotificacionesComponent},
  {path: 'usuarios/nuevo',component:NuevoUsuarioComponent},

  {path: 'controles/red-selector',component:SelectorRedComponent},
  {path:'',component:GestantesListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
