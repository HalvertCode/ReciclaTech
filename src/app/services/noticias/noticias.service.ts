import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import {Noticia} from "../../interfaces/noticia";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiUrl = environment.apiUrl + "/noticia";

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl).pipe(
      map(noticias => noticias.map(noticia => ({
        ...noticia,
        imagen: noticia.imagen ? 'data:image/jpeg;base64,' + noticia.imagen : null
      })))
    );
  }
}
