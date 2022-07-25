import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrls: ['../../styles/components/_article.scss']
})
export class BibliografiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("../../../assets/banners/colonygralpaz.jpg")',
  }

}
