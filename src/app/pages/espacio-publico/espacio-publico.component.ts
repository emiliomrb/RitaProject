import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espacio-publico',
  templateUrl: './espacio-publico.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class EspacioPublicoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage: 'url("../../../assets/banners/alberdi.jpg")',
  };
}
