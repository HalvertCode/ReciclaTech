import { Routes } from '@angular/router';
import {ProyectosComponent} from "./proyectos/proyectos.component";
import {NoticiasComponent} from "./noticias/noticias.component";
import {EstadisticasComponent} from "./estadisticas/estadisticas.component";
import {UneteComponent} from "./unete/unete.component";
import {InicioComponent} from "./inicio/inicio.component";

export const routes: Routes = [
  { path: 'proyectos', component: ProyectosComponent },
  {path: 'estadisticas', component:EstadisticasComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'unete', component: UneteComponent},
  {path: '', component: InicioComponent},


];
