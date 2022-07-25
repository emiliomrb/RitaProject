import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorrido-fotografico',
  templateUrl: './recorrido-fotografico.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class RecorridoFotograficoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/grafitis.jpeg")',
  };

}
