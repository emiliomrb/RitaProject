import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiraciones',
  templateUrl: './inspiraciones.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class InspiracionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/014.jpg")',
  };

}
