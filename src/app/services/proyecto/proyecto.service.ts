import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import {Proyecto} from "../../interfaces/proyecto";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = environment.apiUrl + "/proyectos";

  constructor(private http: HttpClient) { }

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl).pipe(
      map(proyectos => proyectos.map(proyecto => ({
        ...proyecto,
        imagen: proyecto.imagen ? 'data:image/jpeg;base64,' + proyecto.imagen : null
      })))
    );
  }
}
