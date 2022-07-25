import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { ProyectItemComponent } from './proyect-item/proyect-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ArticleComponent } from './article/article.component';
import { FotosSanjoComponent } from './fotos-sanjo/fotos-sanjo.component';

@NgModule({
  declarations: [
    ProyectListComponent,
    ProyectItemComponent,
    CarouselComponent,
    ContactFormComponent,
    ArticleComponent,
    FotosSanjoComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    ProyectListComponent,
    ProyectItemComponent,
    CarouselComponent,
    ContactFormComponent,
    ArticleComponent,
    FotosSanjoComponent
  ],
  bootstrap: [CarouselComponent],
})
export class ComponentsModule {}
