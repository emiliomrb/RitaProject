import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { ProyectItemComponent } from './proyect-item/proyect-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ArticleComponent } from './article/article.component';
@NgModule({
  declarations: [
    ProyectListComponent,
    ProyectItemComponent,
    CarouselComponent,
    GridLayoutComponent,
    ContactFormComponent,
    ArticleComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    ProyectListComponent,
    ProyectItemComponent,
    CarouselComponent,
    GridLayoutComponent,
    ContactFormComponent,
    ArticleComponent
  ],
  bootstrap: [CarouselComponent],
})
export class ComponentsModule {}
