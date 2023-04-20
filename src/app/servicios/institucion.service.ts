import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institucion } from '../modelos/institucion';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  constructor(private http: HttpClient) { }

  public getInstitucion():  Observable<Institucion[]>{
    return this.http.get<Institucion[]>("http://localhost:8080/portfolio/v1/instituciones");

  }
}
