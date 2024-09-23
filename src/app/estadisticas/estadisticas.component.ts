import { Component } from '@angular/core';
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

}
