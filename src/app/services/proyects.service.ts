import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  proyects = [
    {
      title: 'asdasdsa',
      description: 'asdasda',
      imageUrl: '',
    },
    {
      title: 'asdasdsa',
      description: 'asdasda',
      imageUrl: '',
    },
    {
      title: 'asdasdsa',
      description: 'asdasda',
      imageUrl: '',
    },
  ];

  get getAllProjects() {
    return this.proyects;
  }
  constructor() {}
}
