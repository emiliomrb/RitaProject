import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-el-sitio',
  templateUrl: './sobre-el-sitio.component.html',
  styleUrls: ['../../styles/components/_article.scss']
})
export class SobreElSitioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage: 'url("../../../assets/banners/alberdi.jpg")',
  };
  
  backgroundImageContent: { backgroundImageC: string } = {
    backgroundImageC: 'url("../../../assets/banners/cofico.jpeg")',
  };

}
