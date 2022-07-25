import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eijkelboom',
  templateUrl: './eijkelboom.component.html',
  styleUrls: ['../../styles/components/_article.scss']
})
export class EijkelboomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("../../../assets/banners/eijkelboom.jpg")',
  }

}
