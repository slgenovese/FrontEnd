import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  public getProyectos():  Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>("./assets/proyectos.json");

  }
}
