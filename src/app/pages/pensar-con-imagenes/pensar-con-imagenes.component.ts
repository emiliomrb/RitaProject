import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensar-con-imagenes',
  templateUrl: './pensar-con-imagenes.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class PensarConImagenesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage: 'url("/../../../assets/banners/floresyperrito.jpeg")',
  };

}
