import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-un-espacio-y-una-democracia-por-construir',
  templateUrl: './un-espacio-y-una-democracia-por-construir.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class UnEspacioYUnaDemocraciaPorConstruirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/vidas trans.jpeg")',
  };

}
