import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { ProyectoService } from "../services/proyecto/proyecto.service";
import {Proyecto} from "../interfaces/proyecto";

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.loadProyectos();
  }

  loadProyectos(): void {
    this.proyectoService.obtenerProyectos().subscribe({
      next: (data: Proyecto[]) => {
        this.proyectos = data;
      },
      error: (error) => {
        console.error('Error al cargar los proyectos:', error);
      }
    });
  }
}
