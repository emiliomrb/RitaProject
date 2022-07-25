import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudadania',
  templateUrl: './ciudadania.component.html',
  styleUrls: ['../../styles/components/_article.scss']
})
export class CiudadaniaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/mural_la_lucha_nos_hace_libres.jpeg")',
  };

}
