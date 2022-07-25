import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-ciudadania-y-los-derechos-humanos',
  templateUrl: './la-ciudadania-y-los-derechos-humanos.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class LaCiudadaniaYLosDerechosHumanosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/empatía animal.jpeg")',
  };

}
