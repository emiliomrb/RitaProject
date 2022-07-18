import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '../../../assets/banners/casa-1.jpg',
    '../../../assets/banners/casa-1.jpg',
    '../../../assets/banners/casa-1.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
