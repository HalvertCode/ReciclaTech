import { Component, OnInit } from '@angular/core';
import { NoticiasService } from "../services/noticias/noticias.service";
import { NgForOf, NgIf } from "@angular/common";
import { NgOptimizedImage } from '@angular/common';
import {Noticia} from "../interfaces/noticia";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.loadNoticias();
  }

  loadNoticias(): void {
    this.noticiasService.getNoticias().subscribe({
      next: (data) => {
        this.noticias = data;
      },
      error: (error) => {
        console.error('Error al cargar las noticias:', error);
      }
    });
  }
}
