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
import { SelectorGradosInstruccionComponent } from './controles/comunes/selector-grados-instruccion/selector-grados-instruccion.component';
import { SelectorEstadoCivilComponent } from './controles/comunes/selector-estado-civil/selector-estado-civil.component';
import { SelectorTipoSeguroComponent } from './controles/comunes/selector-tipo-seguro/selector-tipo-seguro.component';
import { SelectorGrupoSanguinioComponent } from './controles/comunes/selector-grupo-sanguinio/selector-grupo-sanguinio.component';
import { SelectorFactorSanguinioComponent } from './controles/comunes/selector-factor-sanguinio/selector-factor-sanguinio.component';
import { CumplePipe } from './pipes/cumple.pipe';
import { EstadoCivilPipe } from './pipes/estado-civil.pipe';
import { SelectorFechaComponent } from './controles/comunes/selector-fecha/selector-fecha.component';
import { ToastComponent } from './ui/comunes/toast/toast.component';
import { ProgramacionCitasComponent } from './componentes/atencion/atencion-gestante/programacion-citas/programacion-citas.component';
import { EstadoAtencionPipe } from './pipes/estado-atencion.pipe';
import { SelectorRiesgosGestanteComponent } from './controles/comunes/selector-riesgos-gestante/selector-riesgos-gestante.component';
import { SelectorRiesgoComponent } from './controles/comunes/selector-riesgo/selector-riesgo.component';
import { ListaPersonalComponent } from './componentes/personal/lista-personal/lista-personal.component';
import { ReporteGestanteGeneradorComponent } from './reportes/reporte-gestante-generador/reporte-gestante-generador.component';
import { FiltrosRedMicroredIpressComponent } from './controles/comunes/filtros/filtros-red-microred-ipress/filtros-red-microred-ipress.component';
import { FiltrosRangoEntreFechasComponent } from './controles/comunes/filtros/filtros-rango-entre-fechas/filtros-rango-entre-fechas.component';
import { RegistroPartoComponent } from './componentes/parto/registro-parto/registro-parto.component';
import { SelectorIdiomaComponent } from './controles/comunes/selector-idioma/selector-idioma.component';
import { ObservacionCitaComponent } from './componentes/atencion/atencion-gestante/programacion-citas/observacion-cita/observacion-cita.component';
import { ReprogramarCitaComponent } from './componentes/atencion/atencion-gestante/reprogramar-cita/reprogramar-cita.component';
import { ComparativoHisComponent } from './componentes/atencion/analisis-seguimiento/comparativo-his/comparativo-his.component';
import { ModalNotificaacionesComponent } from './componentes/Notificaciones/modal-notificaaciones/modal-notificaaciones.component';
import { ReporteGestantePadronComponent } from './reportes/reporte-gestante-padron/reporte-gestante-padron.component';
import { SelectorReligionComponent } from './controles/comunes/selector-religion/selector-religion.component';
import { SelectorTipoLugarPartoComponent } from './controles/comunes/selector-tipo-lugar-parto/selector-tipo-lugar-parto.component';
import { AtencionPfComponent } from './componentes/atencion/atencion-puerperio/atencion-pf/atencion-pf.component';
import { SelectorMetodosPlanificacionComponent } from './controles/comunes/selector-metodos-planificacion/selector-metodos-planificacion.component';
import { PadreComponent } from './pruebas/padre/padre.component';
import { HijoComponent } from './pruebas/hijo/hijo.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmbitoProfileSelectComponent } from './paginas/ambito-profile-select/ambito-profile-select.component';
import { ReprogramarAtencionPuerperioComponent } from './componentes/atencion/atencion-puerperio/reprogramar-atencion-puerperio/reprogramar-atencion-puerperio.component';
import { NoAtencionPuerperioComponent } from './componentes/atencion/atencion-puerperio/no-atencion-puerperio/no-atencion-puerperio.component';



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
    SelectorCentroPobladoComponent,
    SelectorGradosInstruccionComponent,
    SelectorEstadoCivilComponent,
    SelectorTipoSeguroComponent,
    SelectorGrupoSanguinioComponent,
    SelectorFactorSanguinioComponent,
    CumplePipe,
    EstadoCivilPipe,
    SelectorFechaComponent,
    ToastComponent,
    ProgramacionCitasComponent,
    EstadoAtencionPipe,
    SelectorRiesgosGestanteComponent,
    SelectorRiesgoComponent,
    ListaPersonalComponent,
    ReporteGestanteGeneradorComponent,
    FiltrosRedMicroredIpressComponent,
    FiltrosRangoEntreFechasComponent,
    RegistroPartoComponent,
    SelectorIdiomaComponent,
    ObservacionCitaComponent,
    ReprogramarCitaComponent,
    ComparativoHisComponent,
    ModalNotificaacionesComponent,
    ReporteGestantePadronComponent,
    SelectorReligionComponent,
    SelectorTipoLugarPartoComponent,
    AtencionPfComponent,
    SelectorMetodosPlanificacionComponent,
    PadreComponent,
    HijoComponent,
    AmbitoProfileSelectComponent,
    ReprogramarAtencionPuerperioComponent,
    NoAtencionPuerperioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
