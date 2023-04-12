import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  public getEducacion():  Observable<Educacion[]>{
//    return this.http.get<Educacion[]>("./assets/educacion.json");
    return this.http.get<Educacion[]>("http://localhost:8080/portfolio/v1/estudios");

  }

}
