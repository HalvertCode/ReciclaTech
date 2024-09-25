import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
