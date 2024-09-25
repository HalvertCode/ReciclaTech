import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  ngOnInit() {
    const items = document.querySelectorAll('.accordion-item h2');

    items.forEach(item => {
      item.addEventListener('click', () => {
        const parent = item.parentElement;
        if (parent) {  // Add a null check here
          parent.classList.toggle('active');
        }
      });
    });
  }
}
