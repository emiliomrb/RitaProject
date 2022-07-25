import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wolf',
  templateUrl: './wolf.component.html',
  styleUrls: ['../../styles/components/_article.scss'],
})
export class WolfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundImageHeader: { backgroundImage: string } = {
    backgroundImage:
      'url("/../../../assets/banners/back_door_05.jpg")',
  };

}
