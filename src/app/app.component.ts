import { Component } from '@angular/core';
import {FooterComponent} from "./layout/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reciclatech';

  ngOnInit() {

  }

}
