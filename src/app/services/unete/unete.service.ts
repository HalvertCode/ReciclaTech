import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class UneteService {


  private apiUrl = environment.apiUrl + "/unete-a-nosotros"; // Cambiar la URL al endpoint correcto en el backend

  constructor(private http: HttpClient) { }

  enviarFormulario(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }

}
