import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadaniaComponent } from './pages/ciudadania/ciudadania.component';
import { EspacioComponent } from './pages/espacio/espacio.component';
import { EspacioPublicoComponent } from './pages/espacio-publico/espacio-publico.component';
import { SobreElSitioComponent } from './pages/sobre-el-sitio/sobre-el-sitio.component';
import { LaCiudadaniaYLosDerechosHumanosComponent } from './pages/la-ciudadania-y-los-derechos-humanos/la-ciudadania-y-los-derechos-humanos.component';
import { UnEspacioYUnaDemocraciaPorConstruirComponent } from './pages/un-espacio-y-una-democracia-por-construir/un-espacio-y-una-democracia-por-construir.component';
import { PensarConImagenesComponent } from './pages/pensar-con-imagenes/pensar-con-imagenes.component';
import { InspiracionesComponent } from './pages/inspiraciones/inspiraciones.component';
import { RecorridoFotograficoComponent } from './pages/recorrido-fotografico/recorrido-fotografico.component';
import { BibliografiaComponent } from './pages/bibliografia/bibliografia.component';
import { ActividadesParaElAulaComponent } from './pages/actividades-para-el-aula/actividades-para-el-aula.component';
import { LasoComponent } from './pages/laso/laso.component';
import { WolfComponent } from './pages/wolf/wolf.component';
import { EijkelboomComponent } from './pages/eijkelboom/eijkelboom.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'ciudadania',
    component: CiudadaniaComponent,
  },
  {
    path: 'espacio',
    component: EspacioComponent,
  },
  {
    path: 'espacio-publico',
    component: EspacioPublicoComponent,
  },
  {
    path: 'sobre-el-sitio',
    component: SobreElSitioComponent,
  },
  {
    path:'la-ciudadania-y-los-derechos-humanos',
    component: LaCiudadaniaYLosDerechosHumanosComponent,
  },
  {
    path:'un-espacio-y-una-democracia-por-construir',
    component: UnEspacioYUnaDemocraciaPorConstruirComponent,
  },
  {
    path:'pensar-con-imagenes',
    component: PensarConImagenesComponent,
  },
  {
    path:'inspiraciones',
    component: InspiracionesComponent,
  },
  {
    path:'recorrido-fotografico',
    component: RecorridoFotograficoComponent,
  },
  {
    path:'bibliografia',
    component: BibliografiaComponent,
  },
  {
    path:'actividades-para-el-aula',
    component: ActividadesParaElAulaComponent,
  },
  {
    path:'laso',
    component: LasoComponent,
  },
  {
    path:'wolf',
    component: WolfComponent,
  },
  {
    path:'eijkelboom',
    component: EijkelboomComponent,
  },


  {
    path: '**',
    redirectTo: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
