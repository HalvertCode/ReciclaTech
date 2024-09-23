import { Routes } from '@angular/router';
import {ProyectosComponent} from "./proyectos/proyectos.component";
import {NoticiasComponent} from "./noticias/noticias.component";

export const routes: Routes = [
  { path: 'proyectos', component: ProyectosComponent },

  {path: 'noticias', component: NoticiasComponent}

];
