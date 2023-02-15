import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grafico } from '../modelo/grafico';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private http: HttpClient) { }

  public getGrafico():  Observable<Grafico[]>{
    return this.http.get<Grafico[]>("./assets/grafico.json");

  }
}
