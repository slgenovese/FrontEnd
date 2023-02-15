import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  public getAcercaDe():  Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>("./assets/experiencia.json");

  }

}
