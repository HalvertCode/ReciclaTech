import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HeaderComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reciclatech';

  ngOnInit() {
    const items = document.querySelectorAll('.accordion-item h2');
    
    items.forEach(item => {
      item.addEventListener('click', () => {
        const parent = item.parentElement;
        // @ts-ignore
        parent.classList.toggle('active');
      });
    });
  }
}