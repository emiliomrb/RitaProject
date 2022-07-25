import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laso',
  templateUrl: './laso.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class LasoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/laso 1.png")',
  };

}
