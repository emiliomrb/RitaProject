import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';

@Component({
  selector: 'app-proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.scss'],
})
export class ProyectListComponent implements OnInit {
  constructor(private proyectService: ProyectsService) {}
  projects: any = [];
  ngOnInit() {
    this.projects = this.proyectService.getAllProjects;
  }
}
