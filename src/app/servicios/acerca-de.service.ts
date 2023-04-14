import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca_De } from '../modelos/acerca-de';
@Injectable({
  providedIn: 'root'
})

export class AcercaDeService {

  constructor(private http: HttpClient) { }

  public getAcercaDe():  Observable<Acerca_De>{
    return this.http.get<Acerca_De>("http://localhost:8080/portfolio/v1/personas/acercade");

  }
}
