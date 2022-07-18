import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class EspacioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("../../../assets/banners/pedidosya_no_al_ajuste.jpeg")',
  };
}
