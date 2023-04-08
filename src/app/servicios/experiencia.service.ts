import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  public getExperiencia():  Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>("http://localhost:8080/portfolio/experiencia/traer");
//    return this.http.get<Experiencia[]>("./assets/experiencia.json");

  }

}
