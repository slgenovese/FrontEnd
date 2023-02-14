import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca_de } from '../app/modelo/acerca-de';

@Injectable({
  providedIn: 'root'
})

export class AcercaDeService {

  constructor(private http: HttpClient) { }

  public getAcercaDe():  Observable<Acerca_de[]>{
    return this.http.get<Acerca_de[]>("./assets/acerca-de.json");

  }
}
