import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ParallaxComponent } from './parallax/parallax.component';
import { CiudadaniaComponent } from './ciudadania/ciudadania.component';
import { EspacioComponent } from './espacio/espacio.component';
import { EspacioPublicoComponent } from './espacio-publico/espacio-publico.component';
import { LaDimensionEspacialDeLaCiudadaniaComponent } from './la-dimension-espacial-de-la-ciudadania/la-dimension-espacial-de-la-ciudadania.component';
import { SobreElSitioComponent } from './sobre-el-sitio/sobre-el-sitio.component';
import { LaCiudadaniaYLosDerechosHumanosComponent } from './la-ciudadania-y-los-derechos-humanos/la-ciudadania-y-los-derechos-humanos.component';
import { UnEspacioYUnaDemocraciaPorConstruirComponent } from './un-espacio-y-una-democracia-por-construir/un-espacio-y-una-democracia-por-construir.component';
import { PensarConImagenesComponent } from './pensar-con-imagenes/pensar-con-imagenes.component';
import { InspiracionesComponent } from './inspiraciones/inspiraciones.component';
import { RecorridoFotograficoComponent } from './recorrido-fotografico/recorrido-fotografico.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { ActividadesParaElAulaComponent } from './actividades-para-el-aula/actividades-para-el-aula.component';
import { LasoComponent } from './laso/laso.component';
import { WolfComponent } from './wolf/wolf.component';
import { EijkelboomComponent } from './eijkelboom/eijkelboom.component';

@NgModule({
  declarations: [MainComponent, AboutUsComponent, ParallaxComponent, CiudadaniaComponent, EspacioComponent, EspacioPublicoComponent, LaDimensionEspacialDeLaCiudadaniaComponent, SobreElSitioComponent, LaCiudadaniaYLosDerechosHumanosComponent, UnEspacioYUnaDemocraciaPorConstruirComponent, PensarConImagenesComponent, InspiracionesComponent, RecorridoFotograficoComponent, BibliografiaComponent, ActividadesParaElAulaComponent, LasoComponent, WolfComponent, EijkelboomComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, ComponentsModule],
})
export class PagesModule {}
