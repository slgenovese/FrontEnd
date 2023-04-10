import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grafico } from '../modelos/grafico';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private http: HttpClient) { }

  public getGrafico():  Observable<Grafico[]>{
    return this.http.get<Grafico[]>("http://localhost:8080/portfolio/habilidades/traer");

  }
}
