import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades-para-el-aula',
  templateUrl: './actividades-para-el-aula.component.html',
  styleUrls: ['../../styles/components/_article.scss']
})
export class ActividadesParaElAulaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("../../../assets/banners/stview.jpg")',
  }
}
