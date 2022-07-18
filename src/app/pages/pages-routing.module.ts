import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {ParallaxComponent} from './parallax/parallax.component';
import { CiudadaniaComponent } from './ciudadania/ciudadania.component';
import { LaDimensionEspacialDeLaCiudadaniaComponent } from './la-dimension-espacial-de-la-ciudadania/la-dimension-espacial-de-la-ciudadania.component';

const routes: Routes = [
  {
    path: '',
    component: ParallaxComponent,
  },
  {
    path:'ciudadania',
    component: CiudadaniaComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
